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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'] = function() {
	this.set_mShellType = function (value) {
		try {
			this.proxy.mShellType = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mShellType '+e);
			console.error('Problems setting mShellType',e);
		}
	};
	this.mShellType_changed = function () {
		var value = this.mShellType;
		return value;
	};
	try {
		this.mShellType = new SFInt32();
	} catch (e) {
		console.log('Problems setting mShellType '+e);
		console.error('Problems setting mShellType',e);
	}
	this.set_mNumDiv = function (value) {
		try {
			this.proxy.mNumDiv = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mNumDiv '+e);
			console.error('Problems setting mNumDiv',e);
		}
	};
	this.mNumDiv_changed = function () {
		var value = this.mNumDiv;
		return value;
	};
	try {
		this.mNumDiv = new SFInt32();
	} catch (e) {
		console.log('Problems setting mNumDiv '+e);
		console.error('Problems setting mNumDiv',e);
	}
	this.set_mCoord = function (value) {
		try {
			this.proxy.mCoord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mCoord '+e);
			console.error('Problems setting mCoord',e);
		}
	};
	this.mCoord_changed = function () {
		var value = this.mCoord;
		return value;
	};
	try {
		this.mCoord = new SFNode();
	} catch (e) {
		console.log('Problems setting mCoord '+e);
		console.error('Problems setting mCoord',e);
	}
	this.set_mTexCoord = function (value) {
		try {
			this.proxy.mTexCoord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mTexCoord '+e);
			console.error('Problems setting mTexCoord',e);
		}
	};
	this.mTexCoord_changed = function () {
		var value = this.mTexCoord;
		return value;
	};
	try {
		this.mTexCoord = new SFNode();
	} catch (e) {
		console.log('Problems setting mTexCoord '+e);
		console.error('Problems setting mTexCoord',e);
	}
	this.set_mVtxRound = function (value) {
		try {
			this.proxy.mVtxRound = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mVtxRound '+e);
			console.error('Problems setting mVtxRound',e);
		}
	};
	this.mVtxRound_changed = function () {
		var value = this.mVtxRound;
		return value;
	};
	try {
		this.mVtxRound = new MFFloat();
	} catch (e) {
		console.log('Problems setting mVtxRound '+e);
		console.error('Problems setting mVtxRound',e);
	}
	this.set_mEdgeV0 = function (value) {
		try {
			this.proxy.mEdgeV0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mEdgeV0 '+e);
			console.error('Problems setting mEdgeV0',e);
		}
	};
	this.mEdgeV0_changed = function () {
		var value = this.mEdgeV0;
		return value;
	};
	try {
		this.mEdgeV0 = new MFInt32();
	} catch (e) {
		console.log('Problems setting mEdgeV0 '+e);
		console.error('Problems setting mEdgeV0',e);
	}
	this.set_mEdgeV1 = function (value) {
		try {
			this.proxy.mEdgeV1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mEdgeV1 '+e);
			console.error('Problems setting mEdgeV1',e);
		}
	};
	this.mEdgeV1_changed = function () {
		var value = this.mEdgeV1;
		return value;
	};
	try {
		this.mEdgeV1 = new MFInt32();
	} catch (e) {
		console.log('Problems setting mEdgeV1 '+e);
		console.error('Problems setting mEdgeV1',e);
	}
	this.set_mEdgeRound = function (value) {
		try {
			this.proxy.mEdgeRound = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mEdgeRound '+e);
			console.error('Problems setting mEdgeRound',e);
		}
	};
	this.mEdgeRound_changed = function () {
		var value = this.mEdgeRound;
		return value;
	};
	try {
		this.mEdgeRound = new MFFloat();
	} catch (e) {
		console.log('Problems setting mEdgeRound '+e);
		console.error('Problems setting mEdgeRound',e);
	}
	this.set_mEdgeVec0 = function (value) {
		try {
			this.proxy.mEdgeVec0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mEdgeVec0 '+e);
			console.error('Problems setting mEdgeVec0',e);
		}
	};
	this.mEdgeVec0_changed = function () {
		var value = this.mEdgeVec0;
		return value;
	};
	try {
		this.mEdgeVec0 = new MFVec3f();
	} catch (e) {
		console.log('Problems setting mEdgeVec0 '+e);
		console.error('Problems setting mEdgeVec0',e);
	}
	this.set_mEdgeVec1 = function (value) {
		try {
			this.proxy.mEdgeVec1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mEdgeVec1 '+e);
			console.error('Problems setting mEdgeVec1',e);
		}
	};
	this.mEdgeVec1_changed = function () {
		var value = this.mEdgeVec1;
		return value;
	};
	try {
		this.mEdgeVec1 = new MFVec3f();
	} catch (e) {
		console.log('Problems setting mEdgeVec1 '+e);
		console.error('Problems setting mEdgeVec1',e);
	}
	this.set_mFaceCoordIndex = function (value) {
		try {
			this.proxy.mFaceCoordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mFaceCoordIndex '+e);
			console.error('Problems setting mFaceCoordIndex',e);
		}
	};
	this.mFaceCoordIndex_changed = function () {
		var value = this.mFaceCoordIndex;
		return value;
	};
	try {
		this.mFaceCoordIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting mFaceCoordIndex '+e);
		console.error('Problems setting mFaceCoordIndex',e);
	}
	this.set_mFaceTexCoordIndex = function (value) {
		try {
			this.proxy.mFaceTexCoordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mFaceTexCoordIndex '+e);
			console.error('Problems setting mFaceTexCoordIndex',e);
		}
	};
	this.mFaceTexCoordIndex_changed = function () {
		var value = this.mFaceTexCoordIndex;
		return value;
	};
	try {
		this.mFaceTexCoordIndex = new MFInt32();
	} catch (e) {
		console.log('Problems setting mFaceTexCoordIndex '+e);
		console.error('Problems setting mFaceTexCoordIndex',e);
	}
	this.set_mFaceEmpty = function (value) {
		try {
			this.proxy.mFaceEmpty = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mFaceEmpty '+e);
			console.error('Problems setting mFaceEmpty',e);
		}
	};
	this.mFaceEmpty_changed = function () {
		var value = this.mFaceEmpty;
		return value;
	};
	try {
		this.mFaceEmpty = new MFBool();
	} catch (e) {
		console.log('Problems setting mFaceEmpty '+e);
		console.error('Problems setting mFaceEmpty',e);
	}
	this.set_mFaceHidden = function (value) {
		try {
			this.proxy.mFaceHidden = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting mFaceHidden '+e);
			console.error('Problems setting mFaceHidden',e);
		}
	};
	this.mFaceHidden_changed = function () {
		var value = this.mFaceHidden;
		return value;
	};
	try {
		this.mFaceHidden = new MFBool();
	} catch (e) {
		console.log('Problems setting mFaceHidden '+e);
		console.error('Problems setting mFaceHidden',e);
	}
	this.set_coord = function (value) {
		try {
			this.proxy.coord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coord '+e);
			console.error('Problems setting coord',e);
		}
	};
	this.coord_changed = function () {
		var value = this.coord;
		return value;
	};
	try {
		this.coord = undefined;
	} catch (e) {
		console.log('Problems setting coord '+e);
		console.error('Problems setting coord',e);
	}
	this.set_coordIndex = function (value) {
		try {
			this.proxy.coordIndex = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordIndex '+e);
			console.error('Problems setting coordIndex',e);
		}
	};
	this.coordIndex_changed = function () {
		var value = this.coordIndex;
		return value;
	};
	try {
		this.coordIndex = undefined;
	} catch (e) {
		console.log('Problems setting coordIndex '+e);
		console.error('Problems setting coordIndex',e);
	}
	this.set_texCoord = function (value) {
		try {
			this.proxy.texCoord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting texCoord '+e);
			console.error('Problems setting texCoord',e);
		}
	};
	this.texCoord_changed = function () {
		var value = this.texCoord;
		return value;
	};
	try {
		this.texCoord = undefined;
	} catch (e) {
		console.log('Problems setting texCoord '+e);
		console.error('Problems setting texCoord',e);
	}
	this.set_normal = function (value) {
		try {
			this.proxy.normal = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting normal '+e);
			console.error('Problems setting normal',e);
		}
	};
	this.normal_changed = function () {
		var value = this.normal;
		return value;
	};
	try {
		this.normal = undefined;
	} catch (e) {
		console.log('Problems setting normal '+e);
		console.error('Problems setting normal',e);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION']['coord'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION']['coord'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION']['coord'].push(function(property, value) {
		if (property === 'coord') {
			X3DJSON.nodeUtil("Scene","IFS","coord",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coord_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coord_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coord, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","IFS","coord",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coord_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coord_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coord, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION']['coordIndex'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION']['coordIndex'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION']['coordIndex'].push(function(property, value) {
		if (property === 'coordIndex') {
			X3DJSON.nodeUtil("Scene","IFS","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coordIndex, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","IFS","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coordIndex, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION']['texCoord'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION']['texCoord'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION']['texCoord'].push(function(property, value) {
		if (property === 'texCoord') {
			X3DJSON.nodeUtil("Scene","IFS","texCoord",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].texCoord_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].texCoord_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].texCoord, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","IFS","texCoord",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].texCoord_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].texCoord_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].texCoord, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION']['normal'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION']['normal'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript']['ACTION']['normal'].push(function(property, value) {
		if (property === 'normal') {
			X3DJSON.nodeUtil("Scene","IFS","normal",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].normal_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].normal_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].normal, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","IFS","normal",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].normal_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].normal_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].normal, __eventTime);
			X3DJSON.nodeUtil("Scene","IFS","coord",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coord_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coord_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coord, __eventTime);
			X3DJSON.nodeUtil("Scene","IFS","coordIndex",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coordIndex_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coordIndex_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].coordIndex, __eventTime);
			X3DJSON.nodeUtil("Scene","IFS","texCoord",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].texCoord_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].texCoord_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].texCoord, __eventTime);
			X3DJSON.nodeUtil("Scene","IFS","normal",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].normal_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].normal_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/LatticeXvl/XvlShellProtoDeclare.json']['XvlShellScript'].normal, __eventTime);