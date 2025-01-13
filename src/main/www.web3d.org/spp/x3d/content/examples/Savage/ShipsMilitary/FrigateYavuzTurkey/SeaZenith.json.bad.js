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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'] = function() {
	this.set_LRotation = function (value) {
		try {
			this.proxy.LRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting LRotation '+e);
			console.error('Problems setting LRotation',e);
		}
	};
	this.LRotation_changed = function () {
		var value = this.LRotation;
		return value;
	};
	try {
		this.LRotation = undefined;
	} catch (e) {
		console.log('Problems setting LRotation '+e);
		console.error('Problems setting LRotation',e);
	}
	this.set_RRotation = function (value) {
		try {
			this.proxy.RRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting RRotation '+e);
			console.error('Problems setting RRotation',e);
		}
	};
	this.RRotation_changed = function () {
		var value = this.RRotation;
		return value;
	};
	try {
		this.RRotation = undefined;
	} catch (e) {
		console.log('Problems setting RRotation '+e);
		console.error('Problems setting RRotation',e);
	}
	this.set_get_CurRotation = function (value) {
		try {
			this.proxy.get_CurRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting get_CurRotation '+e);
			console.error('Problems setting get_CurRotation',e);
		}
	};
	this.get_CurRotation_changed = function () {
		var value = this.get_CurRotation;
		return value;
	};
	try {
		this.get_CurRotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting get_CurRotation '+e);
		console.error('Problems setting get_CurRotation',e);
	}
	this.set_isLeft = function (value) {
		try {
			this.proxy.isLeft = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isLeft '+e);
			console.error('Problems setting isLeft',e);
		}
	};
	this.isLeft_changed = function () {
		var value = this.isLeft;
		return value;
	};
	try {
		this.isLeft = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isLeft '+e);
		console.error('Problems setting isLeft',e);
	}
	this.set_isRight = function (value) {
		try {
			this.proxy.isRight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isRight '+e);
			console.error('Problems setting isRight',e);
		}
	};
	this.isRight_changed = function () {
		var value = this.isRight;
		return value;
	};
	try {
		this.isRight = new SFBool(false);
	} catch (e) {
		console.log('Problems setting isRight '+e);
		console.error('Problems setting isRight',e);
	}
	this.set_CurRot = function (value) {
		try {
			this.proxy.CurRot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting CurRot '+e);
			console.error('Problems setting CurRot',e);
		}
	};
	this.CurRot_changed = function () {
		var value = this.CurRot;
		return value;
	};
	try {
		this.CurRot = new SFRotation(0,1,0,0);
	} catch (e) {
		console.log('Problems setting CurRot '+e);
		console.error('Problems setting CurRot',e);
	}
	this.set_newRotation = function (value) {
		try {
			this.proxy.newRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newRotation '+e);
			console.error('Problems setting newRotation',e);
		}
	};
	this.newRotation_changed = function () {
		var value = this.newRotation;
		return value;
	};
	try {
		this.newRotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting newRotation '+e);
		console.error('Problems setting newRotation',e);
	}


