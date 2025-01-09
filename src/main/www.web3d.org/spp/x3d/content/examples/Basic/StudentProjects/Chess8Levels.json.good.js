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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/Chess8Levels.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/StudentProjects/Chess8Levels.json'] = {};
}

    if (X3DJSON.nodeUtil("Scene","RedPawn1TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn1TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDPAWN1CLOCK")) {
X3DJSON.nodeUtil("Scene","REDPAWN1CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn1PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedPawn1PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn1PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn1PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn2TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn2TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDPAWN2CLOCK")) {
X3DJSON.nodeUtil("Scene","REDPAWN2CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn2PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedPawn2PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn2PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn2PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn3TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn3TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDPAWN3CLOCK")) {
X3DJSON.nodeUtil("Scene","REDPAWN3CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn3PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedPawn3PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn3PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn3PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn4TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn4TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDPAWN4CLOCK")) {
X3DJSON.nodeUtil("Scene","REDPAWN4CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn4PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedPawn4PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn4PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn4PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn5TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn5TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDPAWN5CLOCK")) {
X3DJSON.nodeUtil("Scene","REDPAWN5CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn5PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedPawn5PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn5PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn5PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn6TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn6TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDPAWN6CLOCK")) {
X3DJSON.nodeUtil("Scene","REDPAWN6CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn6PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedPawn6PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn6PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn6PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn7TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn7TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDPAWN7CLOCK")) {
X3DJSON.nodeUtil("Scene","REDPAWN7CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn7PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedPawn7PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn7PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn7PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn8TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn8TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDPAWN8CLOCK")) {
X3DJSON.nodeUtil("Scene","REDPAWN8CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn8PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedPawn8PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedPawn8PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedPawn8PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedCastle1TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedCastle1TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDCASTLE1CLOCK")) {
X3DJSON.nodeUtil("Scene","REDCASTLE1CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedCastle1PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedCastle1PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedCastle1PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedCastle1PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedKnight1TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedKnight1TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDKNIGHT1CLOCK")) {
X3DJSON.nodeUtil("Scene","REDKNIGHT1CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedKnight1PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedKnight1PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedKnight1PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedKnight1PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedBishop1TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedBishop1TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDBISHOP1CLOCK")) {
X3DJSON.nodeUtil("Scene","REDBISHOP1CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedBishop1PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedBishop1PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedBishop1PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedBishop1PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedKingTouchSensor")) {
X3DJSON.nodeUtil("Scene","RedKingTouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDKINGCLOCK")) {
X3DJSON.nodeUtil("Scene","REDKINGCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedKingPathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedKingPathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedKingPlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedKingPlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedQueenTouchSensor")) {
X3DJSON.nodeUtil("Scene","RedQueenTouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDQUEENCLOCK")) {
X3DJSON.nodeUtil("Scene","REDQUEENCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedQueenPathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedQueenPathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedQueenPlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedQueenPlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedBishop2TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedBishop2TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDBISHOP2CLOCK")) {
X3DJSON.nodeUtil("Scene","REDBISHOP2CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedBishop2PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedBishop2PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedBishop2PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedBishop2PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedKnight2TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedKnight2TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDKNIGHT2CLOCK")) {
X3DJSON.nodeUtil("Scene","REDKNIGHT2CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedKnight2PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedKnight2PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedKnight2PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedKnight2PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedCastle2TouchSensor")) {
X3DJSON.nodeUtil("Scene","RedCastle2TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","REDCASTLE2CLOCK")) {
X3DJSON.nodeUtil("Scene","REDCASTLE2CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedCastle2PathInterpolator")) {
X3DJSON.nodeUtil("Scene","RedCastle2PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RedCastle2PlaneSensor")) {
X3DJSON.nodeUtil("Scene","RedCastle2PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn1TouchSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn1TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEPAWN1CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEPAWN1CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn1PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BluePawn1PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn1PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn1PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn2TouchSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn2TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEPAWN2CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEPAWN2CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn2PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BluePawn2PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn2PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn2PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn3TouchSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn3TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEPAWN3CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEPAWN3CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn3PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BluePawn3PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn3PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn3PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn4TouchSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn4TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEPAWN4CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEPAWN4CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn4PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BluePawn4PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn4PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn4PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn5TouchSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn5TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEPAWN5CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEPAWN5CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn5PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BluePawn5PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn5PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn5PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn6TouchSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn6TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEPAWN6CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEPAWN6CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn6PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BluePawn6PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn6PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn6PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn7TouchSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn7TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEPAWN7CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEPAWN7CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn7PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BluePawn7PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn7PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn7PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn8TouchSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn8TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEPAWN8CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEPAWN8CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn8PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BluePawn8PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BluePawn8PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BluePawn8PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueCastle1TouchSensor")) {
X3DJSON.nodeUtil("Scene","BlueCastle1TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUECASTLE1CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUECASTLE1CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueCastle1PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BlueCastle1PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueCastle1PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BlueCastle1PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueKnight1TouchSensor")) {
X3DJSON.nodeUtil("Scene","BlueKnight1TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEKNIGHT1CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEKNIGHT1CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueKnight1PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BlueKnight1PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueKnight1PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BlueKnight1PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueBishop1TouchSensor")) {
X3DJSON.nodeUtil("Scene","BlueBishop1TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEBISHOP1CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEBISHOP1CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueBishop1PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BlueBishop1PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueBishop1PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BlueBishop1PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueKingTouchSensor")) {
X3DJSON.nodeUtil("Scene","BlueKingTouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEKINGCLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEKINGCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueKingPathInterpolator")) {
X3DJSON.nodeUtil("Scene","BlueKingPathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueKingPlaneSensor")) {
X3DJSON.nodeUtil("Scene","BlueKingPlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueQueenTouchSensor")) {
X3DJSON.nodeUtil("Scene","BlueQueenTouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEQUEENCLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEQUEENCLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueQueenPathInterpolator")) {
X3DJSON.nodeUtil("Scene","BlueQueenPathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueQueenPlaneSensor")) {
X3DJSON.nodeUtil("Scene","BlueQueenPlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueBishop2TouchSensor")) {
X3DJSON.nodeUtil("Scene","BlueBishop2TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEBISHOP2CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEBISHOP2CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueBishop2PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BlueBishop2PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueBishop2PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BlueBishop2PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueKnight2TouchSensor")) {
X3DJSON.nodeUtil("Scene","BlueKnight2TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUEKNIGHT2CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUEKNIGHT2CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueKnight2PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BlueKnight2PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueKnight2PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BlueKnight2PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueCastle2TouchSensor")) {
X3DJSON.nodeUtil("Scene","BlueCastle2TouchSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BLUECASTLE2CLOCK")) {
X3DJSON.nodeUtil("Scene","BLUECASTLE2CLOCK").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueCastle2PathInterpolator")) {
X3DJSON.nodeUtil("Scene","BlueCastle2PathInterpolator").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BlueCastle2PlaneSensor")) {
X3DJSON.nodeUtil("Scene","BlueCastle2PlaneSensor").addEventListener('outputchange', function(event) {
}, false);
}
