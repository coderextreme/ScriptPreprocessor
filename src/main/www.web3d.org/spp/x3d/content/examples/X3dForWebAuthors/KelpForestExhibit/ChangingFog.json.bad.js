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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'] = function() {
	this.set_get_clock_hit = function (value) {
		try {
			this.proxy.get_clock_hit = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting get_clock_hit '+e);
			console.error('Problems setting get_clock_hit',e);
		}
	};
	this.get_clock_hit_changed = function () {
		var value = this.get_clock_hit;
		return value;
	};
	try {
		this.get_clock_hit = new SFTime();
	} catch (e) {
		console.log('Problems setting get_clock_hit '+e);
		console.error('Problems setting get_clock_hit',e);
	}
	this.set_run_script = function (value) {
		try {
			this.proxy.run_script = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting run_script '+e);
			console.error('Problems setting run_script',e);
		}
	};
	this.run_script_changed = function () {
		var value = this.run_script;
		return value;
	};
	try {
		this.run_script = new SFBool(false);
	} catch (e) {
		console.log('Problems setting run_script '+e);
		console.error('Problems setting run_script',e);
	}
	this.set_get_depth = function (value) {
		try {
			this.proxy.get_depth = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting get_depth '+e);
			console.error('Problems setting get_depth',e);
		}
	};
	this.get_depth_changed = function () {
		var value = this.get_depth;
		return value;
	};
	try {
		this.get_depth = new SFVec3f();
	} catch (e) {
		console.log('Problems setting get_depth '+e);
		console.error('Problems setting get_depth',e);
	}
	this.set_visibility = function (value) {
		try {
			this.proxy.visibility = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting visibility '+e);
			console.error('Problems setting visibility',e);
		}
	};
	this.visibility_changed = function () {
		var value = this.visibility;
		return value;
	};
	try {
		this.visibility = undefined;
	} catch (e) {
		console.log('Problems setting visibility '+e);
		console.error('Problems setting visibility',e);
	}
	this.set_visibility = function (value) {
		try {
			this.proxy.visibility = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting visibility '+e);
			console.error('Problems setting visibility',e);
		}
	};
	this.visibility_changed = function () {
		var value = this.visibility;
		return value;
	};
	try {
		this.visibility = undefined;
	} catch (e) {
		console.log('Problems setting visibility '+e);
		console.error('Problems setting visibility',e);
	}


ecmascript:
// REF: http://astronomy.swin.edu.au/pbourke/geometry/rotate/

	this.initialize = function () {
   visibility = 20;
   depth = 0;
   pos = (0,0,0);
   console.error ('Position output from ProximitySensor.');
}
;

	this.get_clock_hit = function (clock_msg) {
     this.proxy.run_script = true;
}
;

	this.get_depth = function ( position ) {

   pos = position;
   depth = position[1] - 30;   

}
;

	this.set_visibility = function ( rotation ) {

 if (this.proxy.run_script) {

//z coordinate of the default viewpoint direction(0,0,-1)
   initZ = -1;  

   rX = rotation[0];  // x coordinate of the rotation
   rY = rotation[1];  // y coordinate of the rotation
   rZ = rotation[2];  // z coordinate of the rotation

   theta = rotation[3];  // angle of rotation in radians
	
console.error ('theta:' + theta);

   cosTheta = Math.cos(theta);
   sinTheta = Math.sin(theta);

console.error ('cosTheta:' + cosTheta + ' sinTheta:'+ sinTheta);


// calculate the y coordinate of the point after rotation
/* there are 8 other terms in the full conversion, but 6 are equal
to zero because of the choice of a starting point on the z-axis. The
other two are not calculated since all we need is the y coordinate
*/
   finalY = ((1 - cosTheta) * rY * rZ - rX * sinTheta) * initZ;

console.error ('final y:' + finalY);

//calculate the elevation/depression angle of the final point location

   elevation = Math.asin(finalY);

console.error ('elevation:' + elevation);

   directionFactor = 1 + 0.2 * (4 * elevation / Math.PI);
   depthAdjust = (60 + depth)/60
   depthFactor = Math.max(depthAdjust,0.05);

   this.proxy.visibility_changed =  60 * depthFactor * directionFactor; 
   console.error ('depth=' + depth + ', elevation=' + elevation + 
        ', this.proxy.visibility_changed=' + this.proxy.visibility_changed);
   this.proxy.run_script = false;

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].initialize();
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].get_clock_hit(X3DJSON.nodeUtil("Scene","Clock","cycleTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].get_clock_hit(X3DJSON.nodeUtil("Scene","Clock","cycleTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","ProxSensor")) {
X3DJSON.nodeUtil("Scene","ProxSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].get_depth(X3DJSON.nodeUtil("Scene","ProxSensor","position"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].get_depth(X3DJSON.nodeUtil("Scene","ProxSensor","position"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","ProxSensor")) {
X3DJSON.nodeUtil("Scene","ProxSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].set_visibility(X3DJSON.nodeUtil("Scene","ProxSensor","orientation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].set_visibility(X3DJSON.nodeUtil("Scene","ProxSensor","orientation"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility']['ACTION']['visibility'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility']['ACTION']['visibility'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility']['ACTION']['visibility'].push(function(property, value) {
		if (property === 'visibility') {
			X3DJSON.nodeUtil("Scene","Water","visibilityRange",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].visibility_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].visibility_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].visibility, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Water","visibilityRange",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].visibility_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].visibility_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].visibility, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].get_clock_hit(X3DJSON.nodeUtil("Scene","Clock","cycleTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].get_depth(X3DJSON.nodeUtil("Scene","ProxSensor","position"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].set_visibility(X3DJSON.nodeUtil("Scene","ProxSensor","orientation"), __eventTime);
			X3DJSON.nodeUtil("Scene","Water","visibilityRange",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].visibility_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].visibility_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/X3dForWebAuthors/KelpForestExhibit/ChangingFog.json']['ChangeVisibility'].visibility, __eventTime);