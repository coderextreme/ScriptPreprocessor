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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE'] = function() {
	this.set_update = function (value) {
		try {
			this.proxy.update = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting update '+e);
			console.error('Problems setting update',e);
		}
	};
	this.update_changed = function () {
		var value = this.update;
		return value;
	};
	try {
		this.update = new SFRotation();
	} catch (e) {
		console.log('Problems setting update '+e);
		console.error('Problems setting update',e);
	}
	this.set_humanoid = function (value) {
		try {
			this.proxy.humanoid = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting humanoid '+e);
			console.error('Problems setting humanoid',e);
		}
	};
	this.humanoid_changed = function () {
		var value = this.humanoid;
		return value;
	};
	try {
		this.humanoid = X3DJSON.nodeUtil("Scene","Boxman_Humanoid");
	} catch (e) {
		console.log('Problems setting humanoid '+e);
		console.error('Problems setting humanoid',e);
	}
	this.set_coordList = function (value) {
		try {
			this.proxy.coordList = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting coordList '+e);
			console.error('Problems setting coordList',e);
		}
	};
	this.coordList_changed = function () {
		var value = this.coordList;
		return value;
	};
	try {
		this.coordList = new MFVec3f();
	} catch (e) {
		console.log('Problems setting coordList '+e);
		console.error('Problems setting coordList',e);
	}
	this.set_joint = function (value) {
		try {
			this.proxy.joint = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting joint '+e);
			console.error('Problems setting joint',e);
		}
	};
	this.joint_changed = function () {
		var value = this.joint;
		return value;
	};
	try {
		this.joint = X3DJSON.nodeUtil("Scene","undefined");
	} catch (e) {
		console.log('Problems setting joint '+e);
		console.error('Problems setting joint',e);
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
		this.translation = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting translation '+e);
		console.error('Problems setting translation',e);
	}
	this.set_rotation = function (value) {
		try {
			this.proxy.rotation = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting rotation '+e);
			console.error('Problems setting rotation',e);
		}
	};
	this.rotation_changed = function () {
		var value = this.rotation;
		return value;
	};
	try {
		this.rotation = new SFRotation(1,0,0,0);
	} catch (e) {
		console.log('Problems setting rotation '+e);
		console.error('Problems setting rotation',e);
	}
	this.set_scale = function (value) {
		try {
			this.proxy.scale = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting scale '+e);
			console.error('Problems setting scale',e);
		}
	};
	this.scale_changed = function () {
		var value = this.scale;
		return value;
	};
	try {
		this.scale = new SFVec3f(1,1,1);
	} catch (e) {
		console.log('Problems setting scale '+e);
		console.error('Problems setting scale',e);
	}


