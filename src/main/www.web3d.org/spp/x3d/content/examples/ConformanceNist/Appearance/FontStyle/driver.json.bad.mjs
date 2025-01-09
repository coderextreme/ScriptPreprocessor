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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'] = function() {
	this.set_axes = function (value) {
		try {
			this.proxy.axes = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting axes '+e);
			console.error('Problems setting axes',e);
		}
	};
	this.axes_changed = function () {
		var value = this.axes;
		return value;
	};
	try {
		this.axes = X3DJSON.nodeUtil("Scene","AXES");
	} catch (e) {
		console.log('Problems setting axes '+e);
		console.error('Problems setting axes',e);
	}
	this.set_myTrans = function (value) {
		try {
			this.proxy.myTrans = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting myTrans '+e);
			console.error('Problems setting myTrans',e);
		}
	};
	this.myTrans_changed = function () {
		var value = this.myTrans;
		return value;
	};
	try {
		this.myTrans = X3DJSON.nodeUtil("Scene","MYTRANS");
	} catch (e) {
		console.log('Problems setting myTrans '+e);
		console.error('Problems setting myTrans',e);
	}
	this.set_myFont = function (value) {
		try {
			this.proxy.myFont = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting myFont '+e);
			console.error('Problems setting myFont',e);
		}
	};
	this.myFont_changed = function () {
		var value = this.myFont;
		return value;
	};
	try {
		this.myFont = X3DJSON.nodeUtil("Scene","MYFONT");
	} catch (e) {
		console.log('Problems setting myFont '+e);
		console.error('Problems setting myFont',e);
	}
	this.set_justify = function (value) {
		try {
			this.proxy.justify = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justify '+e);
			console.error('Problems setting justify',e);
		}
	};
	this.justify_changed = function () {
		var value = this.justify;
		return value;
	};
	try {
		this.justify = new MFString("BEGIN");
	} catch (e) {
		console.log('Problems setting justify '+e);
		console.error('Problems setting justify',e);
	}
	this.set_myURL = function (value) {
		try {
			this.proxy.myURL = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting myURL '+e);
			console.error('Problems setting myURL',e);
		}
	};
	this.myURL_changed = function () {
		var value = this.myURL;
		return value;
	};
	try {
		this.myURL = new SFString("../../html/write_list.cgi?");
	} catch (e) {
		console.log('Problems setting myURL '+e);
		console.error('Problems setting myURL',e);
	}
	this.set_cgiString = function (value) {
		try {
			this.proxy.cgiString = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cgiString '+e);
			console.error('Problems setting cgiString',e);
		}
	};
	this.cgiString_changed = function () {
		var value = this.cgiString;
		return value;
	};
	try {
		this.cgiString = new SFString("+FontStyle+Appearance");
	} catch (e) {
		console.log('Problems setting cgiString '+e);
		console.error('Problems setting cgiString',e);
	}
	this.set_myParameter = function (value) {
		try {
			this.proxy.myParameter = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting myParameter '+e);
			console.error('Problems setting myParameter',e);
		}
	};
	this.myParameter_changed = function () {
		var value = this.myParameter;
		return value;
	};
	try {
		this.myParameter = new MFString("target=_top");
	} catch (e) {
		console.log('Problems setting myParameter '+e);
		console.error('Problems setting myParameter',e);
	}
	this.set_green = function (value) {
		try {
			this.proxy.green = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting green '+e);
			console.error('Problems setting green',e);
		}
	};
	this.green_changed = function () {
		var value = this.green;
		return value;
	};
	try {
		this.green = new SFColor(0,1,0);
	} catch (e) {
		console.log('Problems setting green '+e);
		console.error('Problems setting green',e);
	}
	this.set_white = function (value) {
		try {
			this.proxy.white = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting white '+e);
			console.error('Problems setting white',e);
		}
	};
	this.white_changed = function () {
		var value = this.white;
		return value;
	};
	try {
		this.white = new SFColor(1,1,1);
	} catch (e) {
		console.log('Problems setting white '+e);
		console.error('Problems setting white',e);
	}
	this.set_myFalse = function (value) {
		try {
			this.proxy.myFalse = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting myFalse '+e);
			console.error('Problems setting myFalse',e);
		}
	};
	this.myFalse_changed = function () {
		var value = this.myFalse;
		return value;
	};
	try {
		this.myFalse = new SFString(false);
	} catch (e) {
		console.log('Problems setting myFalse '+e);
		console.error('Problems setting myFalse',e);
	}
	this.set_myTrue = function (value) {
		try {
			this.proxy.myTrue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting myTrue '+e);
			console.error('Problems setting myTrue',e);
		}
	};
	this.myTrue_changed = function () {
		var value = this.myTrue;
		return value;
	};
	try {
		this.myTrue = new SFString(true);
	} catch (e) {
		console.log('Problems setting myTrue '+e);
		console.error('Problems setting myTrue',e);
	}
	this.set_begin = function (value) {
		try {
			this.proxy.begin = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting begin '+e);
			console.error('Problems setting begin',e);
		}
	};
	this.begin_changed = function () {
		var value = this.begin;
		return value;
	};
	try {
		this.begin = new SFString("BEGIN");
	} catch (e) {
		console.log('Problems setting begin '+e);
		console.error('Problems setting begin',e);
	}
	this.set_middle = function (value) {
		try {
			this.proxy.middle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting middle '+e);
			console.error('Problems setting middle',e);
		}
	};
	this.middle_changed = function () {
		var value = this.middle;
		return value;
	};
	try {
		this.middle = new SFString("MIDDLE");
	} catch (e) {
		console.log('Problems setting middle '+e);
		console.error('Problems setting middle',e);
	}
	this.set_end = function (value) {
		try {
			this.proxy.end = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting end '+e);
			console.error('Problems setting end',e);
		}
	};
	this.end_changed = function () {
		var value = this.end;
		return value;
	};
	try {
		this.end = new SFString("END");
	} catch (e) {
		console.log('Problems setting end '+e);
		console.error('Problems setting end',e);
	}
	this.set_first = function (value) {
		try {
			this.proxy.first = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting first '+e);
			console.error('Problems setting first',e);
		}
	};
	this.first_changed = function () {
		var value = this.first;
		return value;
	};
	try {
		this.first = new SFString("FIRST");
	} catch (e) {
		console.log('Problems setting first '+e);
		console.error('Problems setting first',e);
	}
	this.set_moveUp = function (value) {
		try {
			this.proxy.moveUp = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting moveUp '+e);
			console.error('Problems setting moveUp',e);
		}
	};
	this.moveUp_changed = function () {
		var value = this.moveUp;
		return value;
	};
	try {
		this.moveUp = new SFVec3f(0,4,0);
	} catch (e) {
		console.log('Problems setting moveUp '+e);
		console.error('Problems setting moveUp',e);
	}
	this.set_moveDown = function (value) {
		try {
			this.proxy.moveDown = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting moveDown '+e);
			console.error('Problems setting moveDown',e);
		}
	};
	this.moveDown_changed = function () {
		var value = this.moveDown;
		return value;
	};
	try {
		this.moveDown = new SFVec3f(0,-4,0);
	} catch (e) {
		console.log('Problems setting moveDown '+e);
		console.error('Problems setting moveDown',e);
	}
	this.set_topToBottomTrueMaterial = function (value) {
		try {
			this.proxy.topToBottomTrueMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting topToBottomTrueMaterial '+e);
			console.error('Problems setting topToBottomTrueMaterial',e);
		}
	};
	this.topToBottomTrueMaterial_changed = function () {
		var value = this.topToBottomTrueMaterial;
		return value;
	};
	try {
		this.topToBottomTrueMaterial = X3DJSON.nodeUtil("Scene","TOPTOBOTTOM_trueMATERIAL");
	} catch (e) {
		console.log('Problems setting topToBottomTrueMaterial '+e);
		console.error('Problems setting topToBottomTrueMaterial',e);
	}
	this.set_topToBottomFalseMaterial = function (value) {
		try {
			this.proxy.topToBottomFalseMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting topToBottomFalseMaterial '+e);
			console.error('Problems setting topToBottomFalseMaterial',e);
		}
	};
	this.topToBottomFalseMaterial_changed = function () {
		var value = this.topToBottomFalseMaterial;
		return value;
	};
	try {
		this.topToBottomFalseMaterial = X3DJSON.nodeUtil("Scene","TOPTOBOTTOM_falseMATERIAL");
	} catch (e) {
		console.log('Problems setting topToBottomFalseMaterial '+e);
		console.error('Problems setting topToBottomFalseMaterial',e);
	}
	this.set_leftToRightFalseMaterial = function (value) {
		try {
			this.proxy.leftToRightFalseMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting leftToRightFalseMaterial '+e);
			console.error('Problems setting leftToRightFalseMaterial',e);
		}
	};
	this.leftToRightFalseMaterial_changed = function () {
		var value = this.leftToRightFalseMaterial;
		return value;
	};
	try {
		this.leftToRightFalseMaterial = X3DJSON.nodeUtil("Scene","LEFTTORIGHT_falseMATERIAL");
	} catch (e) {
		console.log('Problems setting leftToRightFalseMaterial '+e);
		console.error('Problems setting leftToRightFalseMaterial',e);
	}
	this.set_leftToRightTrueMaterial = function (value) {
		try {
			this.proxy.leftToRightTrueMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting leftToRightTrueMaterial '+e);
			console.error('Problems setting leftToRightTrueMaterial',e);
		}
	};
	this.leftToRightTrueMaterial_changed = function () {
		var value = this.leftToRightTrueMaterial;
		return value;
	};
	try {
		this.leftToRightTrueMaterial = X3DJSON.nodeUtil("Scene","LEFTTORIGHT_trueMATERIAL");
	} catch (e) {
		console.log('Problems setting leftToRightTrueMaterial '+e);
		console.error('Problems setting leftToRightTrueMaterial',e);
	}
	this.set_horizontalFalseMaterial = function (value) {
		try {
			this.proxy.horizontalFalseMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting horizontalFalseMaterial '+e);
			console.error('Problems setting horizontalFalseMaterial',e);
		}
	};
	this.horizontalFalseMaterial_changed = function () {
		var value = this.horizontalFalseMaterial;
		return value;
	};
	try {
		this.horizontalFalseMaterial = X3DJSON.nodeUtil("Scene","HORIZONTAL_falseMATERIAL");
	} catch (e) {
		console.log('Problems setting horizontalFalseMaterial '+e);
		console.error('Problems setting horizontalFalseMaterial',e);
	}
	this.set_horizontalTrueMaterial = function (value) {
		try {
			this.proxy.horizontalTrueMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting horizontalTrueMaterial '+e);
			console.error('Problems setting horizontalTrueMaterial',e);
		}
	};
	this.horizontalTrueMaterial_changed = function () {
		var value = this.horizontalTrueMaterial;
		return value;
	};
	try {
		this.horizontalTrueMaterial = X3DJSON.nodeUtil("Scene","HORIZONTAL_trueMATERIAL");
	} catch (e) {
		console.log('Problems setting horizontalTrueMaterial '+e);
		console.error('Problems setting horizontalTrueMaterial',e);
	}
	this.set_beginMaterialMinor = function (value) {
		try {
			this.proxy.beginMaterialMinor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting beginMaterialMinor '+e);
			console.error('Problems setting beginMaterialMinor',e);
		}
	};
	this.beginMaterialMinor_changed = function () {
		var value = this.beginMaterialMinor;
		return value;
	};
	try {
		this.beginMaterialMinor = X3DJSON.nodeUtil("Scene","BEGINMATERIAL_MINOR");
	} catch (e) {
		console.log('Problems setting beginMaterialMinor '+e);
		console.error('Problems setting beginMaterialMinor',e);
	}
	this.set_firstMaterialMinor = function (value) {
		try {
			this.proxy.firstMaterialMinor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting firstMaterialMinor '+e);
			console.error('Problems setting firstMaterialMinor',e);
		}
	};
	this.firstMaterialMinor_changed = function () {
		var value = this.firstMaterialMinor;
		return value;
	};
	try {
		this.firstMaterialMinor = X3DJSON.nodeUtil("Scene","FIRSTMATERIAL_MINOR");
	} catch (e) {
		console.log('Problems setting firstMaterialMinor '+e);
		console.error('Problems setting firstMaterialMinor',e);
	}
	this.set_middleMaterialMinor = function (value) {
		try {
			this.proxy.middleMaterialMinor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting middleMaterialMinor '+e);
			console.error('Problems setting middleMaterialMinor',e);
		}
	};
	this.middleMaterialMinor_changed = function () {
		var value = this.middleMaterialMinor;
		return value;
	};
	try {
		this.middleMaterialMinor = X3DJSON.nodeUtil("Scene","MIDDLEMATERIAL_MINOR");
	} catch (e) {
		console.log('Problems setting middleMaterialMinor '+e);
		console.error('Problems setting middleMaterialMinor',e);
	}
	this.set_endMaterialMinor = function (value) {
		try {
			this.proxy.endMaterialMinor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting endMaterialMinor '+e);
			console.error('Problems setting endMaterialMinor',e);
		}
	};
	this.endMaterialMinor_changed = function () {
		var value = this.endMaterialMinor;
		return value;
	};
	try {
		this.endMaterialMinor = X3DJSON.nodeUtil("Scene","ENDMATERIAL_MINOR");
	} catch (e) {
		console.log('Problems setting endMaterialMinor '+e);
		console.error('Problems setting endMaterialMinor',e);
	}
	this.set_beginMaterial = function (value) {
		try {
			this.proxy.beginMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting beginMaterial '+e);
			console.error('Problems setting beginMaterial',e);
		}
	};
	this.beginMaterial_changed = function () {
		var value = this.beginMaterial;
		return value;
	};
	try {
		this.beginMaterial = X3DJSON.nodeUtil("Scene","BEGINMATERIAL");
	} catch (e) {
		console.log('Problems setting beginMaterial '+e);
		console.error('Problems setting beginMaterial',e);
	}
	this.set_firstMaterial = function (value) {
		try {
			this.proxy.firstMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting firstMaterial '+e);
			console.error('Problems setting firstMaterial',e);
		}
	};
	this.firstMaterial_changed = function () {
		var value = this.firstMaterial;
		return value;
	};
	try {
		this.firstMaterial = X3DJSON.nodeUtil("Scene","FIRSTMATERIAL");
	} catch (e) {
		console.log('Problems setting firstMaterial '+e);
		console.error('Problems setting firstMaterial',e);
	}
	this.set_middleMaterial = function (value) {
		try {
			this.proxy.middleMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting middleMaterial '+e);
			console.error('Problems setting middleMaterial',e);
		}
	};
	this.middleMaterial_changed = function () {
		var value = this.middleMaterial;
		return value;
	};
	try {
		this.middleMaterial = X3DJSON.nodeUtil("Scene","MIDDLEMATERIAL");
	} catch (e) {
		console.log('Problems setting middleMaterial '+e);
		console.error('Problems setting middleMaterial',e);
	}
	this.set_endMaterial = function (value) {
		try {
			this.proxy.endMaterial = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting endMaterial '+e);
			console.error('Problems setting endMaterial',e);
		}
	};
	this.endMaterial_changed = function () {
		var value = this.endMaterial;
		return value;
	};
	try {
		this.endMaterial = X3DJSON.nodeUtil("Scene","ENDMATERIAL");
	} catch (e) {
		console.log('Problems setting endMaterial '+e);
		console.error('Problems setting endMaterial',e);
	}
	this.set_topToBottomTrue = function (value) {
		try {
			this.proxy.topToBottomTrue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting topToBottomTrue '+e);
			console.error('Problems setting topToBottomTrue',e);
		}
	};
	this.topToBottomTrue_changed = function () {
		var value = this.topToBottomTrue;
		return value;
	};
	try {
		this.topToBottomTrue = new SFTime();
	} catch (e) {
		console.log('Problems setting topToBottomTrue '+e);
		console.error('Problems setting topToBottomTrue',e);
	}
	this.set_topToBottomFalse = function (value) {
		try {
			this.proxy.topToBottomFalse = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting topToBottomFalse '+e);
			console.error('Problems setting topToBottomFalse',e);
		}
	};
	this.topToBottomFalse_changed = function () {
		var value = this.topToBottomFalse;
		return value;
	};
	try {
		this.topToBottomFalse = new SFTime();
	} catch (e) {
		console.log('Problems setting topToBottomFalse '+e);
		console.error('Problems setting topToBottomFalse',e);
	}
	this.set_leftToRightTrue = function (value) {
		try {
			this.proxy.leftToRightTrue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting leftToRightTrue '+e);
			console.error('Problems setting leftToRightTrue',e);
		}
	};
	this.leftToRightTrue_changed = function () {
		var value = this.leftToRightTrue;
		return value;
	};
	try {
		this.leftToRightTrue = new SFTime();
	} catch (e) {
		console.log('Problems setting leftToRightTrue '+e);
		console.error('Problems setting leftToRightTrue',e);
	}
	this.set_leftToRightFalse = function (value) {
		try {
			this.proxy.leftToRightFalse = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting leftToRightFalse '+e);
			console.error('Problems setting leftToRightFalse',e);
		}
	};
	this.leftToRightFalse_changed = function () {
		var value = this.leftToRightFalse;
		return value;
	};
	try {
		this.leftToRightFalse = new SFTime();
	} catch (e) {
		console.log('Problems setting leftToRightFalse '+e);
		console.error('Problems setting leftToRightFalse',e);
	}
	this.set_horizontalTrue = function (value) {
		try {
			this.proxy.horizontalTrue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting horizontalTrue '+e);
			console.error('Problems setting horizontalTrue',e);
		}
	};
	this.horizontalTrue_changed = function () {
		var value = this.horizontalTrue;
		return value;
	};
	try {
		this.horizontalTrue = new SFTime();
	} catch (e) {
		console.log('Problems setting horizontalTrue '+e);
		console.error('Problems setting horizontalTrue',e);
	}
	this.set_horizontalFalse = function (value) {
		try {
			this.proxy.horizontalFalse = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting horizontalFalse '+e);
			console.error('Problems setting horizontalFalse',e);
		}
	};
	this.horizontalFalse_changed = function () {
		var value = this.horizontalFalse;
		return value;
	};
	try {
		this.horizontalFalse = new SFTime();
	} catch (e) {
		console.log('Problems setting horizontalFalse '+e);
		console.error('Problems setting horizontalFalse',e);
	}
	this.set_justifyMajorBegin = function (value) {
		try {
			this.proxy.justifyMajorBegin = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justifyMajorBegin '+e);
			console.error('Problems setting justifyMajorBegin',e);
		}
	};
	this.justifyMajorBegin_changed = function () {
		var value = this.justifyMajorBegin;
		return value;
	};
	try {
		this.justifyMajorBegin = new SFTime();
	} catch (e) {
		console.log('Problems setting justifyMajorBegin '+e);
		console.error('Problems setting justifyMajorBegin',e);
	}
	this.set_justifyMajorFirst = function (value) {
		try {
			this.proxy.justifyMajorFirst = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justifyMajorFirst '+e);
			console.error('Problems setting justifyMajorFirst',e);
		}
	};
	this.justifyMajorFirst_changed = function () {
		var value = this.justifyMajorFirst;
		return value;
	};
	try {
		this.justifyMajorFirst = new SFTime();
	} catch (e) {
		console.log('Problems setting justifyMajorFirst '+e);
		console.error('Problems setting justifyMajorFirst',e);
	}
	this.set_justifyMajorMiddle = function (value) {
		try {
			this.proxy.justifyMajorMiddle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justifyMajorMiddle '+e);
			console.error('Problems setting justifyMajorMiddle',e);
		}
	};
	this.justifyMajorMiddle_changed = function () {
		var value = this.justifyMajorMiddle;
		return value;
	};
	try {
		this.justifyMajorMiddle = new SFTime();
	} catch (e) {
		console.log('Problems setting justifyMajorMiddle '+e);
		console.error('Problems setting justifyMajorMiddle',e);
	}
	this.set_justifyMajorEnd = function (value) {
		try {
			this.proxy.justifyMajorEnd = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justifyMajorEnd '+e);
			console.error('Problems setting justifyMajorEnd',e);
		}
	};
	this.justifyMajorEnd_changed = function () {
		var value = this.justifyMajorEnd;
		return value;
	};
	try {
		this.justifyMajorEnd = new SFTime();
	} catch (e) {
		console.log('Problems setting justifyMajorEnd '+e);
		console.error('Problems setting justifyMajorEnd',e);
	}
	this.set_justifyMinorBegin = function (value) {
		try {
			this.proxy.justifyMinorBegin = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justifyMinorBegin '+e);
			console.error('Problems setting justifyMinorBegin',e);
		}
	};
	this.justifyMinorBegin_changed = function () {
		var value = this.justifyMinorBegin;
		return value;
	};
	try {
		this.justifyMinorBegin = new SFTime();
	} catch (e) {
		console.log('Problems setting justifyMinorBegin '+e);
		console.error('Problems setting justifyMinorBegin',e);
	}
	this.set_justifyMinorFirst = function (value) {
		try {
			this.proxy.justifyMinorFirst = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justifyMinorFirst '+e);
			console.error('Problems setting justifyMinorFirst',e);
		}
	};
	this.justifyMinorFirst_changed = function () {
		var value = this.justifyMinorFirst;
		return value;
	};
	try {
		this.justifyMinorFirst = new SFTime();
	} catch (e) {
		console.log('Problems setting justifyMinorFirst '+e);
		console.error('Problems setting justifyMinorFirst',e);
	}
	this.set_justifyMinorMiddle = function (value) {
		try {
			this.proxy.justifyMinorMiddle = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justifyMinorMiddle '+e);
			console.error('Problems setting justifyMinorMiddle',e);
		}
	};
	this.justifyMinorMiddle_changed = function () {
		var value = this.justifyMinorMiddle;
		return value;
	};
	try {
		this.justifyMinorMiddle = new SFTime();
	} catch (e) {
		console.log('Problems setting justifyMinorMiddle '+e);
		console.error('Problems setting justifyMinorMiddle',e);
	}
	this.set_justifyMinorEnd = function (value) {
		try {
			this.proxy.justifyMinorEnd = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justifyMinorEnd '+e);
			console.error('Problems setting justifyMinorEnd',e);
		}
	};
	this.justifyMinorEnd_changed = function () {
		var value = this.justifyMinorEnd;
		return value;
	};
	try {
		this.justifyMinorEnd = new SFTime();
	} catch (e) {
		console.log('Problems setting justifyMinorEnd '+e);
		console.error('Problems setting justifyMinorEnd',e);
	}
	this.set_getFile = function (value) {
		try {
			this.proxy.getFile = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting getFile '+e);
			console.error('Problems setting getFile',e);
		}
	};
	this.getFile_changed = function () {
		var value = this.getFile;
		return value;
	};
	try {
		this.getFile = new SFTime();
	} catch (e) {
		console.log('Problems setting getFile '+e);
		console.error('Problems setting getFile',e);
	}
	this.set_justifyMajor = function (value) {
		try {
			this.proxy.justifyMajor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justifyMajor '+e);
			console.error('Problems setting justifyMajor',e);
		}
	};
	this.justifyMajor_changed = function () {
		var value = this.justifyMajor;
		return value;
	};
	try {
		this.justifyMajor = new SFString("BEGIN");
	} catch (e) {
		console.log('Problems setting justifyMajor '+e);
		console.error('Problems setting justifyMajor',e);
	}
	this.set_justifyMinor = function (value) {
		try {
			this.proxy.justifyMinor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting justifyMinor '+e);
			console.error('Problems setting justifyMinor',e);
		}
	};
	this.justifyMinor_changed = function () {
		var value = this.justifyMinor;
		return value;
	};
	try {
		this.justifyMinor = new SFString("FIRST");
	} catch (e) {
		console.log('Problems setting justifyMinor '+e);
		console.error('Problems setting justifyMinor',e);
	}
	this.set_topToBottom = function (value) {
		try {
			this.proxy.topToBottom = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting topToBottom '+e);
			console.error('Problems setting topToBottom',e);
		}
	};
	this.topToBottom_changed = function () {
		var value = this.topToBottom;
		return value;
	};
	try {
		this.topToBottom = new SFString(true);
	} catch (e) {
		console.log('Problems setting topToBottom '+e);
		console.error('Problems setting topToBottom',e);
	}
	this.set_leftToRight = function (value) {
		try {
			this.proxy.leftToRight = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting leftToRight '+e);
			console.error('Problems setting leftToRight',e);
		}
	};
	this.leftToRight_changed = function () {
		var value = this.leftToRight;
		return value;
	};
	try {
		this.leftToRight = new SFString(true);
	} catch (e) {
		console.log('Problems setting leftToRight '+e);
		console.error('Problems setting leftToRight',e);
	}
	this.set_horizontal = function (value) {
		try {
			this.proxy.horizontal = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting horizontal '+e);
			console.error('Problems setting horizontal',e);
		}
	};
	this.horizontal_changed = function () {
		var value = this.horizontal;
		return value;
	};
	try {
		this.horizontal = new SFString(true);
	} catch (e) {
		console.log('Problems setting horizontal '+e);
		console.error('Problems setting horizontal',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].initialize();
    if (X3DJSON.nodeUtil("Scene","TOUCHTOPTOBOTTOM_true")) {
X3DJSON.nodeUtil("Scene","TOUCHTOPTOBOTTOM_true").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].topToBottomTrue(X3DJSON.nodeUtil("Scene","TOUCHTOPTOBOTTOM_true","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].topToBottomTrue(X3DJSON.nodeUtil("Scene","TOUCHTOPTOBOTTOM_true","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHTOPTOBOTTOM_false")) {
X3DJSON.nodeUtil("Scene","TOUCHTOPTOBOTTOM_false").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].topToBottomFalse(X3DJSON.nodeUtil("Scene","TOUCHTOPTOBOTTOM_false","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].topToBottomFalse(X3DJSON.nodeUtil("Scene","TOUCHTOPTOBOTTOM_false","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHLEFTTORIGHT_true")) {
X3DJSON.nodeUtil("Scene","TOUCHLEFTTORIGHT_true").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].leftToRightTrue(X3DJSON.nodeUtil("Scene","TOUCHLEFTTORIGHT_true","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].leftToRightTrue(X3DJSON.nodeUtil("Scene","TOUCHLEFTTORIGHT_true","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHLEFTTORIGHT_false")) {
X3DJSON.nodeUtil("Scene","TOUCHLEFTTORIGHT_false").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].leftToRightFalse(X3DJSON.nodeUtil("Scene","TOUCHLEFTTORIGHT_false","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].leftToRightFalse(X3DJSON.nodeUtil("Scene","TOUCHLEFTTORIGHT_false","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHHORIZONTAL_true")) {
X3DJSON.nodeUtil("Scene","TOUCHHORIZONTAL_true").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].horizontalTrue(X3DJSON.nodeUtil("Scene","TOUCHHORIZONTAL_true","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].horizontalTrue(X3DJSON.nodeUtil("Scene","TOUCHHORIZONTAL_true","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHHORIZONTAL_false")) {
X3DJSON.nodeUtil("Scene","TOUCHHORIZONTAL_false").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].horizontalFalse(X3DJSON.nodeUtil("Scene","TOUCHHORIZONTAL_false","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].horizontalFalse(X3DJSON.nodeUtil("Scene","TOUCHHORIZONTAL_false","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHBEGIN")) {
X3DJSON.nodeUtil("Scene","TOUCHBEGIN").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMajorBegin(X3DJSON.nodeUtil("Scene","TOUCHBEGIN","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMajorBegin(X3DJSON.nodeUtil("Scene","TOUCHBEGIN","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHFIRST")) {
X3DJSON.nodeUtil("Scene","TOUCHFIRST").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMajorFirst(X3DJSON.nodeUtil("Scene","TOUCHFIRST","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMajorFirst(X3DJSON.nodeUtil("Scene","TOUCHFIRST","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHMIDDLE")) {
X3DJSON.nodeUtil("Scene","TOUCHMIDDLE").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMajorMiddle(X3DJSON.nodeUtil("Scene","TOUCHMIDDLE","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMajorMiddle(X3DJSON.nodeUtil("Scene","TOUCHMIDDLE","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHEND")) {
X3DJSON.nodeUtil("Scene","TOUCHEND").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMajorEnd(X3DJSON.nodeUtil("Scene","TOUCHEND","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMajorEnd(X3DJSON.nodeUtil("Scene","TOUCHEND","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHBEGIN_MINOR")) {
X3DJSON.nodeUtil("Scene","TOUCHBEGIN_MINOR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMinorBegin(X3DJSON.nodeUtil("Scene","TOUCHBEGIN_MINOR","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMinorBegin(X3DJSON.nodeUtil("Scene","TOUCHBEGIN_MINOR","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHFIRST_MINOR")) {
X3DJSON.nodeUtil("Scene","TOUCHFIRST_MINOR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMinorFirst(X3DJSON.nodeUtil("Scene","TOUCHFIRST_MINOR","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMinorFirst(X3DJSON.nodeUtil("Scene","TOUCHFIRST_MINOR","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHMIDDLE_MINOR")) {
X3DJSON.nodeUtil("Scene","TOUCHMIDDLE_MINOR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMinorMiddle(X3DJSON.nodeUtil("Scene","TOUCHMIDDLE_MINOR","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMinorMiddle(X3DJSON.nodeUtil("Scene","TOUCHMIDDLE_MINOR","touchTime"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TOUCHEND_MINOR")) {
X3DJSON.nodeUtil("Scene","TOUCHEND_MINOR").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMinorEnd(X3DJSON.nodeUtil("Scene","TOUCHEND_MINOR","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMinorEnd(X3DJSON.nodeUtil("Scene","TOUCHEND_MINOR","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].topToBottomTrue(X3DJSON.nodeUtil("Scene","TOUCHTOPTOBOTTOM_true","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].topToBottomFalse(X3DJSON.nodeUtil("Scene","TOUCHTOPTOBOTTOM_false","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].leftToRightTrue(X3DJSON.nodeUtil("Scene","TOUCHLEFTTORIGHT_true","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].leftToRightFalse(X3DJSON.nodeUtil("Scene","TOUCHLEFTTORIGHT_false","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].horizontalTrue(X3DJSON.nodeUtil("Scene","TOUCHHORIZONTAL_true","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].horizontalFalse(X3DJSON.nodeUtil("Scene","TOUCHHORIZONTAL_false","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMajorBegin(X3DJSON.nodeUtil("Scene","TOUCHBEGIN","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMajorFirst(X3DJSON.nodeUtil("Scene","TOUCHFIRST","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMajorMiddle(X3DJSON.nodeUtil("Scene","TOUCHMIDDLE","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMajorEnd(X3DJSON.nodeUtil("Scene","TOUCHEND","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMinorBegin(X3DJSON.nodeUtil("Scene","TOUCHBEGIN_MINOR","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMinorFirst(X3DJSON.nodeUtil("Scene","TOUCHFIRST_MINOR","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMinorMiddle(X3DJSON.nodeUtil("Scene","TOUCHMIDDLE_MINOR","touchTime"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/ConformanceNist/Appearance/FontStyle/driver.json']['TEXT_SCRIPT'].justifyMinorEnd(X3DJSON.nodeUtil("Scene","TOUCHEND_MINOR","touchTime"), __eventTime);