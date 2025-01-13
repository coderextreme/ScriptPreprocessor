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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['physicsSectorScript'] = function() {
	this.set_sector1 = function (value) {
		try {
			this.proxy.sector1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector1 '+e);
			console.error('Problems setting sector1',e);
		}
	};
	this.sector1_changed = function () {
		var value = this.sector1;
		return value;
	};
	try {
		this.sector1 = new SFTime();
	} catch (e) {
		console.log('Problems setting sector1 '+e);
		console.error('Problems setting sector1',e);
	}
	this.set_sector2 = function (value) {
		try {
			this.proxy.sector2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector2 '+e);
			console.error('Problems setting sector2',e);
		}
	};
	this.sector2_changed = function () {
		var value = this.sector2;
		return value;
	};
	try {
		this.sector2 = new SFTime();
	} catch (e) {
		console.log('Problems setting sector2 '+e);
		console.error('Problems setting sector2',e);
	}
	this.set_sector3 = function (value) {
		try {
			this.proxy.sector3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector3 '+e);
			console.error('Problems setting sector3',e);
		}
	};
	this.sector3_changed = function () {
		var value = this.sector3;
		return value;
	};
	try {
		this.sector3 = new SFTime();
	} catch (e) {
		console.log('Problems setting sector3 '+e);
		console.error('Problems setting sector3',e);
	}
	this.set_sector4 = function (value) {
		try {
			this.proxy.sector4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector4 '+e);
			console.error('Problems setting sector4',e);
		}
	};
	this.sector4_changed = function () {
		var value = this.sector4;
		return value;
	};
	try {
		this.sector4 = new SFTime();
	} catch (e) {
		console.log('Problems setting sector4 '+e);
		console.error('Problems setting sector4',e);
	}
	this.set_sector5 = function (value) {
		try {
			this.proxy.sector5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector5 '+e);
			console.error('Problems setting sector5',e);
		}
	};
	this.sector5_changed = function () {
		var value = this.sector5;
		return value;
	};
	try {
		this.sector5 = new SFTime();
	} catch (e) {
		console.log('Problems setting sector5 '+e);
		console.error('Problems setting sector5',e);
	}
	this.set_sector6 = function (value) {
		try {
			this.proxy.sector6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector6 '+e);
			console.error('Problems setting sector6',e);
		}
	};
	this.sector6_changed = function () {
		var value = this.sector6;
		return value;
	};
	try {
		this.sector6 = new SFTime();
	} catch (e) {
		console.log('Problems setting sector6 '+e);
		console.error('Problems setting sector6',e);
	}
	this.set_sector7 = function (value) {
		try {
			this.proxy.sector7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector7 '+e);
			console.error('Problems setting sector7',e);
		}
	};
	this.sector7_changed = function () {
		var value = this.sector7;
		return value;
	};
	try {
		this.sector7 = new SFTime();
	} catch (e) {
		console.log('Problems setting sector7 '+e);
		console.error('Problems setting sector7',e);
	}
	this.set_sector8 = function (value) {
		try {
			this.proxy.sector8 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector8 '+e);
			console.error('Problems setting sector8',e);
		}
	};
	this.sector8_changed = function () {
		var value = this.sector8;
		return value;
	};
	try {
		this.sector8 = new SFTime();
	} catch (e) {
		console.log('Problems setting sector8 '+e);
		console.error('Problems setting sector8',e);
	}
	this.set_sector9 = function (value) {
		try {
			this.proxy.sector9 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector9 '+e);
			console.error('Problems setting sector9',e);
		}
	};
	this.sector9_changed = function () {
		var value = this.sector9;
		return value;
	};
	try {
		this.sector9 = new SFTime();
	} catch (e) {
		console.log('Problems setting sector9 '+e);
		console.error('Problems setting sector9',e);
	}
	this.set_sector1Enabled = function (value) {
		try {
			this.proxy.sector1Enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector1Enabled '+e);
			console.error('Problems setting sector1Enabled',e);
		}
	};
	this.sector1Enabled_changed = function () {
		var value = this.sector1Enabled;
		return value;
	};
	try {
		this.sector1Enabled = new SFBool();
	} catch (e) {
		console.log('Problems setting sector1Enabled '+e);
		console.error('Problems setting sector1Enabled',e);
	}
	this.set_sector2Enabled = function (value) {
		try {
			this.proxy.sector2Enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector2Enabled '+e);
			console.error('Problems setting sector2Enabled',e);
		}
	};
	this.sector2Enabled_changed = function () {
		var value = this.sector2Enabled;
		return value;
	};
	try {
		this.sector2Enabled = new SFBool();
	} catch (e) {
		console.log('Problems setting sector2Enabled '+e);
		console.error('Problems setting sector2Enabled',e);
	}
	this.set_sector3Enabled = function (value) {
		try {
			this.proxy.sector3Enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector3Enabled '+e);
			console.error('Problems setting sector3Enabled',e);
		}
	};
	this.sector3Enabled_changed = function () {
		var value = this.sector3Enabled;
		return value;
	};
	try {
		this.sector3Enabled = new SFBool();
	} catch (e) {
		console.log('Problems setting sector3Enabled '+e);
		console.error('Problems setting sector3Enabled',e);
	}
	this.set_sector4Enabled = function (value) {
		try {
			this.proxy.sector4Enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector4Enabled '+e);
			console.error('Problems setting sector4Enabled',e);
		}
	};
	this.sector4Enabled_changed = function () {
		var value = this.sector4Enabled;
		return value;
	};
	try {
		this.sector4Enabled = new SFBool();
	} catch (e) {
		console.log('Problems setting sector4Enabled '+e);
		console.error('Problems setting sector4Enabled',e);
	}
	this.set_sector5Enabled = function (value) {
		try {
			this.proxy.sector5Enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector5Enabled '+e);
			console.error('Problems setting sector5Enabled',e);
		}
	};
	this.sector5Enabled_changed = function () {
		var value = this.sector5Enabled;
		return value;
	};
	try {
		this.sector5Enabled = new SFBool();
	} catch (e) {
		console.log('Problems setting sector5Enabled '+e);
		console.error('Problems setting sector5Enabled',e);
	}
	this.set_sector6Enabled = function (value) {
		try {
			this.proxy.sector6Enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector6Enabled '+e);
			console.error('Problems setting sector6Enabled',e);
		}
	};
	this.sector6Enabled_changed = function () {
		var value = this.sector6Enabled;
		return value;
	};
	try {
		this.sector6Enabled = new SFBool();
	} catch (e) {
		console.log('Problems setting sector6Enabled '+e);
		console.error('Problems setting sector6Enabled',e);
	}
	this.set_sector7Enabled = function (value) {
		try {
			this.proxy.sector7Enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector7Enabled '+e);
			console.error('Problems setting sector7Enabled',e);
		}
	};
	this.sector7Enabled_changed = function () {
		var value = this.sector7Enabled;
		return value;
	};
	try {
		this.sector7Enabled = new SFBool();
	} catch (e) {
		console.log('Problems setting sector7Enabled '+e);
		console.error('Problems setting sector7Enabled',e);
	}
	this.set_sector8Enabled = function (value) {
		try {
			this.proxy.sector8Enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector8Enabled '+e);
			console.error('Problems setting sector8Enabled',e);
		}
	};
	this.sector8Enabled_changed = function () {
		var value = this.sector8Enabled;
		return value;
	};
	try {
		this.sector8Enabled = new SFBool();
	} catch (e) {
		console.log('Problems setting sector8Enabled '+e);
		console.error('Problems setting sector8Enabled',e);
	}
	this.set_sector9Enabled = function (value) {
		try {
			this.proxy.sector9Enabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sector9Enabled '+e);
			console.error('Problems setting sector9Enabled',e);
		}
	};
	this.sector9Enabled_changed = function () {
		var value = this.sector9Enabled;
		return value;
	};
	try {
		this.sector9Enabled = new SFBool();
	} catch (e) {
		console.log('Problems setting sector9Enabled '+e);
		console.error('Problems setting sector9Enabled',e);
	}


ecmascript:
   
	this.sector1 = function (val) {
       if (val) {
console.error('Physics Sector1');
        this.proxy.sector1Enabled = true;
        this.proxy.sector2Enabled = true;
        this.proxy.sector3Enabled = false;
        this.proxy.sector4Enabled = false;
        this.proxy.sector5Enabled = false;
        this.proxy.sector6Enabled = false;
        this.proxy.sector7Enabled = false;
        this.proxy.sector8Enabled = false;
        this.proxy.sector9Enabled = false;
       }
    }
   ;

	this.sector2 = function (val) {
       if (val) {
console.error('Physics Sector2');
        this.proxy.sector1Enabled = true;
        this.proxy.sector2Enabled = true;
        this.proxy.sector3Enabled = true;
        this.proxy.sector4Enabled = false;
        this.proxy.sector5Enabled = false;
        this.proxy.sector6Enabled = false;
        this.proxy.sector7Enabled = false;
        this.proxy.sector8Enabled = false;
        this.proxy.sector9Enabled = false;
       }
    }
   ;

	this.sector3 = function (val) {
       if (val) {
console.error('Physics Sector3');
        this.proxy.sector1Enabled = false;
        this.proxy.sector2Enabled = true;
        this.proxy.sector3Enabled = true;
        this.proxy.sector4Enabled = true;
        this.proxy.sector5Enabled = false;
        this.proxy.sector6Enabled = false;
        this.proxy.sector7Enabled = false;
        this.proxy.sector8Enabled = false;
        this.proxy.sector9Enabled = false;
       }
    }
   ;

	this.sector4 = function (val) {
       if (val) {
console.error('Physics Sector4');
        this.proxy.sector1Enabled = false;
        this.proxy.sector2Enabled = false;
        this.proxy.sector3Enabled = true;
        this.proxy.sector4Enabled = true;
        this.proxy.sector5Enabled = true;
        this.proxy.sector6Enabled = false;
        this.proxy.sector7Enabled = false;
        this.proxy.sector8Enabled = false;
        this.proxy.sector9Enabled = false;
       }
    }
   ;

	this.sector5 = function (val) {
       if (val) {
console.error('Physics Sector5');
        this.proxy.sector1Enabled = false;
        this.proxy.sector2Enabled = false;
        this.proxy.sector3Enabled = false;
        this.proxy.sector4Enabled = true;
        this.proxy.sector5Enabled = true;
        this.proxy.sector6Enabled = true;
        this.proxy.sector7Enabled = false;
        this.proxy.sector8Enabled = false;
        this.proxy.sector9Enabled = false;
       }
    }
   ;

	this.sector6 = function (val) {
       if (val) {
console.error('Physics Sector6');
        this.proxy.sector1Enabled = false;
        this.proxy.sector2Enabled = false;
        this.proxy.sector3Enabled = false;
        this.proxy.sector4Enabled = false;
        this.proxy.sector5Enabled = true;
        this.proxy.sector6Enabled = true;
        this.proxy.sector7Enabled = true;
        this.proxy.sector8Enabled = false;
        this.proxy.sector9Enabled = false;
       }
    }
   ;

	this.sector7 = function (val) {
       if (val) {
console.error('Physics Sector7');
        this.proxy.sector1Enabled = false;
        this.proxy.sector2Enabled = false;
        this.proxy.sector3Enabled = false;
        this.proxy.sector4Enabled = false;
        this.proxy.sector5Enabled = false;
        this.proxy.sector6Enabled = true;
        this.proxy.sector7Enabled = true;
        this.proxy.sector8Enabled = true;
        this.proxy.sector9Enabled = false;
       }
    }
   ;

	this.sector8 = function (val) {
       if (val) {
console.error('Physics Sector8');

        this.proxy.sector1Enabled = false;
        this.proxy.sector2Enabled = false;
        this.proxy.sector3Enabled = false;
        this.proxy.sector4Enabled = false;
        this.proxy.sector5Enabled = false;
        this.proxy.sector6Enabled = false;
        this.proxy.sector7Enabled = true;
        this.proxy.sector8Enabled = true;
        this.proxy.sector9Enabled = true;
       }
    }
   ;

	this.sector9 = function (val) {
       if (val) {
console.error('Physics Sector9');

        this.proxy.sector1Enabled = true;
        this.proxy.sector2Enabled = false;
        this.proxy.sector3Enabled = false;
        this.proxy.sector4Enabled = false;
        this.proxy.sector5Enabled = false;
        this.proxy.sector6Enabled = false;
        this.proxy.sector7Enabled = false;
        this.proxy.sector8Enabled = true;
        this.proxy.sector9Enabled = true;
       }
    }

   ;

	this.sector9 = function (val) {
       if (val) {
console.error('Physics Sector9');

        this.proxy.sector1Enabled = true;
        this.proxy.sector2Enabled = false;
        this.proxy.sector3Enabled = false;
        this.proxy.sector4Enabled = false;
        this.proxy.sector5Enabled = false;
        this.proxy.sector6Enabled = false;
        this.proxy.sector7Enabled = false;
        this.proxy.sector8Enabled = true;
        this.proxy.sector9Enabled = true;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['physicsSectorScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['physicsSectorScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['physicsSectorScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['physicsSectorScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['physicsSectorScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['physicsSectorScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['physicsSectorScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['physicsSectorScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['physicsSectorScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['physicsSectorScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['physicsSectorScript'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = function() {
	this.set_resetRequest = function (value) {
		try {
			this.proxy.resetRequest = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetRequest '+e);
			console.error('Problems setting resetRequest',e);
		}
	};
	this.resetRequest_changed = function () {
		var value = this.resetRequest;
		return value;
	};
	try {
		this.resetRequest = new SFBool();
	} catch (e) {
		console.log('Problems setting resetRequest '+e);
		console.error('Problems setting resetRequest',e);
	}
	this.set_startingPosition = function (value) {
		try {
			this.proxy.startingPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startingPosition '+e);
			console.error('Problems setting startingPosition',e);
		}
	};
	this.startingPosition_changed = function () {
		var value = this.startingPosition;
		return value;
	};
	try {
		this.startingPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting startingPosition '+e);
		console.error('Problems setting startingPosition',e);
	}
	this.set_startingOrientation = function (value) {
		try {
			this.proxy.startingOrientation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting startingOrientation '+e);
			console.error('Problems setting startingOrientation',e);
		}
	};
	this.startingOrientation_changed = function () {
		var value = this.startingOrientation;
		return value;
	};
	try {
		this.startingOrientation = new SFRotation();
	} catch (e) {
		console.log('Problems setting startingOrientation '+e);
		console.error('Problems setting startingOrientation',e);
	}
	this.set_wheelBodyRadius = function (value) {
		try {
			this.proxy.wheelBodyRadius = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting wheelBodyRadius '+e);
			console.error('Problems setting wheelBodyRadius',e);
		}
	};
	this.wheelBodyRadius_changed = function () {
		var value = this.wheelBodyRadius;
		return value;
	};
	try {
		this.wheelBodyRadius = new SFFloat();
	} catch (e) {
		console.log('Problems setting wheelBodyRadius '+e);
		console.error('Problems setting wheelBodyRadius',e);
	}
	this.set_chassisBodyDimensions = function (value) {
		try {
			this.proxy.chassisBodyDimensions = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting chassisBodyDimensions '+e);
			console.error('Problems setting chassisBodyDimensions',e);
		}
	};
	this.chassisBodyDimensions_changed = function () {
		var value = this.chassisBodyDimensions;
		return value;
	};
	try {
		this.chassisBodyDimensions = new SFVec3f();
	} catch (e) {
		console.log('Problems setting chassisBodyDimensions '+e);
		console.error('Problems setting chassisBodyDimensions',e);
	}
	this.set_speedLimit = function (value) {
		try {
			this.proxy.speedLimit = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speedLimit '+e);
			console.error('Problems setting speedLimit',e);
		}
	};
	this.speedLimit_changed = function () {
		var value = this.speedLimit;
		return value;
	};
	try {
		this.speedLimit = new SFFloat();
	} catch (e) {
		console.log('Problems setting speedLimit '+e);
		console.error('Problems setting speedLimit',e);
	}
	this.set_steeringLimitAngle = function (value) {
		try {
			this.proxy.steeringLimitAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting steeringLimitAngle '+e);
			console.error('Problems setting steeringLimitAngle',e);
		}
	};
	this.steeringLimitAngle_changed = function () {
		var value = this.steeringLimitAngle;
		return value;
	};
	try {
		this.steeringLimitAngle = new SFFloat();
	} catch (e) {
		console.log('Problems setting steeringLimitAngle '+e);
		console.error('Problems setting steeringLimitAngle',e);
	}
	this.set_steeringDeadspot = function (value) {
		try {
			this.proxy.steeringDeadspot = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting steeringDeadspot '+e);
			console.error('Problems setting steeringDeadspot',e);
		}
	};
	this.steeringDeadspot_changed = function () {
		var value = this.steeringDeadspot;
		return value;
	};
	try {
		this.steeringDeadspot = new SFFloat();
	} catch (e) {
		console.log('Problems setting steeringDeadspot '+e);
		console.error('Problems setting steeringDeadspot',e);
	}
	this.set_maxEngineTorque = function (value) {
		try {
			this.proxy.maxEngineTorque = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting maxEngineTorque '+e);
			console.error('Problems setting maxEngineTorque',e);
		}
	};
	this.maxEngineTorque_changed = function () {
		var value = this.maxEngineTorque;
		return value;
	};
	try {
		this.maxEngineTorque = new SFFloat();
	} catch (e) {
		console.log('Problems setting maxEngineTorque '+e);
		console.error('Problems setting maxEngineTorque',e);
	}
	this.set_maxBrakingTorque = function (value) {
		try {
			this.proxy.maxBrakingTorque = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting maxBrakingTorque '+e);
			console.error('Problems setting maxBrakingTorque',e);
		}
	};
	this.maxBrakingTorque_changed = function () {
		var value = this.maxBrakingTorque;
		return value;
	};
	try {
		this.maxBrakingTorque = new SFFloat();
	} catch (e) {
		console.log('Problems setting maxBrakingTorque '+e);
		console.error('Problems setting maxBrakingTorque',e);
	}
	this.set_maxEngineRevs = function (value) {
		try {
			this.proxy.maxEngineRevs = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting maxEngineRevs '+e);
			console.error('Problems setting maxEngineRevs',e);
		}
	};
	this.maxEngineRevs_changed = function () {
		var value = this.maxEngineRevs;
		return value;
	};
	try {
		this.maxEngineRevs = new SFFloat();
	} catch (e) {
		console.log('Problems setting maxEngineRevs '+e);
		console.error('Problems setting maxEngineRevs',e);
	}
	this.set_roadFrictionCoefficient = function (value) {
		try {
			this.proxy.roadFrictionCoefficient = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting roadFrictionCoefficient '+e);
			console.error('Problems setting roadFrictionCoefficient',e);
		}
	};
	this.roadFrictionCoefficient_changed = function () {
		var value = this.roadFrictionCoefficient;
		return value;
	};
	try {
		this.roadFrictionCoefficient = new SFFloat();
	} catch (e) {
		console.log('Problems setting roadFrictionCoefficient '+e);
		console.error('Problems setting roadFrictionCoefficient',e);
	}
	this.set_wallFrictionCoefficient = function (value) {
		try {
			this.proxy.wallFrictionCoefficient = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting wallFrictionCoefficient '+e);
			console.error('Problems setting wallFrictionCoefficient',e);
		}
	};
	this.wallFrictionCoefficient_changed = function () {
		var value = this.wallFrictionCoefficient;
		return value;
	};
	try {
		this.wallFrictionCoefficient = new SFFloat();
	} catch (e) {
		console.log('Problems setting wallFrictionCoefficient '+e);
		console.error('Problems setting wallFrictionCoefficient',e);
	}
	this.set_sandFrictionCoefficient = function (value) {
		try {
			this.proxy.sandFrictionCoefficient = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sandFrictionCoefficient '+e);
			console.error('Problems setting sandFrictionCoefficient',e);
		}
	};
	this.sandFrictionCoefficient_changed = function () {
		var value = this.sandFrictionCoefficient;
		return value;
	};
	try {
		this.sandFrictionCoefficient = new SFFloat();
	} catch (e) {
		console.log('Problems setting sandFrictionCoefficient '+e);
		console.error('Problems setting sandFrictionCoefficient',e);
	}
	this.set_grassFrictionCoefficient = function (value) {
		try {
			this.proxy.grassFrictionCoefficient = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting grassFrictionCoefficient '+e);
			console.error('Problems setting grassFrictionCoefficient',e);
		}
	};
	this.grassFrictionCoefficient_changed = function () {
		var value = this.grassFrictionCoefficient;
		return value;
	};
	try {
		this.grassFrictionCoefficient = new SFFloat();
	} catch (e) {
		console.log('Problems setting grassFrictionCoefficient '+e);
		console.error('Problems setting grassFrictionCoefficient',e);
	}
	this.set_otherFrictionCoefficient = function (value) {
		try {
			this.proxy.otherFrictionCoefficient = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting otherFrictionCoefficient '+e);
			console.error('Problems setting otherFrictionCoefficient',e);
		}
	};
	this.otherFrictionCoefficient_changed = function () {
		var value = this.otherFrictionCoefficient;
		return value;
	};
	try {
		this.otherFrictionCoefficient = new SFFloat();
	} catch (e) {
		console.log('Problems setting otherFrictionCoefficient '+e);
		console.error('Problems setting otherFrictionCoefficient',e);
	}
	this.set_sideSlipCoefficient = function (value) {
		try {
			this.proxy.sideSlipCoefficient = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sideSlipCoefficient '+e);
			console.error('Problems setting sideSlipCoefficient',e);
		}
	};
	this.sideSlipCoefficient_changed = function () {
		var value = this.sideSlipCoefficient;
		return value;
	};
	try {
		this.sideSlipCoefficient = new SFFloat();
	} catch (e) {
		console.log('Problems setting sideSlipCoefficient '+e);
		console.error('Problems setting sideSlipCoefficient',e);
	}
	this.set_brakeBias = function (value) {
		try {
			this.proxy.brakeBias = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting brakeBias '+e);
			console.error('Problems setting brakeBias',e);
		}
	};
	this.brakeBias_changed = function () {
		var value = this.brakeBias;
		return value;
	};
	try {
		this.brakeBias = new SFFloat();
	} catch (e) {
		console.log('Problems setting brakeBias '+e);
		console.error('Problems setting brakeBias',e);
	}
	this.set_engineFrontPercentage = function (value) {
		try {
			this.proxy.engineFrontPercentage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting engineFrontPercentage '+e);
			console.error('Problems setting engineFrontPercentage',e);
		}
	};
	this.engineFrontPercentage_changed = function () {
		var value = this.engineFrontPercentage;
		return value;
	};
	try {
		this.engineFrontPercentage = new SFFloat();
	} catch (e) {
		console.log('Problems setting engineFrontPercentage '+e);
		console.error('Problems setting engineFrontPercentage',e);
	}
	this.set_engineRearPercentage = function (value) {
		try {
			this.proxy.engineRearPercentage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting engineRearPercentage '+e);
			console.error('Problems setting engineRearPercentage',e);
		}
	};
	this.engineRearPercentage_changed = function () {
		var value = this.engineRearPercentage;
		return value;
	};
	try {
		this.engineRearPercentage = new SFFloat();
	} catch (e) {
		console.log('Problems setting engineRearPercentage '+e);
		console.error('Problems setting engineRearPercentage',e);
	}
	this.set_dragCoefficient = function (value) {
		try {
			this.proxy.dragCoefficient = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting dragCoefficient '+e);
			console.error('Problems setting dragCoefficient',e);
		}
	};
	this.dragCoefficient_changed = function () {
		var value = this.dragCoefficient;
		return value;
	};
	try {
		this.dragCoefficient = new SFFloat();
	} catch (e) {
		console.log('Problems setting dragCoefficient '+e);
		console.error('Problems setting dragCoefficient',e);
	}
	this.set_downforceCoefficient = function (value) {
		try {
			this.proxy.downforceCoefficient = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting downforceCoefficient '+e);
			console.error('Problems setting downforceCoefficient',e);
		}
	};
	this.downforceCoefficient_changed = function () {
		var value = this.downforceCoefficient;
		return value;
	};
	try {
		this.downforceCoefficient = new SFFloat();
	} catch (e) {
		console.log('Problems setting downforceCoefficient '+e);
		console.error('Problems setting downforceCoefficient',e);
	}
	this.set_reverseSelected = function (value) {
		try {
			this.proxy.reverseSelected = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reverseSelected '+e);
			console.error('Problems setting reverseSelected',e);
		}
	};
	this.reverseSelected_changed = function () {
		var value = this.reverseSelected;
		return value;
	};
	try {
		this.reverseSelected = new SFBool();
	} catch (e) {
		console.log('Problems setting reverseSelected '+e);
		console.error('Problems setting reverseSelected',e);
	}
	this.set_carVelocity = function (value) {
		try {
			this.proxy.carVelocity = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting carVelocity '+e);
			console.error('Problems setting carVelocity',e);
		}
	};
	this.carVelocity_changed = function () {
		var value = this.carVelocity;
		return value;
	};
	try {
		this.carVelocity = new SFVec3f();
	} catch (e) {
		console.log('Problems setting carVelocity '+e);
		console.error('Problems setting carVelocity',e);
	}
	this.set_carOrientation = function (value) {
		try {
			this.proxy.carOrientation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting carOrientation '+e);
			console.error('Problems setting carOrientation',e);
		}
	};
	this.carOrientation_changed = function () {
		var value = this.carOrientation;
		return value;
	};
	try {
		this.carOrientation = new SFRotation();
	} catch (e) {
		console.log('Problems setting carOrientation '+e);
		console.error('Problems setting carOrientation',e);
	}
	this.set_currentSteeringAngle = function (value) {
		try {
			this.proxy.currentSteeringAngle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting currentSteeringAngle '+e);
			console.error('Problems setting currentSteeringAngle',e);
		}
	};
	this.currentSteeringAngle_changed = function () {
		var value = this.currentSteeringAngle;
		return value;
	};
	try {
		this.currentSteeringAngle = new SFFloat();
	} catch (e) {
		console.log('Problems setting currentSteeringAngle '+e);
		console.error('Problems setting currentSteeringAngle',e);
	}
	this.set_wheelAcceleratorInput = function (value) {
		try {
			this.proxy.wheelAcceleratorInput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting wheelAcceleratorInput '+e);
			console.error('Problems setting wheelAcceleratorInput',e);
		}
	};
	this.wheelAcceleratorInput_changed = function () {
		var value = this.wheelAcceleratorInput;
		return value;
	};
	try {
		this.wheelAcceleratorInput = new SFFloat();
	} catch (e) {
		console.log('Problems setting wheelAcceleratorInput '+e);
		console.error('Problems setting wheelAcceleratorInput',e);
	}
	this.set_wheelDirectionInput = function (value) {
		try {
			this.proxy.wheelDirectionInput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting wheelDirectionInput '+e);
			console.error('Problems setting wheelDirectionInput',e);
		}
	};
	this.wheelDirectionInput_changed = function () {
		var value = this.wheelDirectionInput;
		return value;
	};
	try {
		this.wheelDirectionInput = new SFFloat();
	} catch (e) {
		console.log('Problems setting wheelDirectionInput '+e);
		console.error('Problems setting wheelDirectionInput',e);
	}
	this.set_frontWheelOrientation = function (value) {
		try {
			this.proxy.frontWheelOrientation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontWheelOrientation '+e);
			console.error('Problems setting frontWheelOrientation',e);
		}
	};
	this.frontWheelOrientation_changed = function () {
		var value = this.frontWheelOrientation;
		return value;
	};
	try {
		this.frontWheelOrientation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting frontWheelOrientation '+e);
		console.error('Problems setting frontWheelOrientation',e);
	}
	this.set_rearWheelOrientation = function (value) {
		try {
			this.proxy.rearWheelOrientation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rearWheelOrientation '+e);
			console.error('Problems setting rearWheelOrientation',e);
		}
	};
	this.rearWheelOrientation_changed = function () {
		var value = this.rearWheelOrientation;
		return value;
	};
	try {
		this.rearWheelOrientation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting rearWheelOrientation '+e);
		console.error('Problems setting rearWheelOrientation',e);
	}
	this.set_correctedChassisOrientation = function (value) {
		try {
			this.proxy.correctedChassisOrientation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting correctedChassisOrientation '+e);
			console.error('Problems setting correctedChassisOrientation',e);
		}
	};
	this.correctedChassisOrientation_changed = function () {
		var value = this.correctedChassisOrientation;
		return value;
	};
	try {
		this.correctedChassisOrientation = new SFRotation();
	} catch (e) {
		console.log('Problems setting correctedChassisOrientation '+e);
		console.error('Problems setting correctedChassisOrientation',e);
	}
	this.set_frontWheelMinStop = function (value) {
		try {
			this.proxy.frontWheelMinStop = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontWheelMinStop '+e);
			console.error('Problems setting frontWheelMinStop',e);
		}
	};
	this.frontWheelMinStop_changed = function () {
		var value = this.frontWheelMinStop;
		return value;
	};
	try {
		this.frontWheelMinStop = new SFFloat();
	} catch (e) {
		console.log('Problems setting frontWheelMinStop '+e);
		console.error('Problems setting frontWheelMinStop',e);
	}
	this.set_frontWheelMaxStop = function (value) {
		try {
			this.proxy.frontWheelMaxStop = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontWheelMaxStop '+e);
			console.error('Problems setting frontWheelMaxStop',e);
		}
	};
	this.frontWheelMaxStop_changed = function () {
		var value = this.frontWheelMaxStop;
		return value;
	};
	try {
		this.frontWheelMaxStop = new SFFloat();
	} catch (e) {
		console.log('Problems setting frontWheelMaxStop '+e);
		console.error('Problems setting frontWheelMaxStop',e);
	}
	this.set_frontLeftWheelSpeed = function (value) {
		try {
			this.proxy.frontLeftWheelSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontLeftWheelSpeed '+e);
			console.error('Problems setting frontLeftWheelSpeed',e);
		}
	};
	this.frontLeftWheelSpeed_changed = function () {
		var value = this.frontLeftWheelSpeed;
		return value;
	};
	try {
		this.frontLeftWheelSpeed = new SFFloat();
	} catch (e) {
		console.log('Problems setting frontLeftWheelSpeed '+e);
		console.error('Problems setting frontLeftWheelSpeed',e);
	}
	this.set_frontRightWheelSpeed = function (value) {
		try {
			this.proxy.frontRightWheelSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontRightWheelSpeed '+e);
			console.error('Problems setting frontRightWheelSpeed',e);
		}
	};
	this.frontRightWheelSpeed_changed = function () {
		var value = this.frontRightWheelSpeed;
		return value;
	};
	try {
		this.frontRightWheelSpeed = new SFFloat();
	} catch (e) {
		console.log('Problems setting frontRightWheelSpeed '+e);
		console.error('Problems setting frontRightWheelSpeed',e);
	}
	this.set_rearLeftWheelSpeed = function (value) {
		try {
			this.proxy.rearLeftWheelSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rearLeftWheelSpeed '+e);
			console.error('Problems setting rearLeftWheelSpeed',e);
		}
	};
	this.rearLeftWheelSpeed_changed = function () {
		var value = this.rearLeftWheelSpeed;
		return value;
	};
	try {
		this.rearLeftWheelSpeed = new SFFloat();
	} catch (e) {
		console.log('Problems setting rearLeftWheelSpeed '+e);
		console.error('Problems setting rearLeftWheelSpeed',e);
	}
	this.set_rearRightWheelSpeed = function (value) {
		try {
			this.proxy.rearRightWheelSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rearRightWheelSpeed '+e);
			console.error('Problems setting rearRightWheelSpeed',e);
		}
	};
	this.rearRightWheelSpeed_changed = function () {
		var value = this.rearRightWheelSpeed;
		return value;
	};
	try {
		this.rearRightWheelSpeed = new SFFloat();
	} catch (e) {
		console.log('Problems setting rearRightWheelSpeed '+e);
		console.error('Problems setting rearRightWheelSpeed',e);
	}
	this.set_frontWheelTorque = function (value) {
		try {
			this.proxy.frontWheelTorque = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontWheelTorque '+e);
			console.error('Problems setting frontWheelTorque',e);
		}
	};
	this.frontWheelTorque_changed = function () {
		var value = this.frontWheelTorque;
		return value;
	};
	try {
		this.frontWheelTorque = new SFFloat();
	} catch (e) {
		console.log('Problems setting frontWheelTorque '+e);
		console.error('Problems setting frontWheelTorque',e);
	}
	this.set_rearWheelTorque = function (value) {
		try {
			this.proxy.rearWheelTorque = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rearWheelTorque '+e);
			console.error('Problems setting rearWheelTorque',e);
		}
	};
	this.rearWheelTorque_changed = function () {
		var value = this.rearWheelTorque;
		return value;
	};
	try {
		this.rearWheelTorque = new SFFloat();
	} catch (e) {
		console.log('Problems setting rearWheelTorque '+e);
		console.error('Problems setting rearWheelTorque',e);
	}
	this.set_frontLeftAxleAxis = function (value) {
		try {
			this.proxy.frontLeftAxleAxis = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontLeftAxleAxis '+e);
			console.error('Problems setting frontLeftAxleAxis',e);
		}
	};
	this.frontLeftAxleAxis_changed = function () {
		var value = this.frontLeftAxleAxis;
		return value;
	};
	try {
		this.frontLeftAxleAxis = new SFVec3f();
	} catch (e) {
		console.log('Problems setting frontLeftAxleAxis '+e);
		console.error('Problems setting frontLeftAxleAxis',e);
	}
	this.set_frontRightAxleAxis = function (value) {
		try {
			this.proxy.frontRightAxleAxis = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontRightAxleAxis '+e);
			console.error('Problems setting frontRightAxleAxis',e);
		}
	};
	this.frontRightAxleAxis_changed = function () {
		var value = this.frontRightAxleAxis;
		return value;
	};
	try {
		this.frontRightAxleAxis = new SFVec3f();
	} catch (e) {
		console.log('Problems setting frontRightAxleAxis '+e);
		console.error('Problems setting frontRightAxleAxis',e);
	}
	this.set_rearLeftAxleAxis = function (value) {
		try {
			this.proxy.rearLeftAxleAxis = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rearLeftAxleAxis '+e);
			console.error('Problems setting rearLeftAxleAxis',e);
		}
	};
	this.rearLeftAxleAxis_changed = function () {
		var value = this.rearLeftAxleAxis;
		return value;
	};
	try {
		this.rearLeftAxleAxis = new SFVec3f();
	} catch (e) {
		console.log('Problems setting rearLeftAxleAxis '+e);
		console.error('Problems setting rearLeftAxleAxis',e);
	}
	this.set_rearRightAxleAxis = function (value) {
		try {
			this.proxy.rearRightAxleAxis = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rearRightAxleAxis '+e);
			console.error('Problems setting rearRightAxleAxis',e);
		}
	};
	this.rearRightAxleAxis_changed = function () {
		var value = this.rearRightAxleAxis;
		return value;
	};
	try {
		this.rearRightAxleAxis = new SFVec3f();
	} catch (e) {
		console.log('Problems setting rearRightAxleAxis '+e);
		console.error('Problems setting rearRightAxleAxis',e);
	}
	this.set_frictionForces = function (value) {
		try {
			this.proxy.frictionForces = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frictionForces '+e);
			console.error('Problems setting frictionForces',e);
		}
	};
	this.frictionForces_changed = function () {
		var value = this.frictionForces;
		return value;
	};
	try {
		this.frictionForces = new MFVec3f();
	} catch (e) {
		console.log('Problems setting frictionForces '+e);
		console.error('Problems setting frictionForces',e);
	}
	this.set_chassisPosition_reset = function (value) {
		try {
			this.proxy.chassisPosition_reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting chassisPosition_reset '+e);
			console.error('Problems setting chassisPosition_reset',e);
		}
	};
	this.chassisPosition_reset_changed = function () {
		var value = this.chassisPosition_reset;
		return value;
	};
	try {
		this.chassisPosition_reset = new SFVec3f();
	} catch (e) {
		console.log('Problems setting chassisPosition_reset '+e);
		console.error('Problems setting chassisPosition_reset',e);
	}
	this.set_chassisOrientation_reset = function (value) {
		try {
			this.proxy.chassisOrientation_reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting chassisOrientation_reset '+e);
			console.error('Problems setting chassisOrientation_reset',e);
		}
	};
	this.chassisOrientation_reset_changed = function () {
		var value = this.chassisOrientation_reset;
		return value;
	};
	try {
		this.chassisOrientation_reset = new SFRotation();
	} catch (e) {
		console.log('Problems setting chassisOrientation_reset '+e);
		console.error('Problems setting chassisOrientation_reset',e);
	}
	this.set_frontLeftWheelPosition_reset = function (value) {
		try {
			this.proxy.frontLeftWheelPosition_reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontLeftWheelPosition_reset '+e);
			console.error('Problems setting frontLeftWheelPosition_reset',e);
		}
	};
	this.frontLeftWheelPosition_reset_changed = function () {
		var value = this.frontLeftWheelPosition_reset;
		return value;
	};
	try {
		this.frontLeftWheelPosition_reset = new SFVec3f();
	} catch (e) {
		console.log('Problems setting frontLeftWheelPosition_reset '+e);
		console.error('Problems setting frontLeftWheelPosition_reset',e);
	}
	this.set_frontLeftWheelOrientation_reset = function (value) {
		try {
			this.proxy.frontLeftWheelOrientation_reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontLeftWheelOrientation_reset '+e);
			console.error('Problems setting frontLeftWheelOrientation_reset',e);
		}
	};
	this.frontLeftWheelOrientation_reset_changed = function () {
		var value = this.frontLeftWheelOrientation_reset;
		return value;
	};
	try {
		this.frontLeftWheelOrientation_reset = new SFRotation();
	} catch (e) {
		console.log('Problems setting frontLeftWheelOrientation_reset '+e);
		console.error('Problems setting frontLeftWheelOrientation_reset',e);
	}
	this.set_frontRightWheelPosition_reset = function (value) {
		try {
			this.proxy.frontRightWheelPosition_reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontRightWheelPosition_reset '+e);
			console.error('Problems setting frontRightWheelPosition_reset',e);
		}
	};
	this.frontRightWheelPosition_reset_changed = function () {
		var value = this.frontRightWheelPosition_reset;
		return value;
	};
	try {
		this.frontRightWheelPosition_reset = new SFVec3f();
	} catch (e) {
		console.log('Problems setting frontRightWheelPosition_reset '+e);
		console.error('Problems setting frontRightWheelPosition_reset',e);
	}
	this.set_frontRightWheelOrientation_reset = function (value) {
		try {
			this.proxy.frontRightWheelOrientation_reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontRightWheelOrientation_reset '+e);
			console.error('Problems setting frontRightWheelOrientation_reset',e);
		}
	};
	this.frontRightWheelOrientation_reset_changed = function () {
		var value = this.frontRightWheelOrientation_reset;
		return value;
	};
	try {
		this.frontRightWheelOrientation_reset = new SFRotation();
	} catch (e) {
		console.log('Problems setting frontRightWheelOrientation_reset '+e);
		console.error('Problems setting frontRightWheelOrientation_reset',e);
	}
	this.set_backLeftWheelPosition_reset = function (value) {
		try {
			this.proxy.backLeftWheelPosition_reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting backLeftWheelPosition_reset '+e);
			console.error('Problems setting backLeftWheelPosition_reset',e);
		}
	};
	this.backLeftWheelPosition_reset_changed = function () {
		var value = this.backLeftWheelPosition_reset;
		return value;
	};
	try {
		this.backLeftWheelPosition_reset = new SFVec3f();
	} catch (e) {
		console.log('Problems setting backLeftWheelPosition_reset '+e);
		console.error('Problems setting backLeftWheelPosition_reset',e);
	}
	this.set_backLeftWheelOrientation_reset = function (value) {
		try {
			this.proxy.backLeftWheelOrientation_reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting backLeftWheelOrientation_reset '+e);
			console.error('Problems setting backLeftWheelOrientation_reset',e);
		}
	};
	this.backLeftWheelOrientation_reset_changed = function () {
		var value = this.backLeftWheelOrientation_reset;
		return value;
	};
	try {
		this.backLeftWheelOrientation_reset = new SFRotation();
	} catch (e) {
		console.log('Problems setting backLeftWheelOrientation_reset '+e);
		console.error('Problems setting backLeftWheelOrientation_reset',e);
	}
	this.set_backRightWheelPosition_reset = function (value) {
		try {
			this.proxy.backRightWheelPosition_reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting backRightWheelPosition_reset '+e);
			console.error('Problems setting backRightWheelPosition_reset',e);
		}
	};
	this.backRightWheelPosition_reset_changed = function () {
		var value = this.backRightWheelPosition_reset;
		return value;
	};
	try {
		this.backRightWheelPosition_reset = new SFVec3f();
	} catch (e) {
		console.log('Problems setting backRightWheelPosition_reset '+e);
		console.error('Problems setting backRightWheelPosition_reset',e);
	}
	this.set_backRightWheelOrientation_reset = function (value) {
		try {
			this.proxy.backRightWheelOrientation_reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting backRightWheelOrientation_reset '+e);
			console.error('Problems setting backRightWheelOrientation_reset',e);
		}
	};
	this.backRightWheelOrientation_reset_changed = function () {
		var value = this.backRightWheelOrientation_reset;
		return value;
	};
	try {
		this.backRightWheelOrientation_reset = new SFRotation();
	} catch (e) {
		console.log('Problems setting backRightWheelOrientation_reset '+e);
		console.error('Problems setting backRightWheelOrientation_reset',e);
	}
	this.set_enablePhysics = function (value) {
		try {
			this.proxy.enablePhysics = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting enablePhysics '+e);
			console.error('Problems setting enablePhysics',e);
		}
	};
	this.enablePhysics_changed = function () {
		var value = this.enablePhysics;
		return value;
	};
	try {
		this.enablePhysics = new SFBool();
	} catch (e) {
		console.log('Problems setting enablePhysics '+e);
		console.error('Problems setting enablePhysics',e);
	}
	this.set_speed = function (value) {
		try {
			this.proxy.speed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speed '+e);
			console.error('Problems setting speed',e);
		}
	};
	this.speed_changed = function () {
		var value = this.speed;
		return value;
	};
	try {
		this.speed = new SFFloat();
	} catch (e) {
		console.log('Problems setting speed '+e);
		console.error('Problems setting speed',e);
	}
	this.set_revs = function (value) {
		try {
			this.proxy.revs = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting revs '+e);
			console.error('Problems setting revs',e);
		}
	};
	this.revs_changed = function () {
		var value = this.revs;
		return value;
	};
	try {
		this.revs = new SFFloat();
	} catch (e) {
		console.log('Problems setting revs '+e);
		console.error('Problems setting revs',e);
	}
	this.set_brakesApplied = function (value) {
		try {
			this.proxy.brakesApplied = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting brakesApplied '+e);
			console.error('Problems setting brakesApplied',e);
		}
	};
	this.brakesApplied_changed = function () {
		var value = this.brakesApplied;
		return value;
	};
	try {
		this.brakesApplied = new SFBool();
	} catch (e) {
		console.log('Problems setting brakesApplied '+e);
		console.error('Problems setting brakesApplied',e);
	}
	this.set_reversing = function (value) {
		try {
			this.proxy.reversing = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reversing '+e);
			console.error('Problems setting reversing',e);
		}
	};
	this.reversing_changed = function () {
		var value = this.reversing;
		return value;
	};
	try {
		this.reversing = new SFBool();
	} catch (e) {
		console.log('Problems setting reversing '+e);
		console.error('Problems setting reversing',e);
	}
	this.set_chassis = function (value) {
		try {
			this.proxy.chassis = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting chassis '+e);
			console.error('Problems setting chassis',e);
		}
	};
	this.chassis_changed = function () {
		var value = this.chassis;
		return value;
	};
	try {
		this.chassis = X3DJSON.nodeUtil("Scene","CAR-BODY-GEOM");
	} catch (e) {
		console.log('Problems setting chassis '+e);
		console.error('Problems setting chassis',e);
	}
	this.set_frontLeftWheel = function (value) {
		try {
			this.proxy.frontLeftWheel = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontLeftWheel '+e);
			console.error('Problems setting frontLeftWheel',e);
		}
	};
	this.frontLeftWheel_changed = function () {
		var value = this.frontLeftWheel;
		return value;
	};
	try {
		this.frontLeftWheel = X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-GEOM");
	} catch (e) {
		console.log('Problems setting frontLeftWheel '+e);
		console.error('Problems setting frontLeftWheel',e);
	}
	this.set_frontRightWheel = function (value) {
		try {
			this.proxy.frontRightWheel = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting frontRightWheel '+e);
			console.error('Problems setting frontRightWheel',e);
		}
	};
	this.frontRightWheel_changed = function () {
		var value = this.frontRightWheel;
		return value;
	};
	try {
		this.frontRightWheel = X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-GEOM");
	} catch (e) {
		console.log('Problems setting frontRightWheel '+e);
		console.error('Problems setting frontRightWheel',e);
	}
	this.set_backLeftWheel = function (value) {
		try {
			this.proxy.backLeftWheel = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting backLeftWheel '+e);
			console.error('Problems setting backLeftWheel',e);
		}
	};
	this.backLeftWheel_changed = function () {
		var value = this.backLeftWheel;
		return value;
	};
	try {
		this.backLeftWheel = X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-GEOM");
	} catch (e) {
		console.log('Problems setting backLeftWheel '+e);
		console.error('Problems setting backLeftWheel',e);
	}
	this.set_backRightWheel = function (value) {
		try {
			this.proxy.backRightWheel = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting backRightWheel '+e);
			console.error('Problems setting backRightWheel',e);
		}
	};
	this.backRightWheel_changed = function () {
		var value = this.backRightWheel;
		return value;
	};
	try {
		this.backRightWheel = X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-GEOM");
	} catch (e) {
		console.log('Problems setting backRightWheel '+e);
		console.error('Problems setting backRightWheel',e);
	}
	this.set_bigTerrainBox = function (value) {
		try {
			this.proxy.bigTerrainBox = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bigTerrainBox '+e);
			console.error('Problems setting bigTerrainBox',e);
		}
	};
	this.bigTerrainBox_changed = function () {
		var value = this.bigTerrainBox;
		return value;
	};
	try {
		this.bigTerrainBox = new MFNode();
	} catch (e) {
		console.log('Problems setting bigTerrainBox '+e);
		console.error('Problems setting bigTerrainBox',e);
	}
	this.set_roadTerrain = function (value) {
		try {
			this.proxy.roadTerrain = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting roadTerrain '+e);
			console.error('Problems setting roadTerrain',e);
		}
	};
	this.roadTerrain_changed = function () {
		var value = this.roadTerrain;
		return value;
	};
	try {
		this.roadTerrain = new MFNode();
	} catch (e) {
		console.log('Problems setting roadTerrain '+e);
		console.error('Problems setting roadTerrain',e);
	}
	this.set_sandTerrain = function (value) {
		try {
			this.proxy.sandTerrain = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sandTerrain '+e);
			console.error('Problems setting sandTerrain',e);
		}
	};
	this.sandTerrain_changed = function () {
		var value = this.sandTerrain;
		return value;
	};
	try {
		this.sandTerrain = new MFNode();
	} catch (e) {
		console.log('Problems setting sandTerrain '+e);
		console.error('Problems setting sandTerrain',e);
	}
	this.set_grassTerrain = function (value) {
		try {
			this.proxy.grassTerrain = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting grassTerrain '+e);
			console.error('Problems setting grassTerrain',e);
		}
	};
	this.grassTerrain_changed = function () {
		var value = this.grassTerrain;
		return value;
	};
	try {
		this.grassTerrain = new MFNode();
	} catch (e) {
		console.log('Problems setting grassTerrain '+e);
		console.error('Problems setting grassTerrain',e);
	}
	this.set_wallTerrain = function (value) {
		try {
			this.proxy.wallTerrain = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting wallTerrain '+e);
			console.error('Problems setting wallTerrain',e);
		}
	};
	this.wallTerrain_changed = function () {
		var value = this.wallTerrain;
		return value;
	};
	try {
		this.wallTerrain = new MFNode();
	} catch (e) {
		console.log('Problems setting wallTerrain '+e);
		console.error('Problems setting wallTerrain',e);
	}
	this.set_bodies = function (value) {
		try {
			this.proxy.bodies = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting bodies '+e);
			console.error('Problems setting bodies',e);
		}
	};
	this.bodies_changed = function () {
		var value = this.bodies;
		return value;
	};
	try {
		this.bodies = new MFNode();
	} catch (e) {
		console.log('Problems setting bodies '+e);
		console.error('Problems setting bodies',e);
	}
	this.set_joints = function (value) {
		try {
			this.proxy.joints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting joints '+e);
			console.error('Problems setting joints',e);
		}
	};
	this.joints_changed = function () {
		var value = this.joints;
		return value;
	};
	try {
		this.joints = new MFNode();
	} catch (e) {
		console.log('Problems setting joints '+e);
		console.error('Problems setting joints',e);
	}
	this.set_collisionContacts = function (value) {
		try {
			this.proxy.collisionContacts = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting collisionContacts '+e);
			console.error('Problems setting collisionContacts',e);
		}
	};
	this.collisionContacts_changed = function () {
		var value = this.collisionContacts;
		return value;
	};
	try {
		this.collisionContacts = new MFNode();
	} catch (e) {
		console.log('Problems setting collisionContacts '+e);
		console.error('Problems setting collisionContacts',e);
	}
	this.set_correctedContacts = function (value) {
		try {
			this.proxy.correctedContacts = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting correctedContacts '+e);
			console.error('Problems setting correctedContacts',e);
		}
	};
	this.correctedContacts_changed = function () {
		var value = this.correctedContacts;
		return value;
	};
	try {
		this.correctedContacts = new MFNode();
	} catch (e) {
		console.log('Problems setting correctedContacts '+e);
		console.error('Problems setting correctedContacts',e);
	}
	this.set_connectJoints = function (value) {
		try {
			this.proxy.connectJoints = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting connectJoints '+e);
			console.error('Problems setting connectJoints',e);
		}
	};
	this.connectJoints_changed = function () {
		var value = this.connectJoints;
		return value;
	};
	try {
		this.connectJoints = new MFNode();
	} catch (e) {
		console.log('Problems setting connectJoints '+e);
		console.error('Problems setting connectJoints',e);
	}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'] = function() {
	this.set_actionKeyPress = function (value) {
		try {
			this.proxy.actionKeyPress = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting actionKeyPress '+e);
			console.error('Problems setting actionKeyPress',e);
		}
	};
	this.actionKeyPress_changed = function () {
		var value = this.actionKeyPress;
		return value;
	};
	try {
		this.actionKeyPress = new SFInt32();
	} catch (e) {
		console.log('Problems setting actionKeyPress '+e);
		console.error('Problems setting actionKeyPress',e);
	}
	this.set_decay = function (value) {
		try {
			this.proxy.decay = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting decay '+e);
			console.error('Problems setting decay',e);
		}
	};
	this.decay_changed = function () {
		var value = this.decay;
		return value;
	};
	try {
		this.decay = new SFFloat();
	} catch (e) {
		console.log('Problems setting decay '+e);
		console.error('Problems setting decay',e);
	}
	this.set_dir = function (value) {
		try {
			this.proxy.dir = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting dir '+e);
			console.error('Problems setting dir',e);
		}
	};
	this.dir_changed = function () {
		var value = this.dir;
		return value;
	};
	try {
		this.dir = new SFFloat();
	} catch (e) {
		console.log('Problems setting dir '+e);
		console.error('Problems setting dir',e);
	}
	this.set_accel = function (value) {
		try {
			this.proxy.accel = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting accel '+e);
			console.error('Problems setting accel',e);
		}
	};
	this.accel_changed = function () {
		var value = this.accel;
		return value;
	};
	try {
		this.accel = new SFFloat();
	} catch (e) {
		console.log('Problems setting accel '+e);
		console.error('Problems setting accel',e);
	}
	this.set_reverse = function (value) {
		try {
			this.proxy.reverse = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reverse '+e);
			console.error('Problems setting reverse',e);
		}
	};
	this.reverse_changed = function () {
		var value = this.reverse;
		return value;
	};
	try {
		this.reverse = new SFBool();
	} catch (e) {
		console.log('Problems setting reverse '+e);
		console.error('Problems setting reverse',e);
	}
	this.set_reset = function (value) {
		try {
			this.proxy.reset = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reset '+e);
			console.error('Problems setting reset',e);
		}
	};
	this.reset_changed = function () {
		var value = this.reset;
		return value;
	};
	try {
		this.reset = new SFBool();
	} catch (e) {
		console.log('Problems setting reset '+e);
		console.error('Problems setting reset',e);
	}


ecmascript:
    var accelVar = 0;
    var dirVar = 0;
    var accelFactor = 0.1;
    var dirFactor = 0.5;
    var decayVar = 0.1;
    var applyDecay = false;

   
	this.decay = function (val) {
       if (!applyDecay)
          return;

       if (this.proxy.dir >= decayVar) {
          this.proxy.dir = this.proxy.dir - decayVar;          
          if (this.proxy.dir < -1)
             this.proxy.dir = -1;
       } else if (this.proxy.dir <= -decayVar) {
          this.proxy.dir = this.proxy.dir + decayVar;

          if (this.proxy.dir > 1)
             this.proxy.dir = 1;
       } else {
          this.proxy.dir = 0;

          applyDecay = false;
       }   
    }

   ;

	this.actionKeyPress = function (val) {
        applyDecay = true;

    	if (val == 17) {
    	   accelVar = accelVar + accelFactor;
    	   
    	   if (accelVar > 1)
    	      accelVar = 1.0;
    	      
    	   this.proxy.accel = accelVar;
    	} else if (val == 18) {
    	   accelVar = accelVar - accelFactor;
    	   
    	   if (accelVar < -1)
    	      accelVar = -1.0;
    	      
    	   this.proxy.accel = accelVar;
    	} else if (val == 19) {
    	   dirVar = dirVar - dirFactor;
    	   
    	   if (dirVar < -1)
    	      dirVar = -1.0;
    	      
    	   this.proxy.dir = dirVar;
    	} else if (val == 20) {
    	   dirVar = dirVar + dirFactor;
    	   
    	   if (dirVar > 1)
    	      dirVar = 1.0;
    	      
    	   this.proxy.dir = dirVar;
    	} else {
    	   this.proxy.dir = 0;
    	   this.proxy.accel = 0;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] = function() {
	this.set_speed = function (value) {
		try {
			this.proxy.speed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speed '+e);
			console.error('Problems setting speed',e);
		}
	};
	this.speed_changed = function () {
		var value = this.speed;
		return value;
	};
	try {
		this.speed = new SFFloat();
	} catch (e) {
		console.log('Problems setting speed '+e);
		console.error('Problems setting speed',e);
	}
	this.set_revs = function (value) {
		try {
			this.proxy.revs = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting revs '+e);
			console.error('Problems setting revs',e);
		}
	};
	this.revs_changed = function () {
		var value = this.revs;
		return value;
	};
	try {
		this.revs = new SFFloat();
	} catch (e) {
		console.log('Problems setting revs '+e);
		console.error('Problems setting revs',e);
	}
	this.set_brakesApplied = function (value) {
		try {
			this.proxy.brakesApplied = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting brakesApplied '+e);
			console.error('Problems setting brakesApplied',e);
		}
	};
	this.brakesApplied_changed = function () {
		var value = this.brakesApplied;
		return value;
	};
	try {
		this.brakesApplied = new SFBool();
	} catch (e) {
		console.log('Problems setting brakesApplied '+e);
		console.error('Problems setting brakesApplied',e);
	}
	this.set_reversing = function (value) {
		try {
			this.proxy.reversing = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reversing '+e);
			console.error('Problems setting reversing',e);
		}
	};
	this.reversing_changed = function () {
		var value = this.reversing;
		return value;
	};
	try {
		this.reversing = new SFBool();
	} catch (e) {
		console.log('Problems setting reversing '+e);
		console.error('Problems setting reversing',e);
	}
	this.set_maxSpeed = function (value) {
		try {
			this.proxy.maxSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting maxSpeed '+e);
			console.error('Problems setting maxSpeed',e);
		}
	};
	this.maxSpeed_changed = function () {
		var value = this.maxSpeed;
		return value;
	};
	try {
		this.maxSpeed = new SFFloat();
	} catch (e) {
		console.log('Problems setting maxSpeed '+e);
		console.error('Problems setting maxSpeed',e);
	}
	this.set_brakeLightColor = function (value) {
		try {
			this.proxy.brakeLightColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting brakeLightColor '+e);
			console.error('Problems setting brakeLightColor',e);
		}
	};
	this.brakeLightColor_changed = function () {
		var value = this.brakeLightColor;
		return value;
	};
	try {
		this.brakeLightColor = new SFColor();
	} catch (e) {
		console.log('Problems setting brakeLightColor '+e);
		console.error('Problems setting brakeLightColor',e);
	}
	this.set_reverseLightColor = function (value) {
		try {
			this.proxy.reverseLightColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting reverseLightColor '+e);
			console.error('Problems setting reverseLightColor',e);
		}
	};
	this.reverseLightColor_changed = function () {
		var value = this.reverseLightColor;
		return value;
	};
	try {
		this.reverseLightColor = new SFColor();
	} catch (e) {
		console.log('Problems setting reverseLightColor '+e);
		console.error('Problems setting reverseLightColor',e);
	}
	this.set_speedScale = function (value) {
		try {
			this.proxy.speedScale = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speedScale '+e);
			console.error('Problems setting speedScale',e);
		}
	};
	this.speedScale_changed = function () {
		var value = this.speedScale;
		return value;
	};
	try {
		this.speedScale = new SFVec3f();
	} catch (e) {
		console.log('Problems setting speedScale '+e);
		console.error('Problems setting speedScale',e);
	}
	this.set_speedFraction = function (value) {
		try {
			this.proxy.speedFraction = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting speedFraction '+e);
			console.error('Problems setting speedFraction',e);
		}
	};
	this.speedFraction_changed = function () {
		var value = this.speedFraction;
		return value;
	};
	try {
		this.speedFraction = new SFFloat();
	} catch (e) {
		console.log('Problems setting speedFraction '+e);
		console.error('Problems setting speedFraction',e);
	}


ecmascript:
   
	this.brakesApplied = function (val) {
      if(val)
        this.proxy.brakeLightColor.r = 1;
      else
        this.proxy.brakeLightColor.r = 0.1;
    }

   ;

	this.reversing = function (val) {
      if(val) {
        this.proxy.reverseLightColor.r = 1;
        this.proxy.reverseLightColor.g = 1;
        this.proxy.reverseLightColor.b = 1;
      } else {
        this.proxy.reverseLightColor.r = 0.1;
        this.proxy.reverseLightColor.g = 0.1;
        this.proxy.reverseLightColor.b = 0.1;
      }
    }

   ;

	this.speed = function (val) {
      this.proxy.speedScale.x = 1;
      this.proxy.speedScale.y = val / this.proxy.maxSpeed;
      this.proxy.speedScale.z = 1;
      this.proxy.speedFraction = val / this.proxy.maxSpeed;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] = function() {
	this.set_carPosition = function (value) {
		try {
			this.proxy.carPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting carPosition '+e);
			console.error('Problems setting carPosition',e);
		}
	};
	this.carPosition_changed = function () {
		var value = this.carPosition;
		return value;
	};
	try {
		this.carPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting carPosition '+e);
		console.error('Problems setting carPosition',e);
	}
	this.set_resetPosition = function (value) {
		try {
			this.proxy.resetPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetPosition '+e);
			console.error('Problems setting resetPosition',e);
		}
	};
	this.resetPosition_changed = function () {
		var value = this.resetPosition;
		return value;
	};
	try {
		this.resetPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting resetPosition '+e);
		console.error('Problems setting resetPosition',e);
	}
	this.set_resetOrientation = function (value) {
		try {
			this.proxy.resetOrientation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting resetOrientation '+e);
			console.error('Problems setting resetOrientation',e);
		}
	};
	this.resetOrientation_changed = function () {
		var value = this.resetOrientation;
		return value;
	};
	try {
		this.resetOrientation = new SFRotation();
	} catch (e) {
		console.log('Problems setting resetOrientation '+e);
		console.error('Problems setting resetOrientation',e);
	}
	this.set_cameraTranslation = function (value) {
		try {
			this.proxy.cameraTranslation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cameraTranslation '+e);
			console.error('Problems setting cameraTranslation',e);
		}
	};
	this.cameraTranslation_changed = function () {
		var value = this.cameraTranslation;
		return value;
	};
	try {
		this.cameraTranslation = new SFVec3f();
	} catch (e) {
		console.log('Problems setting cameraTranslation '+e);
		console.error('Problems setting cameraTranslation',e);
	}
	this.set_cameraRotation = function (value) {
		try {
			this.proxy.cameraRotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cameraRotation '+e);
			console.error('Problems setting cameraRotation',e);
		}
	};
	this.cameraRotation_changed = function () {
		var value = this.cameraRotation;
		return value;
	};
	try {
		this.cameraRotation = new SFRotation();
	} catch (e) {
		console.log('Problems setting cameraRotation '+e);
		console.error('Problems setting cameraRotation',e);
	}
	this.set_height = function (value) {
		try {
			this.proxy.height = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting height '+e);
			console.error('Problems setting height',e);
		}
	};
	this.height_changed = function () {
		var value = this.height;
		return value;
	};
	try {
		this.height = new SFFloat();
	} catch (e) {
		console.log('Problems setting height '+e);
		console.error('Problems setting height',e);
	}
	this.set_chainLength = function (value) {
		try {
			this.proxy.chainLength = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting chainLength '+e);
			console.error('Problems setting chainLength',e);
		}
	};
	this.chainLength_changed = function () {
		var value = this.chainLength;
		return value;
	};
	try {
		this.chainLength = new SFFloat();
	} catch (e) {
		console.log('Problems setting chainLength '+e);
		console.error('Problems setting chainLength',e);
	}
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].initialize();
    if (X3DJSON.nodeUtil("Scene","cam_car_chase-TIMER")) {
X3DJSON.nodeUtil("Scene","cam_car_chase-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","cam_car_chase-POS-INTERP")) {
X3DJSON.nodeUtil("Scene","cam_car_chase-POS-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","cam_car_chase-TIMER")) {
X3DJSON.nodeUtil("Scene","cam_car_chase-TIMER").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","cam_car_chase-ROT-INTERP")) {
X3DJSON.nodeUtil("Scene","cam_car_chase-ROT-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","cam_car_chase-POS-INTERP")) {
X3DJSON.nodeUtil("Scene","cam_car_chase-POS-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","cam_car_chase-ROT-INTERP")) {
X3DJSON.nodeUtil("Scene","cam_car_chase-ROT-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","CAR-BODY")) {
X3DJSON.nodeUtil("Scene","CAR-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","CAR-BODY")) {
X3DJSON.nodeUtil("Scene","CAR-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","WHEEL")) {
X3DJSON.nodeUtil("Scene","WHEEL").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelDirectionInput(X3DJSON.nodeUtil("Scene","WHEEL","wheelX"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelDirectionInput(X3DJSON.nodeUtil("Scene","WHEEL","wheelX"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","WHEEL")) {
X3DJSON.nodeUtil("Scene","WHEEL").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelAcceleratorInput(X3DJSON.nodeUtil("Scene","WHEEL","throttleSlider"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelAcceleratorInput(X3DJSON.nodeUtil("Scene","WHEEL","throttleSlider"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","WHEEL")) {
X3DJSON.nodeUtil("Scene","WHEEL").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reverseSelected(X3DJSON.nodeUtil("Scene","WHEEL","button2"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reverseSelected(X3DJSON.nodeUtil("Scene","WHEEL","button2"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","WHEEL")) {
X3DJSON.nodeUtil("Scene","WHEEL").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].resetRequest(X3DJSON.nodeUtil("Scene","WHEEL","button3"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].resetRequest(X3DJSON.nodeUtil("Scene","WHEEL","button3"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","GAMEPAD")) {
X3DJSON.nodeUtil("Scene","GAMEPAD").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelDirectionInput(X3DJSON.nodeUtil("Scene","GAMEPAD","leftStickX"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelDirectionInput(X3DJSON.nodeUtil("Scene","GAMEPAD","leftStickX"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","GAMEPAD")) {
X3DJSON.nodeUtil("Scene","GAMEPAD").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelAcceleratorInput(X3DJSON.nodeUtil("Scene","GAMEPAD","rightStickY"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelAcceleratorInput(X3DJSON.nodeUtil("Scene","GAMEPAD","rightStickY"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","GAMEPAD")) {
X3DJSON.nodeUtil("Scene","GAMEPAD").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reverseSelected(X3DJSON.nodeUtil("Scene","GAMEPAD","l1Button"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reverseSelected(X3DJSON.nodeUtil("Scene","GAMEPAD","l1Button"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","GAMEPAD")) {
X3DJSON.nodeUtil("Scene","GAMEPAD").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].resetRequest(X3DJSON.nodeUtil("Scene","GAMEPAD","r1Button"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].resetRequest(X3DJSON.nodeUtil("Scene","GAMEPAD","r1Button"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","KEYS")) {
X3DJSON.nodeUtil("Scene","KEYS").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].actionKeyPress(X3DJSON.nodeUtil("Scene","KEYS","actionKeyPress"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].actionKeyPress(X3DJSON.nodeUtil("Scene","KEYS","actionKeyPress"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","KEYTIMER")) {
X3DJSON.nodeUtil("Scene","KEYTIMER").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].decay(X3DJSON.nodeUtil("Scene","KEYTIMER","fraction"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].decay(X3DJSON.nodeUtil("Scene","KEYTIMER","fraction"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION']['dir'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION']['dir'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION']['dir'].push(function(property, value) {
		if (property === 'dir') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelDirectionInput(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelDirectionInput(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION']['accel'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION']['accel'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION']['accel'].push(function(property, value) {
		if (property === 'accel') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelAcceleratorInput(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelAcceleratorInput(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION']['reverse'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION']['reverse'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION']['reverse'].push(function(property, value) {
		if (property === 'reverse') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reverseSelected(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reverseSelected(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION']['reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION']['reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC']['ACTION']['reset'].push(function(property, value) {
		if (property === 'reset') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].resetRequest(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].resetRequest(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset, __eventTime);
		}
    if (X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT")) {
X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].collisionContacts(X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT","contacts"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].collisionContacts(X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT","contacts"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","CAR-BODY")) {
X3DJSON.nodeUtil("Scene","CAR-BODY").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].carVelocity(X3DJSON.nodeUtil("Scene","CAR-BODY","linearVelocity"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].carVelocity(X3DJSON.nodeUtil("Scene","CAR-BODY","linearVelocity"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","CAR-BODY")) {
X3DJSON.nodeUtil("Scene","CAR-BODY").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].carOrientation(X3DJSON.nodeUtil("Scene","CAR-BODY","orientation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].carOrientation(X3DJSON.nodeUtil("Scene","CAR-BODY","orientation"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelOrientation(X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","body2Axis"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelOrientation(X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","body2Axis"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT")) {
X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelOrientation(X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","body2Axis"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelOrientation(X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","body2Axis"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].currentSteeringAngle(X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","hinge1Angle"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].currentSteeringAngle(X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","hinge1Angle"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT")) {
X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT")) {
X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT")) {
X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT").addEventListener('outputchange', function(event) {
}, false);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'].push(function(property, value) {
		if (property === 'enablePhysics') {
			X3DJSON.nodeUtil("Scene","BODY-COLLECTION","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BODY-COLLECTION","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'].push(function(property, value) {
		if (property === 'enablePhysics') {
			X3DJSON.nodeUtil("Scene","COLLISION-GROUP","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","COLLISION-GROUP","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'].push(function(property, value) {
		if (property === 'enablePhysics') {
			X3DJSON.nodeUtil("Scene","CAR-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CAR-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'].push(function(property, value) {
		if (property === 'enablePhysics') {
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'].push(function(property, value) {
		if (property === 'enablePhysics') {
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'].push(function(property, value) {
		if (property === 'enablePhysics') {
			X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['enablePhysics'].push(function(property, value) {
		if (property === 'enablePhysics') {
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisPosition_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisPosition_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisPosition_reset'].push(function(property, value) {
		if (property === 'chassisPosition_reset') {
			X3DJSON.nodeUtil("Scene","CAR-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CAR-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisOrientation_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisOrientation_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisOrientation_reset'].push(function(property, value) {
		if (property === 'chassisOrientation_reset') {
			X3DJSON.nodeUtil("Scene","CAR-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CAR-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftWheelPosition_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftWheelPosition_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftWheelPosition_reset'].push(function(property, value) {
		if (property === 'frontLeftWheelPosition_reset') {
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftWheelPosition_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftWheelPosition_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftWheelPosition_reset'].push(function(property, value) {
		if (property === 'frontLeftWheelPosition_reset') {
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","anchorPoint",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","anchorPoint",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftWheelOrientation_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftWheelOrientation_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftWheelOrientation_reset'].push(function(property, value) {
		if (property === 'frontLeftWheelOrientation_reset') {
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelOrientation_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelOrientation_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightWheelPosition_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightWheelPosition_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightWheelPosition_reset'].push(function(property, value) {
		if (property === 'frontRightWheelPosition_reset') {
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightWheelPosition_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightWheelPosition_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightWheelPosition_reset'].push(function(property, value) {
		if (property === 'frontRightWheelPosition_reset') {
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","anchorPoint",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","anchorPoint",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightWheelOrientation_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightWheelOrientation_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightWheelOrientation_reset'].push(function(property, value) {
		if (property === 'frontRightWheelOrientation_reset') {
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelOrientation_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelOrientation_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backLeftWheelPosition_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backLeftWheelPosition_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backLeftWheelPosition_reset'].push(function(property, value) {
		if (property === 'backLeftWheelPosition_reset') {
			X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backLeftWheelPosition_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backLeftWheelPosition_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backLeftWheelPosition_reset'].push(function(property, value) {
		if (property === 'backLeftWheelPosition_reset') {
			X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","anchorPoint",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","anchorPoint",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backLeftWheelOrientation_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backLeftWheelOrientation_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backLeftWheelOrientation_reset'].push(function(property, value) {
		if (property === 'backLeftWheelOrientation_reset') {
			X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelOrientation_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelOrientation_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backRightWheelPosition_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backRightWheelPosition_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backRightWheelPosition_reset'].push(function(property, value) {
		if (property === 'backRightWheelPosition_reset') {
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backRightWheelPosition_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backRightWheelPosition_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backRightWheelPosition_reset'].push(function(property, value) {
		if (property === 'backRightWheelPosition_reset') {
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT","anchorPoint",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT","anchorPoint",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backRightWheelOrientation_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backRightWheelOrientation_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['backRightWheelOrientation_reset'].push(function(property, value) {
		if (property === 'backRightWheelOrientation_reset') {
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelOrientation_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelOrientation_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelMinStop'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelMinStop'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelMinStop'].push(function(property, value) {
		if (property === 'frontWheelMinStop') {
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","minAngle1",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","minAngle1",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelMinStop'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelMinStop'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelMinStop'].push(function(property, value) {
		if (property === 'frontWheelMinStop') {
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","minAngle1",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","minAngle1",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelMaxStop'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelMaxStop'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelMaxStop'].push(function(property, value) {
		if (property === 'frontWheelMaxStop') {
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","maxAngle1",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","maxAngle1",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelMaxStop'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelMaxStop'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelMaxStop'].push(function(property, value) {
		if (property === 'frontWheelMaxStop') {
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","maxAngle1",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","maxAngle1",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftWheelSpeed'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftWheelSpeed'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftWheelSpeed'].push(function(property, value) {
		if (property === 'frontLeftWheelSpeed') {
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","desiredAngularVelocity2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelSpeed, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","desiredAngularVelocity2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelSpeed, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightWheelSpeed'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightWheelSpeed'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightWheelSpeed'].push(function(property, value) {
		if (property === 'frontRightWheelSpeed') {
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","desiredAngularVelocity2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelSpeed, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","desiredAngularVelocity2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelSpeed, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearLeftWheelSpeed'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearLeftWheelSpeed'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearLeftWheelSpeed'].push(function(property, value) {
		if (property === 'rearLeftWheelSpeed') {
			X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","desiredAngularVelocity2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftWheelSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftWheelSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftWheelSpeed, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","desiredAngularVelocity2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftWheelSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftWheelSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftWheelSpeed, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearRightWheelSpeed'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearRightWheelSpeed'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearRightWheelSpeed'].push(function(property, value) {
		if (property === 'rearRightWheelSpeed') {
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT","desiredAngularVelocity2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightWheelSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightWheelSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightWheelSpeed, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT","desiredAngularVelocity2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightWheelSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightWheelSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightWheelSpeed, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelTorque'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelTorque'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelTorque'].push(function(property, value) {
		if (property === 'frontWheelTorque') {
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","maxTorque2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","maxTorque2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelTorque'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelTorque'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontWheelTorque'].push(function(property, value) {
		if (property === 'frontWheelTorque') {
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","maxTorque2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","maxTorque2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearWheelTorque'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearWheelTorque'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearWheelTorque'].push(function(property, value) {
		if (property === 'rearWheelTorque') {
			X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","maxTorque2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","maxTorque2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearWheelTorque'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearWheelTorque'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearWheelTorque'].push(function(property, value) {
		if (property === 'rearWheelTorque') {
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT","maxTorque2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT","maxTorque2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftAxleAxis'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftAxleAxis'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontLeftAxleAxis'].push(function(property, value) {
		if (property === 'frontLeftAxleAxis') {
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","axis2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftAxleAxis === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftAxleAxis() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftAxleAxis, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","axis2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftAxleAxis === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftAxleAxis() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftAxleAxis, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightAxleAxis'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightAxleAxis'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frontRightAxleAxis'].push(function(property, value) {
		if (property === 'frontRightAxleAxis') {
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","axis2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightAxleAxis === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightAxleAxis() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightAxleAxis, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","axis2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightAxleAxis === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightAxleAxis() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightAxleAxis, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearLeftAxleAxis'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearLeftAxleAxis'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearLeftAxleAxis'].push(function(property, value) {
		if (property === 'rearLeftAxleAxis') {
			X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","axis2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftAxleAxis === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftAxleAxis() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftAxleAxis, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","axis2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftAxleAxis === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftAxleAxis() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftAxleAxis, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearRightAxleAxis'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearRightAxleAxis'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['rearRightAxleAxis'].push(function(property, value) {
		if (property === 'rearRightAxleAxis') {
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT","axis2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightAxleAxis === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightAxleAxis() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightAxleAxis, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT","axis2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightAxleAxis === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightAxleAxis() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightAxleAxis, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frictionForces'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frictionForces'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['frictionForces'].push(function(property, value) {
		if (property === 'frictionForces') {
			X3DJSON.nodeUtil("Scene","CAR-BODY","forces",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frictionForces === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frictionForces() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frictionForces, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CAR-BODY","forces",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frictionForces === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frictionForces() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frictionForces, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['correctedContacts'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['correctedContacts'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['correctedContacts'].push(function(property, value) {
		if (property === 'correctedContacts') {
			X3DJSON.nodeUtil("Scene","BODY-COLLECTION","contacts",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedContacts === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedContacts() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedContacts, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BODY-COLLECTION","contacts",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedContacts === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedContacts() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedContacts, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['correctedChassisOrientation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['correctedChassisOrientation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['correctedChassisOrientation'].push(function(property, value) {
		if (property === 'correctedChassisOrientation') {
			X3DJSON.nodeUtil("Scene","CAR-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedChassisOrientation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedChassisOrientation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedChassisOrientation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CAR-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedChassisOrientation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedChassisOrientation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedChassisOrientation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['connectJoints'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['connectJoints'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['connectJoints'].push(function(property, value) {
		if (property === 'connectJoints') {
			X3DJSON.nodeUtil("Scene","BODY-COLLECTION","joints",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].connectJoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].connectJoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].connectJoints, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BODY-COLLECTION","joints",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].connectJoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].connectJoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].connectJoints, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['speed'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['speed'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['speed'].push(function(property, value) {
		if (property === 'speed') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speed(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speed(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['revs'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['revs'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['revs'].push(function(property, value) {
		if (property === 'revs') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].revs(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].revs(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['brakesApplied'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['brakesApplied'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['brakesApplied'].push(function(property, value) {
		if (property === 'brakesApplied') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].brakesApplied(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].brakesApplied(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['reversing'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['reversing'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['reversing'].push(function(property, value) {
		if (property === 'reversing') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].reversing(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].reversing(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION']['brakeLightColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION']['brakeLightColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION']['brakeLightColor'].push(function(property, value) {
		if (property === 'brakeLightColor') {
			X3DJSON.nodeUtil("Scene","BRAKE-LIGHT-COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].brakeLightColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].brakeLightColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].brakeLightColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","BRAKE-LIGHT-COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].brakeLightColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].brakeLightColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].brakeLightColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION']['reverseLightColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION']['reverseLightColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION']['reverseLightColor'].push(function(property, value) {
		if (property === 'reverseLightColor') {
			X3DJSON.nodeUtil("Scene","REVERSE-LIGHT-COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].reverseLightColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].reverseLightColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].reverseLightColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","REVERSE-LIGHT-COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].reverseLightColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].reverseLightColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].reverseLightColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION']['speedScale'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION']['speedScale'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION']['speedScale'].push(function(property, value) {
		if (property === 'speedScale') {
			X3DJSON.nodeUtil("Scene","SPEED-INDICATOR","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedScale === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedScale() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedScale, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SPEED-INDICATOR","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedScale === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedScale() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedScale, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION']['speedFraction'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION']['speedFraction'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT']['ACTION']['speedFraction'].push(function(property, value) {
		if (property === 'speedFraction') {
			X3DJSON.nodeUtil("Scene","SPEED-COLOR","fraction",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedFraction === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedFraction() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedFraction, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SPEED-COLOR","fraction",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedFraction === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedFraction() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedFraction, __eventTime);
    if (X3DJSON.nodeUtil("Scene","SPEED-COLOR")) {
X3DJSON.nodeUtil("Scene","SPEED-COLOR").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","WHEEL")) {
X3DJSON.nodeUtil("Scene","WHEEL").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-HINGE-WHEEL-INTERP")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-HINGE-WHEEL-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","WHEEL")) {
X3DJSON.nodeUtil("Scene","WHEEL").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-RIGHT-HINGE-WHEEL-INTERP")) {
X3DJSON.nodeUtil("Scene","FRONT-RIGHT-HINGE-WHEEL-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-HINGE-ANGLE-INTERP")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-HINGE-ANGLE-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT")) {
X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-RIGHT-HINGE-ANGLE-INTERP")) {
X3DJSON.nodeUtil("Scene","FRONT-RIGHT-HINGE-ANGLE-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-MAXSTOP-ANGLE-INTERP")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-MAXSTOP-ANGLE-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT")) {
X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-RIGHT-MAXSTOP-ANGLE-INTERP")) {
X3DJSON.nodeUtil("Scene","FRONT-RIGHT-MAXSTOP-ANGLE-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-MINSTOP-ANGLE-INTERP")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-MINSTOP-ANGLE-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT")) {
X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-RIGHT-MINSTOP-ANGLE-INTERP")) {
X3DJSON.nodeUtil("Scene","FRONT-RIGHT-MINSTOP-ANGLE-INTERP").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY")) {
X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY").addEventListener('outputchange', function(event) {
}, false);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisPosition_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisPosition_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisPosition_reset'].push(function(property, value) {
		if (property === 'chassisPosition_reset') {
			X3DJSON.nodeUtil("Scene","CHASSIS-VIEW","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CHASSIS-VIEW","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisOrientation_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisOrientation_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisOrientation_reset'].push(function(property, value) {
		if (property === 'chassisOrientation_reset') {
			X3DJSON.nodeUtil("Scene","CHASSIS-VIEW","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CHASSIS-VIEW","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset, __eventTime);
    if (X3DJSON.nodeUtil("Scene","CAR-BODY")) {
X3DJSON.nodeUtil("Scene","CAR-BODY").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].carPosition(X3DJSON.nodeUtil("Scene","CAR-BODY","position"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].carPosition(X3DJSON.nodeUtil("Scene","CAR-BODY","position"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisPosition_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisPosition_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisPosition_reset'].push(function(property, value) {
		if (property === 'chassisPosition_reset') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].resetPosition(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].resetPosition(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisOrientation_reset'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisOrientation_reset'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT']['ACTION']['chassisOrientation_reset'].push(function(property, value) {
		if (property === 'chassisOrientation_reset') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].resetOrientation(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].resetOrientation(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT']['ACTION']['cameraTranslation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT']['ACTION']['cameraTranslation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT']['ACTION']['cameraTranslation'].push(function(property, value) {
		if (property === 'cameraTranslation') {
			X3DJSON.nodeUtil("Scene","CAMERA-TX","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraTranslation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CAMERA-TX","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraTranslation, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT']['ACTION']['cameraRotation'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT']['ACTION']['cameraRotation'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT']['ACTION']['cameraRotation'].push(function(property, value) {
		if (property === 'cameraRotation') {
			X3DJSON.nodeUtil("Scene","CAMERA-TX","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraRotation, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","CAMERA-TX","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraRotation, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelDirectionInput(X3DJSON.nodeUtil("Scene","WHEEL","wheelX"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelAcceleratorInput(X3DJSON.nodeUtil("Scene","WHEEL","throttleSlider"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reverseSelected(X3DJSON.nodeUtil("Scene","WHEEL","button2"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].resetRequest(X3DJSON.nodeUtil("Scene","WHEEL","button3"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelDirectionInput(X3DJSON.nodeUtil("Scene","GAMEPAD","leftStickX"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelAcceleratorInput(X3DJSON.nodeUtil("Scene","GAMEPAD","rightStickY"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reverseSelected(X3DJSON.nodeUtil("Scene","GAMEPAD","l1Button"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].resetRequest(X3DJSON.nodeUtil("Scene","GAMEPAD","r1Button"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].actionKeyPress(X3DJSON.nodeUtil("Scene","KEYS","actionKeyPress"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].decay(X3DJSON.nodeUtil("Scene","KEYTIMER","fraction"), __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelDirectionInput(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].dir, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].wheelAcceleratorInput(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].accel, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reverseSelected(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reverse, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].resetRequest(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['KEYSC'].reset, __eventTime);
		}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].collisionContacts(X3DJSON.nodeUtil("Scene","COLLISION-OUTPUT","contacts"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].carVelocity(X3DJSON.nodeUtil("Scene","CAR-BODY","linearVelocity"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].carOrientation(X3DJSON.nodeUtil("Scene","CAR-BODY","orientation"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelOrientation(X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","body2Axis"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelOrientation(X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","body2Axis"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].currentSteeringAngle(X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","hinge1Angle"), __eventTime);
			X3DJSON.nodeUtil("Scene","BODY-COLLECTION","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
			X3DJSON.nodeUtil("Scene","COLLISION-GROUP","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
			X3DJSON.nodeUtil("Scene","CAR-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-BODY","enabled",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].enablePhysics, __eventTime);
			X3DJSON.nodeUtil("Scene","CAR-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","CAR-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","anchorPoint",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelPosition_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-WHEEL-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelOrientation_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","anchorPoint",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelPosition_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-WHEEL-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelOrientation_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","anchorPoint",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelPosition_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-LEFT-WHEEL-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backLeftWheelOrientation_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-BODY","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT","anchorPoint",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelPosition_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-WHEEL-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].backRightWheelOrientation_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","minAngle1",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","minAngle1",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMinStop, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","maxAngle1",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","maxAngle1",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelMaxStop, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","desiredAngularVelocity2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftWheelSpeed, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","desiredAngularVelocity2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightWheelSpeed, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","desiredAngularVelocity2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftWheelSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftWheelSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftWheelSpeed, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT","desiredAngularVelocity2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightWheelSpeed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightWheelSpeed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightWheelSpeed, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","maxTorque2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","maxTorque2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontWheelTorque, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","maxTorque2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT","maxTorque2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearWheelTorque, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-LEFT-JOINT","axis2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftAxleAxis === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftAxleAxis() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontLeftAxleAxis, __eventTime);
			X3DJSON.nodeUtil("Scene","FRONT-RIGHT-JOINT","axis2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightAxleAxis === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightAxleAxis() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frontRightAxleAxis, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-LEFT-JOINT","axis2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftAxleAxis === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftAxleAxis() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearLeftAxleAxis, __eventTime);
			X3DJSON.nodeUtil("Scene","BACK-RIGHT-JOINT","axis2",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightAxleAxis === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightAxleAxis() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].rearRightAxleAxis, __eventTime);
			X3DJSON.nodeUtil("Scene","CAR-BODY","forces",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frictionForces === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frictionForces() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].frictionForces, __eventTime);
			X3DJSON.nodeUtil("Scene","BODY-COLLECTION","contacts",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedContacts === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedContacts() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedContacts, __eventTime);
			X3DJSON.nodeUtil("Scene","CAR-BODY","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedChassisOrientation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedChassisOrientation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].correctedChassisOrientation, __eventTime);
			X3DJSON.nodeUtil("Scene","BODY-COLLECTION","joints",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].connectJoints === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].connectJoints() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].connectJoints, __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speed(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].speed, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].revs(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].revs, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].brakesApplied(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].brakesApplied, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].reversing(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].reversing, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","BRAKE-LIGHT-COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].brakeLightColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].brakeLightColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].brakeLightColor, __eventTime);
			X3DJSON.nodeUtil("Scene","REVERSE-LIGHT-COLOR","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].reverseLightColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].reverseLightColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].reverseLightColor, __eventTime);
			X3DJSON.nodeUtil("Scene","SPEED-INDICATOR","scale",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedScale === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedScale() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedScale, __eventTime);
			X3DJSON.nodeUtil("Scene","SPEED-COLOR","fraction",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedFraction === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedFraction() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['UI-CONTROL-SCRIPT'].speedFraction, __eventTime);
			X3DJSON.nodeUtil("Scene","CHASSIS-VIEW","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset, __eventTime);
			X3DJSON.nodeUtil("Scene","CHASSIS-VIEW","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].carPosition(X3DJSON.nodeUtil("Scene","CAR-BODY","position"), __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].resetPosition(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisPosition_reset, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].resetOrientation(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAR-CONTROL-SCRIPT'].chassisOrientation_reset, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","CAMERA-TX","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraTranslation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraTranslation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraTranslation, __eventTime);
			X3DJSON.nodeUtil("Scene","CAMERA-TX","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraRotation === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraRotation() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/RigidBodyPhysics/CarDemoMain.json']['CAMERA-CONTROL-SCRIPT'].cameraRotation, __eventTime);