ecmascript:
      // Initialises the script
     
	this.initialize = function () {
         // Copy coord list into local storage
         this.proxy.coordList = X3DJSON.nodeUtil("Scene","Boxman_Humanoid", "skinCoord").point;
      }
      // ;

	this.Transform = function () {
         // Make sure that this is a X3DJSON.nodeUtil("Scene","undefined", "ar") iNumJoints = X3DJSON.nodeUtil("Scene","Boxman_Humanoid", "X3DJSON.nodeUtil("Scene","undefined", "")").length;
         var bIsJoint = false;
         var j;
         for (j=0; (j<iNumJoints) && (bIsJoint==false); j++) {
            if (X3DJSON.nodeUtil("Scene","Boxman_Humanoid", "X3DJSON.nodeUtil("Scene","undefined", "")")[j].name == X3DJSON.nodeUtil("Scene","undefined", "name")) bIsJoint = true;
         }
         // If it is, we process the data
         if (bIsJoint) {
            // Read in current X3DJSON.nodeUtil("Scene","undefined", "ar") currentJoint = X3DJSON.nodeUtil("Scene","undefined", "");
            // Read in current matrix
            var currentMatrix = new VrmlMatrix();
            currentMatrix.setTransform(this.proxy.translation,
                                       this.proxy.rotation,
                                       this.proxy.scale,
                                       new SFRotation(1,0,0,0),
                                       new SFVec3f(0,0,0));
            // Create matrix corresponding to this X3DJSON.nodeUtil("Scene","undefined", "transform")
            var newMatrix = new VrmlMatrix();
            newMatrix.setTransform(currentJoint.proxy.translation,
                                   currentJoint.proxy.rotation,
                                   currentJoint.proxy.scale,
                                   currentJoint.scaleOrientation,
                                   currentJoint.center);
            // Update current matrix with matrix from this X3DJSON.nodeUtil("Scene","undefined", "urrentMatrix",  newMatrix.multRight(currentMatrix));
            // this.Transform all vertices associated with this X3DJSON.nodeUtil("Scene","undefined", "")
//          var iNumAffectedVertices = currentJoint.affectedVertices.length;
            var iNumAffectedVertices = currentJoint.skinCoordIndex.length;
            var v;
            for (v=0; v<iNumAffectedVertices; v++) {
//             var vertex = currentJoint.affectedVertices[v];
//             var weight = currentJoint.vertexWeights[v];
               var vertex = currentJoint.skinCoordIndex[v];
               var weight = currentJoint.skinCoordWeight[v];
               var newVertex = currentMatrix.multVecMatrix(this.proxy.coordList[vertex]).multiply(weight);
               X3DJSON.nodeUtil("Scene","Boxman_Humanoid", "skinCoord").point[vertex] = X3DJSON.nodeUtil("Scene","Boxman_Humanoid", "skinCoord").point[vertex].add(newVertex);
            }
            // this.Transform all children
            var children = currentJoint.children;
            var iNumChildren = children.length;
            var c;
            for (c=0; c<iNumChildren; c++) {
               X3DJSON.nodeUtil("Scene","undefined", "",  children[c]);
               currentMatrix.getTransform(this.proxy.translation,this.proxy.rotation,this.proxy.scale);
               this.Transform();
            }
         }
      }
      //;

	this.update = function (value,time) {
         // Zero output data.
         var iNumVertices = X3DJSON.nodeUtil("Scene","Boxman_Humanoid", "skinCoord").point.length;
         var v;
         for (v=0; v<iNumVertices; v++) {
            X3DJSON.nodeUtil("Scene","Boxman_Humanoid", "skinCoord").point[v].x = 0;
            X3DJSON.nodeUtil("Scene","Boxman_Humanoid", "skinCoord").point[v].y = 0;
            X3DJSON.nodeUtil("Scene","Boxman_Humanoid", "skinCoord").point[v].z = 0;
         }
         // Initialise transform data
         this.proxy.translation = new SFVec3f(0,0,0);
         this.proxy.scale       = new SFVec3f(1,1,1);
         this.proxy.rotation    = new SFRotation(0,0,1,0);
         // First (and only) item in X3DJSON.nodeUtil("Scene","Boxman_Humanoid", "ody") should be the X3DJSON.nodeUtil("Scene","Boxman_Humanoid", "root").
         // This is stored as the X3DJSON.nodeUtil("Scene","undefined", "e") want to do next
         // This could do with being more robust, rather than a'should be ok'.
//       X3DJSON.nodeUtil("Scene","undefined", "",  X3DJSON.nodeUtil("Scene","Boxman_Humanoid", "humanoidBody")[0]);
         X3DJSON.nodeUtil("Scene","undefined", "",  X3DJSON.nodeUtil("Scene","Boxman_Humanoid", "skeleton")[0]);
         // Call transform functino
         this.Transform();
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'] = function() {
	this.set_changeBehaviorToWalk = function (value) {
		try {
			this.proxy.changeBehaviorToWalk = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting changeBehaviorToWalk '+e);
			console.error('Problems setting changeBehaviorToWalk',e);
		}
	};
	this.changeBehaviorToWalk_changed = function () {
		var value = this.changeBehaviorToWalk;
		return value;
	};
	try {
		this.changeBehaviorToWalk = new SFBool();
	} catch (e) {
		console.log('Problems setting changeBehaviorToWalk '+e);
		console.error('Problems setting changeBehaviorToWalk',e);
	}
	this.set_changeBehaviorToRun = function (value) {
		try {
			this.proxy.changeBehaviorToRun = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting changeBehaviorToRun '+e);
			console.error('Problems setting changeBehaviorToRun',e);
		}
	};
	this.changeBehaviorToRun_changed = function () {
		var value = this.changeBehaviorToRun;
		return value;
	};
	try {
		this.changeBehaviorToRun = new SFBool();
	} catch (e) {
		console.log('Problems setting changeBehaviorToRun '+e);
		console.error('Problems setting changeBehaviorToRun',e);
	}
	this.set_changeBehaviorToJump = function (value) {
		try {
			this.proxy.changeBehaviorToJump = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting changeBehaviorToJump '+e);
			console.error('Problems setting changeBehaviorToJump',e);
		}
	};
	this.changeBehaviorToJump_changed = function () {
		var value = this.changeBehaviorToJump;
		return value;
	};
	try {
		this.changeBehaviorToJump = new SFBool();
	} catch (e) {
		console.log('Problems setting changeBehaviorToJump '+e);
		console.error('Problems setting changeBehaviorToJump',e);
	}
	this.set_changeBehaviorToStand = function (value) {
		try {
			this.proxy.changeBehaviorToStand = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting changeBehaviorToStand '+e);
			console.error('Problems setting changeBehaviorToStand',e);
		}
	};
	this.changeBehaviorToStand_changed = function () {
		var value = this.changeBehaviorToStand;
		return value;
	};
	try {
		this.changeBehaviorToStand = new SFBool();
	} catch (e) {
		console.log('Problems setting changeBehaviorToStand '+e);
		console.error('Problems setting changeBehaviorToStand',e);
	}
	this.set_changeBehaviorToKneel = function (value) {
		try {
			this.proxy.changeBehaviorToKneel = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting changeBehaviorToKneel '+e);
			console.error('Problems setting changeBehaviorToKneel',e);
		}
	};
	this.changeBehaviorToKneel_changed = function () {
		var value = this.changeBehaviorToKneel;
		return value;
	};
	try {
		this.changeBehaviorToKneel = new SFBool();
	} catch (e) {
		console.log('Problems setting changeBehaviorToKneel '+e);
		console.error('Problems setting changeBehaviorToKneel',e);
	}
	this.set_switchAvatarToAllen = function (value) {
		try {
			this.proxy.switchAvatarToAllen = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting switchAvatarToAllen '+e);
			console.error('Problems setting switchAvatarToAllen',e);
		}
	};
	this.switchAvatarToAllen_changed = function () {
		var value = this.switchAvatarToAllen;
		return value;
	};
	try {
		this.switchAvatarToAllen = new SFBool();
	} catch (e) {
		console.log('Problems setting switchAvatarToAllen '+e);
		console.error('Problems setting switchAvatarToAllen',e);
	}
	this.set_switchAvatarToNancy = function (value) {
		try {
			this.proxy.switchAvatarToNancy = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting switchAvatarToNancy '+e);
			console.error('Problems setting switchAvatarToNancy',e);
		}
	};
	this.switchAvatarToNancy_changed = function () {
		var value = this.switchAvatarToNancy;
		return value;
	};
	try {
		this.switchAvatarToNancy = new SFBool();
	} catch (e) {
		console.log('Problems setting switchAvatarToNancy '+e);
		console.error('Problems setting switchAvatarToNancy',e);
	}
	this.set_switchAvatarToBoxman = function (value) {
		try {
			this.proxy.switchAvatarToBoxman = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting switchAvatarToBoxman '+e);
			console.error('Problems setting switchAvatarToBoxman',e);
		}
	};
	this.switchAvatarToBoxman_changed = function () {
		var value = this.switchAvatarToBoxman;
		return value;
	};
	try {
		this.switchAvatarToBoxman = new SFBool();
	} catch (e) {
		console.log('Problems setting switchAvatarToBoxman '+e);
		console.error('Problems setting switchAvatarToBoxman',e);
	}
	this.set_NancyJointNodes = function (value) {
		try {
			this.proxy.NancyJointNodes = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting NancyJointNodes '+e);
			console.error('Problems setting NancyJointNodes',e);
		}
	};
	this.NancyJointNodes_changed = function () {
		var value = this.NancyJointNodes;
		return value;
	};
	try {
		this.NancyJointNodes = new MFNode();
	} catch (e) {
		console.log('Problems setting NancyJointNodes '+e);
		console.error('Problems setting NancyJointNodes',e);
	}
	this.set_AllenJointNodes = function (value) {
		try {
			this.proxy.AllenJointNodes = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting AllenJointNodes '+e);
			console.error('Problems setting AllenJointNodes',e);
		}
	};
	this.AllenJointNodes_changed = function () {
		var value = this.AllenJointNodes;
		return value;
	};
	try {
		this.AllenJointNodes = new MFNode();
	} catch (e) {
		console.log('Problems setting AllenJointNodes '+e);
		console.error('Problems setting AllenJointNodes',e);
	}
	this.set_BoxmanJointNodes = function (value) {
		try {
			this.proxy.BoxmanJointNodes = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BoxmanJointNodes '+e);
			console.error('Problems setting BoxmanJointNodes',e);
		}
	};
	this.BoxmanJointNodes_changed = function () {
		var value = this.BoxmanJointNodes;
		return value;
	};
	try {
		this.BoxmanJointNodes = new MFNode();
	} catch (e) {
		console.log('Problems setting BoxmanJointNodes '+e);
		console.error('Problems setting BoxmanJointNodes',e);
	}
	this.set_AvatarChoice = function (value) {
		try {
			this.proxy.AvatarChoice = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting AvatarChoice '+e);
			console.error('Problems setting AvatarChoice',e);
		}
	};
	this.AvatarChoice_changed = function () {
		var value = this.AvatarChoice;
		return value;
	};
	try {
		this.AvatarChoice = new SFInt32();
	} catch (e) {
		console.log('Problems setting AvatarChoice '+e);
		console.error('Problems setting AvatarChoice',e);
	}
	this.set_Behaviors = function (value) {
		try {
			this.proxy.Behaviors = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Behaviors '+e);
			console.error('Problems setting Behaviors',e);
		}
	};
	this.Behaviors_changed = function () {
		var value = this.Behaviors;
		return value;
	};
	try {
		this.Behaviors = new MFNode();
	} catch (e) {
		console.log('Problems setting Behaviors '+e);
		console.error('Problems setting Behaviors',e);
	}


ecmascript:

//Global Variables
var currentAnimatorIndex;
var avatarJoints;
var animatorFields;

	this.initialize = function () {

   //Avatar Joint Names
   avatarJoints = new Array();
   avatarJoints[0] ='humanoid_root';
   avatarJoints[1] ='sacroiliac';
   avatarJoints[2] ='l_hip';
   avatarJoints[3] ='l_knee';
   avatarJoints[4] ='l_ankle';
   avatarJoints[5] ='r_hip';
   avatarJoints[6] ='r_knee';
   avatarJoints[7] ='r_ankle';
   avatarJoints[8] ='skullbase';
   avatarJoints[9] ='l_shoulder';
   avatarJoints[10] ='l_elbow';
   avatarJoints[11] ='l_wrist';
   avatarJoints[12] ='r_shoulder';
   avatarJoints[13] ='r_elbow';
   avatarJoints[14] ='r_wrist';
   avatarJoints[15] ='l_midtarsal';
   avatarJoints[16] ='r_midtarsal';
   avatarJoints[17] ='vl_5';


   //ANIMATOR field names will be used
   //as fromField value of created ROUTES
   animatorFields = new Array();
   for(i = 0; i <= 17; i++) {

      if(avatarJoints[i] =='sacroiliac') {
         animatorFields[i] ='lower_body_rotation_changed';
      }

      else {
	 animatorFields[i] = avatarJoints[i] + '_rotation_changed';
      }
   } //end for loop


   // Current Avatar Choice
   // 0 : Allen
   // 1 : Nancy
   // 2 : Boxman
   this.proxy.AvatarChoice = 0;


   // Current Animator Behavior Index
   // 0 : WALK
   // 1 : RUN
   // 2 : JUMP
   // 3 : STAND
   // 4 : KNEEL
   currentAnimatorIndex = 3; //Initial behavior: KNEEL

   this.createRoutes();

}

;

	this.createRoutes = function () {
   //Add Routes for Allen which is current avatar
   if(this.proxy.AvatarChoice == 0) {

      //Exception routing for humanoid_Root translation
      Browser.addRoute(this.proxy.Behaviors[currentAnimatorIndex], avatarJoints[0] + '_translation_changed', this.proxy.AllenJointNodes[0],'set_translation');

      for(i = 0; i < 15; i++) {

         Browser.addRoute(this.proxy.Behaviors[currentAnimatorIndex], animatorFields[i],this.proxy.AllenJointNodes[i],'set_rotation');
      }

   }

   //Add Routes for Nancy which is current avatar
   if(this.proxy.AvatarChoice == 1) {

      //Exception routing for humanoid_Root translation
      Browser.addRoute(this.proxy.Behaviors[currentAnimatorIndex], avatarJoints[0] + '_translation_changed', this.proxy.NancyJointNodes[0],'set_translation');

      for(i = 0; i < 15; i++) {

         Browser.addRoute(this.proxy.Behaviors[currentAnimatorIndex], animatorFields[i],this.proxy.NancyJointNodes[i],'set_rotation');
      }

   }

   //Add Routes for Boxman which is current avatar
   if(this.proxy.AvatarChoice == 2) {

      //Exception routing for humanoid_Root translation
      Browser.addRoute(this.proxy.Behaviors[currentAnimatorIndex], avatarJoints[0] + '_translation_changed', this.proxy.BoxmanJointNodes[0],'set_translation');
       for(i = 0; i <= 16; i++) {
         if(i != 1) { //no sacroiliac in Boxman
            Browser.addRoute(this.proxy.Behaviors[currentAnimatorIndex], animatorFields[i], this.proxy.BoxmanJointNodes[i],'set_rotation');
         }
      }
    }
}

;

	this.removeRoutes = function () {
   //Remove Routes for Allen which is current avatar
   if(this.proxy.AvatarChoice == 0) {

      //Exception routing for humanoid_Root translation
      Browser.deleteRoute(this.proxy.Behaviors[currentAnimatorIndex], avatarJoints[0] + '_translation_changed', this.proxy.AllenJointNodes[0],'set_translation');

      for(i = 0; i < 15; i++) {
         Browser.deleteRoute(this.proxy.Behaviors[currentAnimatorIndex], animatorFields[i],this.proxy.AllenJointNodes[i],'set_rotation');
      }

   }

   //Remove Routes for Nancy which is current avatar
   if(this.proxy.AvatarChoice == 1) {

      //Exception routing for humanoid_Root translation               
      Browser.deleteRoute(this.proxy.Behaviors[currentAnimatorIndex], avatarJoints[0] + '_translation_changed', this.proxy.NancyJointNodes[0],'set_translation'); 	               

      //Exception routing for humanoid_Root translation
      Browser.deleteRoute(this.proxy.Behaviors[currentAnimatorIndex], avatarJoints[0] + '_translation_changed', this.proxy.NancyJointNodes[0],'set_translation');

      for(i = 0; i < 15; i++) {

         Browser.deleteRoute(this.proxy.Behaviors[currentAnimatorIndex], animatorFields[i],this.proxy.NancyJointNodes[i],'set_rotation');
      }


   }

   //Remove Routes for Boxman which is current avatar
   if(this.proxy.AvatarChoice == 2) {

      //Exception routing for humanoid_Root translation
      Browser.deleteRoute(this.proxy.Behaviors[currentAnimatorIndex], avatarJoints[0] + '_translation_changed', this.proxy.BoxmanJointNodes[0],'set_translation');

      for(i = 0; i < 17; i++) {
         if(i != 1) {
            Browser.deleteRoute(this.proxy.Behaviors[currentAnimatorIndex], animatorFields[i],this.proxy.BoxmanJointNodes[i],'set_rotation');
         }
      }

   }
}


;

	this.switchAvatarToAllen = function (bool, timeStamp) {//Invoked when Allen text is clicked.
   //A control structure to avoid excessive work. If current avatar is Allen, don't do anything.
   if(this.proxy.AvatarChoice != 0) {
      this.removeRoutes();
      this.proxy.AvatarChoice = 0;
      this.createRoutes();

   }
}

;

	this.switchAvatarToNancy = function (bool, timeStamp) {//Invoked when Nancy text is clicked.

   //A control structure to avoid excessive work. If current avatar is Nancy, don't do anything.
   if(this.proxy.AvatarChoice != 1) {
      this.removeRoutes();
      this.proxy.AvatarChoice = 1;
      this.createRoutes();

   }
}

;

	this.switchAvatarToBoxman = function (bool, timeStamp) {//Invoked when Boxman text is clicked.

   //A control structure to avoid excessive work. If current avatar is Boxman, don't do anything.
   if(this.proxy.AvatarChoice != 2) {
      this.removeRoutes();
      this.proxy.AvatarChoice = 2;
      this.createRoutes();

   }
}

;

	this.changeBehaviorToWalk = function (bool, timeStamp) {

   if(currentAnimatorIndex != 0) {
     this.removeRoutes();
     currentAnimatorIndex = 0;
     this.createRoutes();
   }
}
;

	this.changeBehaviorToRun = function (bool, timeStamp) {

   if(currentAnimatorIndex != 1) {
      this.removeRoutes();
      currentAnimatorIndex = 1;
      this.createRoutes();
   }
}


;

	this.changeBehaviorToJump = function (bool, timeStamp) {

   if(currentAnimatorIndex != 2) {
      this.removeRoutes();
      currentAnimatorIndex = 2;
      this.createRoutes();
   }

}

;

	this.changeBehaviorToStand = function (bool, timeStamp) {

   if(currentAnimatorIndex != 3) {
      this.removeRoutes();
      currentAnimatorIndex = 3;
      this.createRoutes();
   }

}
;

	this.changeBehaviorToKneel = function (bool, timeStamp) {

   if(currentAnimatorIndex != 4) {
      this.removeRoutes();
      currentAnimatorIndex = 4;
      this.createRoutes();
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].initialize();
    if (X3DJSON.nodeUtil("Scene","HudProx")) {
X3DJSON.nodeUtil("Scene","HudProx").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","HudProx")) {
X3DJSON.nodeUtil("Scene","HudProx").addEventListener('outputchange', function(event) {
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator']['ACTION']['AvatarChoice'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator']['ACTION']['AvatarChoice'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator']['ACTION']['AvatarChoice'].push(function(property, value) {
		if (property === 'AvatarChoice') {
			X3DJSON.nodeUtil("Scene","AvatarSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].AvatarChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].AvatarChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].AvatarChoice, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","AvatarSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].AvatarChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].AvatarChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].AvatarChoice, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Walk_Touch")) {
X3DJSON.nodeUtil("Scene","Walk_Touch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToWalk(X3DJSON.nodeUtil("Scene","Walk_Touch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToWalk(X3DJSON.nodeUtil("Scene","Walk_Touch","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Run_Touch")) {
X3DJSON.nodeUtil("Scene","Run_Touch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToRun(X3DJSON.nodeUtil("Scene","Run_Touch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToRun(X3DJSON.nodeUtil("Scene","Run_Touch","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Jump_Touch")) {
X3DJSON.nodeUtil("Scene","Jump_Touch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToJump(X3DJSON.nodeUtil("Scene","Jump_Touch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToJump(X3DJSON.nodeUtil("Scene","Jump_Touch","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Stand_Touch")) {
X3DJSON.nodeUtil("Scene","Stand_Touch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToStand(X3DJSON.nodeUtil("Scene","Stand_Touch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToStand(X3DJSON.nodeUtil("Scene","Stand_Touch","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Kneel_Touch")) {
X3DJSON.nodeUtil("Scene","Kneel_Touch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToKneel(X3DJSON.nodeUtil("Scene","Kneel_Touch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToKneel(X3DJSON.nodeUtil("Scene","Kneel_Touch","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Kneel_Touch")) {
X3DJSON.nodeUtil("Scene","Kneel_Touch").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Allen_Touch")) {
X3DJSON.nodeUtil("Scene","Allen_Touch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].switchAvatarToAllen(X3DJSON.nodeUtil("Scene","Allen_Touch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].switchAvatarToAllen(X3DJSON.nodeUtil("Scene","Allen_Touch","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Nancy_Touch")) {
X3DJSON.nodeUtil("Scene","Nancy_Touch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].switchAvatarToNancy(X3DJSON.nodeUtil("Scene","Nancy_Touch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].switchAvatarToNancy(X3DJSON.nodeUtil("Scene","Nancy_Touch","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Boxman_Touch")) {
X3DJSON.nodeUtil("Scene","Boxman_Touch").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].switchAvatarToBoxman(X3DJSON.nodeUtil("Scene","Boxman_Touch","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].switchAvatarToBoxman(X3DJSON.nodeUtil("Scene","Boxman_Touch","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","Boxman_r_elbow")) {
X3DJSON.nodeUtil("Scene","Boxman_r_elbow").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE'].update(X3DJSON.nodeUtil("Scene","Boxman_r_elbow","rotation"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE'].update(X3DJSON.nodeUtil("Scene","Boxman_r_elbow","rotation"), __eventTime);
			X3DJSON.nodeUtil("Scene","AvatarSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].AvatarChoice === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].AvatarChoice() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].AvatarChoice, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToWalk(X3DJSON.nodeUtil("Scene","Walk_Touch","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToRun(X3DJSON.nodeUtil("Scene","Run_Touch","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToJump(X3DJSON.nodeUtil("Scene","Jump_Touch","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToStand(X3DJSON.nodeUtil("Scene","Stand_Touch","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].changeBehaviorToKneel(X3DJSON.nodeUtil("Scene","Kneel_Touch","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].switchAvatarToAllen(X3DJSON.nodeUtil("Scene","Allen_Touch","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].switchAvatarToNancy(X3DJSON.nodeUtil("Scene","Nancy_Touch","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ActorAnimator'].switchAvatarToBoxman(X3DJSON.nodeUtil("Scene","Boxman_Touch","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/HumanoidAnimation/Prototypes/InterchangableActorsViaDynamicRoutingPrototypes.json']['ENGINE'].update(X3DJSON.nodeUtil("Scene","Boxman_r_elbow","rotation"), __eventTime);