ecmascript:

	this.initialize = function () {
   this.proxy.CurRot[0] = 0.0;
   this.proxy.CurRot[1] = 1.0;
   this.proxy.CurRot[2] = 0.0;
   this.proxy.CurRot[3] = 0.0;
}
;

	this.set_LRotation = function (bool,time) {
   this.proxy.isLeft  =  bool;
   this.proxy.isRight = !bool;
   if(this.proxy.isLeft) {
      this.generate_Rotation();
   }
}
;

	this.set_RRotation = function (bool,time) {
   this.proxy.isRight =  bool;
   this.proxy.isLeft  = !bool;
   if(this.proxy.isRight) {
      this.generate_Rotation();
   }
}
;

	this.get_CurRotation = function (cR,time) {
   this.proxy.CurRot = cR;
}
;

	this.generate_Rotation = function () {
   this.proxy.newRotation = this.proxy.CurRot;
   if(this.proxy.isLeft) {
      if(this.proxy.CurRot[3] < 1.7) {
          this.proxy.newRotation[3] = this.proxy.CurRot[3] + 0.2;
      }
   }

   else if(this.proxy.isRight) {
      if(this.proxy.CurRot[3] > -1.7) {
          this.proxy.newRotation[3] = this.proxy.CurRot[3] - 0.2;
      }
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'] = function() {
	this.set_Elevation = function (value) {
		try {
			this.proxy.Elevation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Elevation '+e);
			console.error('Problems setting Elevation',e);
		}
	};
	this.Elevation_changed = function () {
		var value = this.Elevation;
		return value;
	};
	try {
		this.Elevation = undefined;
	} catch (e) {
		console.log('Problems setting Elevation '+e);
		console.error('Problems setting Elevation',e);
	}
	this.set_Descendance = function (value) {
		try {
			this.proxy.Descendance = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Descendance '+e);
			console.error('Problems setting Descendance',e);
		}
	};
	this.Descendance_changed = function () {
		var value = this.Descendance;
		return value;
	};
	try {
		this.Descendance = undefined;
	} catch (e) {
		console.log('Problems setting Descendance '+e);
		console.error('Problems setting Descendance',e);
	}
	this.set_get_CurOrientation = function (value) {
		try {
			this.proxy.get_CurOrientation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting get_CurOrientation '+e);
			console.error('Problems setting get_CurOrientation',e);
		}
	};
	this.get_CurOrientation_changed = function () {
		var value = this.get_CurOrientation;
		return value;
	};
	try {
		this.get_CurOrientation = new SFRotation();
	} catch (e) {
		console.log('Problems setting get_CurOrientation '+e);
		console.error('Problems setting get_CurOrientation',e);
	}
	this.set_isUp = function (value) {
		try {
			this.proxy.isUp = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isUp '+e);
			console.error('Problems setting isUp',e);
		}
	};
	this.isUp_changed = function () {
		var value = this.isUp;
		return value;
	};
	try {
		this.isUp = new SFBool(true);
	} catch (e) {
		console.log('Problems setting isUp '+e);
		console.error('Problems setting isUp',e);
	}
	this.set_isDown = function (value) {
		try {
			this.proxy.isDown = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting isDown '+e);
			console.error('Problems setting isDown',e);
		}
	};
	this.isDown_changed = function () {
		var value = this.isDown;
		return value;
	};
	try {
		this.isDown = new SFBool(false);
	} catch (e) {
		console.log('Problems setting isDown '+e);
		console.error('Problems setting isDown',e);
	}
	this.set_CurOr = function (value) {
		try {
			this.proxy.CurOr = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting CurOr '+e);
			console.error('Problems setting CurOr',e);
		}
	};
	this.CurOr_changed = function () {
		var value = this.CurOr;
		return value;
	};
	try {
		this.CurOr = new SFRotation(0,1,0,0);
	} catch (e) {
		console.log('Problems setting CurOr '+e);
		console.error('Problems setting CurOr',e);
	}
	this.set_newOrientation = function (value) {
		try {
			this.proxy.newOrientation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting newOrientation '+e);
			console.error('Problems setting newOrientation',e);
		}
	};
	this.newOrientation_changed = function () {
		var value = this.newOrientation;
		return value;
	};
	try {
		this.newOrientation = new SFRotation();
	} catch (e) {
		console.log('Problems setting newOrientation '+e);
		console.error('Problems setting newOrientation',e);
	}


ecmascript:

	this.initialize = function () {
   this.proxy.CurOr[0] = 0.0;
   this.proxy.CurOr[1] = 1.0;
   this.proxy.CurOr[2] = 0.0;
   this.proxy.CurOr[3] = 0.0;
}
;

	this.set_Elevation = function (bool,time) {
   this.proxy.isUp   =  bool;
   this.proxy.isDown = !bool;
   if(this.proxy.isUp) {
      this.generate_Rotation();
   }
}
;

	this.set_Descendance = function (bool,time) {
   this.proxy.isDown =  bool;
   this.proxy.isUp   = !bool;
   if(this.proxy.isDown) {
      this.generate_Rotation();
   }
}
;

	this.get_CurOrientation = function (cR,time) {
   this.proxy.CurOr = cR;
}
;

	this.generate_Rotation = function () {
   this.proxy.newOrientation = this.proxy.CurOr;
   if(this.proxy.isUp) {
      if(this.proxy.CurOr[3] < 0.45) {
          this.proxy.newOrientation[3] = this.proxy.CurOr[3] + 0.05;
      }
   }

   else if(this.proxy.isDown) {
      if(this.proxy.CurOr[3] > 0.05) {
          this.proxy.newOrientation[3] = this.proxy.CurOr[3] - 0.05;
      }
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].initialize();
    if (X3DJSON.nodeUtil("Scene","TopSensor")) {
X3DJSON.nodeUtil("Scene","TopSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","NamluSensor")) {
X3DJSON.nodeUtil("Scene","NamluSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","fireTimer")) {
X3DJSON.nodeUtil("Scene","fireTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ChScale")) {
X3DJSON.nodeUtil("Scene","ChScale").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FireSensor")) {
X3DJSON.nodeUtil("Scene","FireSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FireSensor")) {
X3DJSON.nodeUtil("Scene","FireSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PortSideTimer")) {
X3DJSON.nodeUtil("Scene","PortSideTimer").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FireSensor")) {
X3DJSON.nodeUtil("Scene","FireSensor").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","LRotSensor")) {
X3DJSON.nodeUtil("Scene","LRotSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].set_LRotation(X3DJSON.nodeUtil("Scene","LRotSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].set_LRotation(X3DJSON.nodeUtil("Scene","LRotSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","RRotSensor")) {
X3DJSON.nodeUtil("Scene","RRotSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].set_RRotation(X3DJSON.nodeUtil("Scene","RRotSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].set_RRotation(X3DJSON.nodeUtil("Scene","RRotSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TopDondur")) {
X3DJSON.nodeUtil("Scene","TopDondur").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].get_CurRotation(X3DJSON.nodeUtil("Scene","TopDondur","rotation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].get_CurRotation(X3DJSON.nodeUtil("Scene","TopDondur","rotation"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater']['ACTION']['newRotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater']['ACTION']['newRotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater']['ACTION']['newRotation'].push(function(property, value) {
		if (property === 'newRotation') {
			X3DJSON.nodeUtil("Scene","TopDondur","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].newRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].newRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].newRotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TopDondur","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].newRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].newRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].newRotation, __eventTime);
    if (X3DJSON.nodeUtil("Scene","ElevSensor")) {
X3DJSON.nodeUtil("Scene","ElevSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].set_Elevation(X3DJSON.nodeUtil("Scene","ElevSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].set_Elevation(X3DJSON.nodeUtil("Scene","ElevSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","DescSensor")) {
X3DJSON.nodeUtil("Scene","DescSensor").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].set_Descendance(X3DJSON.nodeUtil("Scene","DescSensor","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].set_Descendance(X3DJSON.nodeUtil("Scene","DescSensor","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","NamluDondur")) {
X3DJSON.nodeUtil("Scene","NamluDondur").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].get_CurOrientation(X3DJSON.nodeUtil("Scene","NamluDondur","rotation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].get_CurOrientation(X3DJSON.nodeUtil("Scene","NamluDondur","rotation"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater']['ACTION']['newOrientation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater']['ACTION']['newOrientation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater']['ACTION']['newOrientation'].push(function(property, value) {
		if (property === 'newOrientation') {
			X3DJSON.nodeUtil("Scene","NamluDondur","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].newOrientation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].newOrientation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].newOrientation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","NamluDondur","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].newOrientation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].newOrientation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].newOrientation, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].set_LRotation(X3DJSON.nodeUtil("Scene","LRotSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].set_RRotation(X3DJSON.nodeUtil("Scene","RRotSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].get_CurRotation(X3DJSON.nodeUtil("Scene","TopDondur","rotation"), __eventTime);
			X3DJSON.nodeUtil("Scene","TopDondur","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].newRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].newRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['RotUpdater'].newRotation, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].set_Elevation(X3DJSON.nodeUtil("Scene","ElevSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].set_Descendance(X3DJSON.nodeUtil("Scene","DescSensor","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].get_CurOrientation(X3DJSON.nodeUtil("Scene","NamluDondur","rotation"), __eventTime);
			X3DJSON.nodeUtil("Scene","NamluDondur","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].newOrientation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].newOrientation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/ShipsMilitary/FrigateYavuzTurkey/SeaZenith.json']['ElevDescUpdater'].newOrientation, __eventTime);