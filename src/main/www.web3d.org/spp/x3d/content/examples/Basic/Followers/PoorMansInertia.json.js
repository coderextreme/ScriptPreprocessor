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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'] = function() {
	this.set_croneEmissiveColor = function (value) {
		try {
			this.proxy.croneEmissiveColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting croneEmissiveColor '+e);
			console.error('Problems setting croneEmissiveColor',e);
		}
	};
	this.croneEmissiveColor_changed = function () {
		var value = this.croneEmissiveColor;
		return value;
	};
	try {
		this.croneEmissiveColor = new SFColor();
	} catch (e) {
		console.log('Problems setting croneEmissiveColor '+e);
		console.error('Problems setting croneEmissiveColor',e);
	}
	this.set_Color = function (value) {
		try {
			this.proxy.Color = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Color '+e);
			console.error('Problems setting Color',e);
		}
	};
	this.Color_changed = function () {
		var value = this.Color;
		return value;
	};
	try {
		this.Color = undefined;
	} catch (e) {
		console.log('Problems setting Color '+e);
		console.error('Problems setting Color',e);
	}
	this.set_croneDiffuseColor = function (value) {
		try {
			this.proxy.croneDiffuseColor = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting croneDiffuseColor '+e);
			console.error('Problems setting croneDiffuseColor',e);
		}
	};
	this.croneDiffuseColor_changed = function () {
		var value = this.croneDiffuseColor;
		return value;
	};
	try {
		this.croneDiffuseColor = new SFColor();
	} catch (e) {
		console.log('Problems setting croneDiffuseColor '+e);
		console.error('Problems setting croneDiffuseColor',e);
	}


ecmascript:

	this.set_Color = function (Col)
{
    this.proxy.croneDiffuseColor= new  SFColor( Col.r * .7
                                   , Col.g * .7
                                   , Col.b * .7
                                   );
    this.proxy.croneEmissiveColor= new SFColor( Col.r * .3
                                   , Col.g * .3
                                   , Col.b * .3
                                   );
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrEvGridIniter'] = function() {
	this.set_Grid = function (value) {
		try {
			this.proxy.Grid = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Grid '+e);
			console.error('Problems setting Grid',e);
		}
	};
	this.Grid_changed = function () {
		var value = this.Grid;
		return value;
	};
	try {
		this.Grid = X3DJSON.nodeUtil("Scene","EvGridGround");
	} catch (e) {
		console.log('Problems setting Grid '+e);
		console.error('Problems setting Grid',e);
	}


ecmascript:

	this.sin0 = function (x)
{
return Math.sin(x * 6.28318530717959); // We don't use 2*Math.PI in the hope it will increase performance.
}
;

	this.cos0 = function (x)
{
return Math.cos(x * 6.28318530717959); // We don't use 2*Math.PI in the hope it will increase performance.
}
;

	this.initialize = function ()
{
    var Heights= new MFFloat;
    Heights.length= X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension") * X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension");

    var ZFrom= -X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension")*X3DJSON.nodeUtil("Scene","EvGridGround", "zSpacing")/2;
    var ZTo=    X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension")*X3DJSON.nodeUtil("Scene","EvGridGround", "zSpacing")/2 - X3DJSON.nodeUtil("Scene","EvGridGround", "zSpacing") * .1;
    var ZStep=  X3DJSON.nodeUtil("Scene","EvGridGround", "zSpacing");
    var XFrom= -X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension")*X3DJSON.nodeUtil("Scene","EvGridGround", "xSpacing")/2;
    var XTo=    X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension")*X3DJSON.nodeUtil("Scene","EvGridGround", "xSpacing")/2 - X3DJSON.nodeUtil("Scene","EvGridGround", "xSpacing") * .1;
    var XStep=  X3DJSON.nodeUtil("Scene","EvGridGround", "xSpacing");

//        ZFrom+= X3DJSON.nodeUtil("Scene","EvGridGround", "zSpacing");
//        ZTo-=   X3DJSON.nodeUtil("Scene","EvGridGround", "zSpacing");
//        XFrom+= X3DJSON.nodeUtil("Scene","EvGridGround", "xSpacing");
//        XTo-=   X3DJSON.nodeUtil("Scene","EvGridGround", "xSpacing");

    var Idx= 0;

//        Idx+= 1 + X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension") * 1;

    for(var Z= ZFrom; Z<=ZTo; Z+= ZStep)
    {
        for(var X= XFrom; X<=XTo; X+= XStep)
        {
            var s= 9;

            var H= .7*( this.cos0(Z*s / 30) + this.cos0(X*s / 35 + X*X*s*s / 34) + this.sin0(X*Z*s / 40));
            H+= this.cos0(Math.sqrt(X*X + Z*Z) / 300) * 15;
            Heights[Idx++]= H;
        }
//            Idx+= 2;
    }

    X3DJSON.nodeUtil("Scene","EvGridGround", "height",  Heights);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrEvGridIniter'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrEvGridIniter']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrEvGridIniter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrEvGridIniter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrEvGridIniter']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrEvGridIniter']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrEvGridIniter'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrEvGridIniter']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrEvGridIniter']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrEvGridIniter'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrEvGridIniter'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTreeHightIniter'] = function() {
	this.set_TreeGroup = function (value) {
		try {
			this.proxy.TreeGroup = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting TreeGroup '+e);
			console.error('Problems setting TreeGroup',e);
		}
	};
	this.TreeGroup_changed = function () {
		var value = this.TreeGroup;
		return value;
	};
	try {
		this.TreeGroup = X3DJSON.nodeUtil("Scene","GrTrees");
	} catch (e) {
		console.log('Problems setting TreeGroup '+e);
		console.error('Problems setting TreeGroup',e);
	}
	this.set_GroundTrans = function (value) {
		try {
			this.proxy.GroundTrans = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting GroundTrans '+e);
			console.error('Problems setting GroundTrans',e);
		}
	};
	this.GroundTrans_changed = function () {
		var value = this.GroundTrans;
		return value;
	};
	try {
		this.GroundTrans = X3DJSON.nodeUtil("Scene","TrGround");
	} catch (e) {
		console.log('Problems setting GroundTrans '+e);
		console.error('Problems setting GroundTrans',e);
	}
	this.set_GroundGrid = function (value) {
		try {
			this.proxy.GroundGrid = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting GroundGrid '+e);
			console.error('Problems setting GroundGrid',e);
		}
	};
	this.GroundGrid_changed = function () {
		var value = this.GroundGrid;
		return value;
	};
	try {
		this.GroundGrid = X3DJSON.nodeUtil("Scene","EvGridGround");
	} catch (e) {
		console.log('Problems setting GroundGrid '+e);
		console.error('Problems setting GroundGrid',e);
	}
	this.set_Trees = function (value) {
		try {
			this.proxy.Trees = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Trees '+e);
			console.error('Problems setting Trees',e);
		}
	};
	this.Trees_changed = function () {
		var value = this.Trees;
		return value;
	};
	try {
		this.Trees = new MFNode();
	} catch (e) {
		console.log('Problems setting Trees '+e);
		console.error('Problems setting Trees',e);
	}


ecmascript:

	this.initialize = function ()
{
    this.proxy.Trees= X3DJSON.nodeUtil("Scene","GrTrees", "children");

    for(var C= 0; C<this.proxy.Trees.length; C++ )
        this.proxy.Trees[C].position= this.AddGroundHeight(this.proxy.Trees[C].position);
}

// recei;

	this.AddGroundHeight = function (Vec)
{
    var PosOnGrid= Vec.subtract(X3DJSON.nodeUtil("Scene","TrGround", "translation"));

    var FloatIdxX= PosOnGrid.x / X3DJSON.nodeUtil("Scene","EvGridGround", "xSpacing");
    var FloatIdxZ= PosOnGrid.z / X3DJSON.nodeUtil("Scene","EvGridGround", "zSpacing");

    var FracX= FloatIdxX - Math.floor(FloatIdxX);
    var FracZ= FloatIdxZ - Math.floor(FloatIdxZ);


    // We do linear interpolation in the square we have.

    var IdxLowerX= Math.floor(FloatIdxX);
    var IdxLowerZ= Math.floor(FloatIdxZ);
    var IdxHigherX= IdxLowerX + 1;
    var IdxHigherZ= IdxLowerZ + 1;

    if(IdxLowerX  < 0) IdxLowerX= 0;
    if(IdxLowerZ  < 0) IdxLowerZ= 0;
    if(IdxHigherX < 0) IdxHigherX= 0;
    if(IdxHigherZ < 0) IdxHigherZ= 0;
    if(IdxLowerX  >= X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension")) IdxLowerX=  X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension") - 1;
    if(IdxHigherX >= X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension")) IdxHigherX= X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension") - 1;
    if(IdxLowerZ  >= X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension")) IdxLowerZ=  X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension") - 1;
    if(IdxHigherZ >= X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension")) IdxHigherZ= X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension") - 1;

    var LowerXHeight=  this.GetGroundGridHeightAt(IdxLowerX,  IdxLowerZ) * (1 - FracZ) + this.GetGroundGridHeightAt(IdxLowerX,  IdxHigherZ) * FracZ;
    var HigherXHeight= this.GetGroundGridHeightAt(IdxHigherX, IdxLowerZ) * (1 - FracZ) + this.GetGroundGridHeightAt(IdxHigherX, IdxHigherZ) * FracZ;

    var Height= LowerXHeight * (1 - FracX) + HigherXHeight * FracX;

    return new SFVec3f(Vec.x, Vec.y + Height, Vec.z);
}
;

	this.GetGroundGridHeightAt = function (IdxX, IdxZ)
{
    return X3DJSON.nodeUtil("Scene","EvGridGround", "height")[IdxX + IdxZ * X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension")];
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTreeHightIniter'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTreeHightIniter']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTreeHightIniter'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTreeHightIniter'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTreeHightIniter']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTreeHightIniter']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTreeHightIniter'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTreeHightIniter']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTreeHightIniter']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTreeHightIniter'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTreeHightIniter'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'] = function() {
	this.set_hitCoord = function (value) {
		try {
			this.proxy.hitCoord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting hitCoord '+e);
			console.error('Problems setting hitCoord',e);
		}
	};
	this.hitCoord_changed = function () {
		var value = this.hitCoord;
		return value;
	};
	try {
		this.hitCoord = new SFVec2f(0,0);
	} catch (e) {
		console.log('Problems setting hitCoord '+e);
		console.error('Problems setting hitCoord',e);
	}
	this.set_userInput = function (value) {
		try {
			this.proxy.userInput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting userInput '+e);
			console.error('Problems setting userInput',e);
		}
	};
	this.userInput_changed = function () {
		var value = this.userInput;
		return value;
	};
	try {
		this.userInput = new SFVec2f();
	} catch (e) {
		console.log('Problems setting userInput '+e);
		console.error('Problems setting userInput',e);
	}
	this.set_hitCoord = function (value) {
		try {
			this.proxy.hitCoord = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting hitCoord '+e);
			console.error('Problems setting hitCoord',e);
		}
	};
	this.hitCoord_changed = function () {
		var value = this.hitCoord;
		return value;
	};
	try {
		this.hitCoord = new SFVec2f(0,0);
	} catch (e) {
		console.log('Problems setting hitCoord '+e);
		console.error('Problems setting hitCoord',e);
	}
	this.set_activated = function (value) {
		try {
			this.proxy.activated = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting activated '+e);
			console.error('Problems setting activated',e);
		}
	};
	this.activated_changed = function () {
		var value = this.activated;
		return value;
	};
	try {
		this.activated = undefined;
	} catch (e) {
		console.log('Problems setting activated '+e);
		console.error('Problems setting activated',e);
	}
	this.set_cScale = function (value) {
		try {
			this.proxy.cScale = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cScale '+e);
			console.error('Problems setting cScale',e);
		}
	};
	this.cScale_changed = function () {
		var value = this.cScale;
		return value;
	};
	try {
		this.cScale = new SFFloat(20);
	} catch (e) {
		console.log('Problems setting cScale '+e);
		console.error('Problems setting cScale',e);
	}
	this.set_ActivationCoords = function (value) {
		try {
			this.proxy.ActivationCoords = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ActivationCoords '+e);
			console.error('Problems setting ActivationCoords',e);
		}
	};
	this.ActivationCoords_changed = function () {
		var value = this.ActivationCoords;
		return value;
	};
	try {
		this.ActivationCoords = new SFVec2f(0,0);
	} catch (e) {
		console.log('Problems setting ActivationCoords '+e);
		console.error('Problems setting ActivationCoords',e);
	}
	this.set_SensIsActive = function (value) {
		try {
			this.proxy.SensIsActive = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SensIsActive '+e);
			console.error('Problems setting SensIsActive',e);
		}
	};
	this.SensIsActive_changed = function () {
		var value = this.SensIsActive;
		return value;
	};
	try {
		this.SensIsActive = new SFBool(false);
	} catch (e) {
		console.log('Problems setting SensIsActive '+e);
		console.error('Problems setting SensIsActive',e);
	}


ecmascript:

	this.set_hitCoord = function (C)
{
    this.proxy.hitCoord= C;

    if(this.proxy.SensIsActive)
    {
        this.proxy.userInput= C.subtract(this.proxy.ActivationCoords).multiply(this.proxy.cScale);
    }
}
;

	this.set_activated = function (a)
{
    this.proxy.SensIsActive= a;
    if(a)
        this.proxy.ActivationCoords= this.proxy.hitCoord;
    else
        this.proxy.userInput= new SFVec2f(0, 0);

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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] = function() {
	this.set_Tick = function (value) {
		try {
			this.proxy.Tick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting Tick '+e);
			console.error('Problems setting Tick',e);
		}
	};
	this.Tick_changed = function () {
		var value = this.Tick;
		return value;
	};
	try {
		this.Tick = new SFTime();
	} catch (e) {
		console.log('Problems setting Tick '+e);
		console.error('Problems setting Tick',e);
	}
	this.set_GroundTrans = function (value) {
		try {
			this.proxy.GroundTrans = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting GroundTrans '+e);
			console.error('Problems setting GroundTrans',e);
		}
	};
	this.GroundTrans_changed = function () {
		var value = this.GroundTrans;
		return value;
	};
	try {
		this.GroundTrans = X3DJSON.nodeUtil("Scene","TrGround");
	} catch (e) {
		console.log('Problems setting GroundTrans '+e);
		console.error('Problems setting GroundTrans',e);
	}
	this.set_cInputNominalY = function (value) {
		try {
			this.proxy.cInputNominalY = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cInputNominalY '+e);
			console.error('Problems setting cInputNominalY',e);
		}
	};
	this.cInputNominalY_changed = function () {
		var value = this.cInputNominalY;
		return value;
	};
	try {
		this.cInputNominalY = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting cInputNominalY '+e);
		console.error('Problems setting cInputNominalY',e);
	}
	this.set_cNominalMoveSpeed = function (value) {
		try {
			this.proxy.cNominalMoveSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cNominalMoveSpeed '+e);
			console.error('Problems setting cNominalMoveSpeed',e);
		}
	};
	this.cNominalMoveSpeed_changed = function () {
		var value = this.cNominalMoveSpeed;
		return value;
	};
	try {
		this.cNominalMoveSpeed = new SFFloat(15);
	} catch (e) {
		console.log('Problems setting cNominalMoveSpeed '+e);
		console.error('Problems setting cNominalMoveSpeed',e);
	}
	this.set_cInputNominalX = function (value) {
		try {
			this.proxy.cInputNominalX = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cInputNominalX '+e);
			console.error('Problems setting cInputNominalX',e);
		}
	};
	this.cInputNominalX_changed = function () {
		var value = this.cInputNominalX;
		return value;
	};
	try {
		this.cInputNominalX = new SFFloat(1);
	} catch (e) {
		console.log('Problems setting cInputNominalX '+e);
		console.error('Problems setting cInputNominalX',e);
	}
	this.set_ObjectOri = function (value) {
		try {
			this.proxy.ObjectOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ObjectOri '+e);
			console.error('Problems setting ObjectOri',e);
		}
	};
	this.ObjectOri_changed = function () {
		var value = this.ObjectOri;
		return value;
	};
	try {
		this.ObjectOri = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting ObjectOri '+e);
		console.error('Problems setting ObjectOri',e);
	}
	this.set_objectOri = function (value) {
		try {
			this.proxy.objectOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting objectOri '+e);
			console.error('Problems setting objectOri',e);
		}
	};
	this.objectOri_changed = function () {
		var value = this.objectOri;
		return value;
	};
	try {
		this.objectOri = undefined;
	} catch (e) {
		console.log('Problems setting objectOri '+e);
		console.error('Problems setting objectOri',e);
	}
	this.set_cNominalOriSpeed = function (value) {
		try {
			this.proxy.cNominalOriSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cNominalOriSpeed '+e);
			console.error('Problems setting cNominalOriSpeed',e);
		}
	};
	this.cNominalOriSpeed_changed = function () {
		var value = this.cNominalOriSpeed;
		return value;
	};
	try {
		this.cNominalOriSpeed = new SFFloat(1.2);
	} catch (e) {
		console.log('Problems setting cNominalOriSpeed '+e);
		console.error('Problems setting cNominalOriSpeed',e);
	}
	this.set_MoveSpeed = function (value) {
		try {
			this.proxy.MoveSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting MoveSpeed '+e);
			console.error('Problems setting MoveSpeed',e);
		}
	};
	this.MoveSpeed_changed = function () {
		var value = this.MoveSpeed;
		return value;
	};
	try {
		this.MoveSpeed = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting MoveSpeed '+e);
		console.error('Problems setting MoveSpeed',e);
	}
	this.set_ObjectPos = function (value) {
		try {
			this.proxy.ObjectPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ObjectPos '+e);
			console.error('Problems setting ObjectPos',e);
		}
	};
	this.ObjectPos_changed = function () {
		var value = this.ObjectPos;
		return value;
	};
	try {
		this.ObjectPos = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting ObjectPos '+e);
		console.error('Problems setting ObjectPos',e);
	}
	this.set_lastTick = function (value) {
		try {
			this.proxy.lastTick = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lastTick '+e);
			console.error('Problems setting lastTick',e);
		}
	};
	this.lastTick_changed = function () {
		var value = this.lastTick;
		return value;
	};
	try {
		this.lastTick = new SFTime(0);
	} catch (e) {
		console.log('Problems setting lastTick '+e);
		console.error('Problems setting lastTick',e);
	}
	this.set_userInput = function (value) {
		try {
			this.proxy.userInput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting userInput '+e);
			console.error('Problems setting userInput',e);
		}
	};
	this.userInput_changed = function () {
		var value = this.userInput;
		return value;
	};
	try {
		this.userInput = new SFVec2f();
	} catch (e) {
		console.log('Problems setting userInput '+e);
		console.error('Problems setting userInput',e);
	}
	this.set_initial_objectOri = function (value) {
		try {
			this.proxy.initial_objectOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_objectOri '+e);
			console.error('Problems setting initial_objectOri',e);
		}
	};
	this.initial_objectOri_changed = function () {
		var value = this.initial_objectOri;
		return value;
	};
	try {
		this.initial_objectOri = new SFRotation(0.02,-0.999,0.027,2.08);
	} catch (e) {
		console.log('Problems setting initial_objectOri '+e);
		console.error('Problems setting initial_objectOri',e);
	}
	this.set_GroundGrid = function (value) {
		try {
			this.proxy.GroundGrid = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting GroundGrid '+e);
			console.error('Problems setting GroundGrid',e);
		}
	};
	this.GroundGrid_changed = function () {
		var value = this.GroundGrid;
		return value;
	};
	try {
		this.GroundGrid = X3DJSON.nodeUtil("Scene","EvGridGround");
	} catch (e) {
		console.log('Problems setting GroundGrid '+e);
		console.error('Problems setting GroundGrid',e);
	}
	this.set_objectPos = function (value) {
		try {
			this.proxy.objectPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting objectPos '+e);
			console.error('Problems setting objectPos',e);
		}
	};
	this.objectPos_changed = function () {
		var value = this.objectPos;
		return value;
	};
	try {
		this.objectPos = undefined;
	} catch (e) {
		console.log('Problems setting objectPos '+e);
		console.error('Problems setting objectPos',e);
	}
	this.set_lastUserInput = function (value) {
		try {
			this.proxy.lastUserInput = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lastUserInput '+e);
			console.error('Problems setting lastUserInput',e);
		}
	};
	this.lastUserInput_changed = function () {
		var value = this.lastUserInput;
		return value;
	};
	try {
		this.lastUserInput = new SFVec2f(0,0);
	} catch (e) {
		console.log('Problems setting lastUserInput '+e);
		console.error('Problems setting lastUserInput',e);
	}
	this.set_initial_objectPos = function (value) {
		try {
			this.proxy.initial_objectPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting initial_objectPos '+e);
			console.error('Problems setting initial_objectPos',e);
		}
	};
	this.initial_objectPos_changed = function () {
		var value = this.initial_objectPos;
		return value;
	};
	try {
		this.initial_objectPos = new SFVec3f(-37.577,1.65,-83.856);
	} catch (e) {
		console.log('Problems setting initial_objectPos '+e);
		console.error('Problems setting initial_objectPos',e);
	}
	this.set_OriSpeed = function (value) {
		try {
			this.proxy.OriSpeed = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting OriSpeed '+e);
			console.error('Problems setting OriSpeed',e);
		}
	};
	this.OriSpeed_changed = function () {
		var value = this.OriSpeed;
		return value;
	};
	try {
		this.OriSpeed = new SFFloat(0);
	} catch (e) {
		console.log('Problems setting OriSpeed '+e);
		console.error('Problems setting OriSpeed',e);
	}


ecmascript:

	this.NonLin = function (x)
{
    var cAmount= .3;
    var cBmount= 1 - cAmount;
    return (x * x * (x>0? 1:-1)) * cAmount + (x) * cBmount; // TBD: Some exponential functino would be better.
}
;

	this.userInput = function (inp)
{
    this.proxy.lastUserInput= inp;

    this.ProcessMoveInput(inp.y);
    this.ProcessRotateInput(inp.x);
}
;

	this.ProcessMoveInput = function (inp)
{
    this.proxy.MoveSpeed= this.NonLin(inp / this.proxy.cInputNominalX) * this.proxy.cNominalMoveSpeed;
}
;

	this.ProcessRotateInput = function (inp)
{
    this.proxy.OriSpeed=  this.NonLin(inp / this.proxy.cInputNominalY) * this.proxy.cNominalOriSpeed;
}
;

	this.Tick = function (Now)
{
    if(!this.proxy.lastTick)
    {
        this.proxy.lastTick= Now;
        return;
    }

    var DeltaT= Now - this.proxy.lastTick;
    this.proxy.lastTick= Now;

    if(this.proxy.OriSpeed || this.proxy.MoveSpeed)
    {
        this.proxy.ObjectOri= this.proxy.ObjectOri.multiply(new SFRotation(0, 1, 0, -this.proxy.OriSpeed * DeltaT));
        this.proxy.ObjectPos= this.proxy.ObjectPos.add(this.proxy.ObjectOri.multVec(new SFVec3f(0, 0, -this.proxy.MoveSpeed * DeltaT)));

        this.proxy.objectPos_changed= this.AddGroundHeight(this.proxy.ObjectPos);
        this.proxy.objectOri_changed=                 this.proxy.ObjectOri;
    }
}
// ;

	this.AddGroundHeight = function (Vec)
{
    var PosOnGrid= Vec.subtract(X3DJSON.nodeUtil("Scene","TrGround", "translation"));

    var FloatIdxX= PosOnGrid.x / X3DJSON.nodeUtil("Scene","EvGridGround", "xSpacing");
    var FloatIdxZ= PosOnGrid.z / X3DJSON.nodeUtil("Scene","EvGridGround", "zSpacing");

    var FracX= FloatIdxX - Math.floor(FloatIdxX);
    var FracZ= FloatIdxZ - Math.floor(FloatIdxZ);


    // We do linear interpolation in the square we have.

    var IdxLowerX= Math.floor(FloatIdxX);
    var IdxLowerZ= Math.floor(FloatIdxZ);
    var IdxHigherX= IdxLowerX + 1;
    var IdxHigherZ= IdxLowerZ + 1;

    if(IdxLowerX  < 0) IdxLowerX= 0;
    if(IdxLowerZ  < 0) IdxLowerZ= 0;
    if(IdxHigherX < 0) IdxHigherX= 0;
    if(IdxHigherZ < 0) IdxHigherZ= 0;
    if(IdxLowerX  >= X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension")) IdxLowerX=  X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension") - 1;
    if(IdxHigherX >= X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension")) IdxHigherX= X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension") - 1;
    if(IdxLowerZ  >= X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension")) IdxLowerZ=  X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension") - 1;
    if(IdxHigherZ >= X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension")) IdxHigherZ= X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension") - 1;

    var LowerXHeight=  this.GetGroundGridHeightAt(IdxLowerX,  IdxLowerZ) * (1 - FracZ) + this.GetGroundGridHeightAt(IdxLowerX,  IdxHigherZ) * FracZ;
    var HigherXHeight= this.GetGroundGridHeightAt(IdxHigherX, IdxLowerZ) * (1 - FracZ) + this.GetGroundGridHeightAt(IdxHigherX, IdxHigherZ) * FracZ;

    var Height= LowerXHeight * (1 - FracX) + HigherXHeight * FracX;

    return new SFVec3f(Vec.x, Vec.y + Height, Vec.z);
}
;

	this.GetGroundGridHeightAt = function (IdxX, IdxZ)
{
    return X3DJSON.nodeUtil("Scene","EvGridGround", "height")[IdxX + IdxZ * X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension")];
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] = function() {
	this.set_avatarPos = function (value) {
		try {
			this.proxy.avatarPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting avatarPos '+e);
			console.error('Problems setting avatarPos',e);
		}
	};
	this.avatarPos_changed = function () {
		var value = this.avatarPos;
		return value;
	};
	try {
		this.avatarPos = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting avatarPos '+e);
		console.error('Problems setting avatarPos',e);
	}
	this.set_cCameraOffsetPos = function (value) {
		try {
			this.proxy.cCameraOffsetPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cCameraOffsetPos '+e);
			console.error('Problems setting cCameraOffsetPos',e);
		}
	};
	this.cCameraOffsetPos_changed = function () {
		var value = this.cCameraOffsetPos;
		return value;
	};
	try {
		this.cCameraOffsetPos = new SFVec3f(0,4,5);
	} catch (e) {
		console.log('Problems setting cCameraOffsetPos '+e);
		console.error('Problems setting cCameraOffsetPos',e);
	}
	this.set_avatarPos = function (value) {
		try {
			this.proxy.avatarPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting avatarPos '+e);
			console.error('Problems setting avatarPos',e);
		}
	};
	this.avatarPos_changed = function () {
		var value = this.avatarPos;
		return value;
	};
	try {
		this.avatarPos = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting avatarPos '+e);
		console.error('Problems setting avatarPos',e);
	}
	this.set_avatarOri = function (value) {
		try {
			this.proxy.avatarOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting avatarOri '+e);
			console.error('Problems setting avatarOri',e);
		}
	};
	this.avatarOri_changed = function () {
		var value = this.avatarOri;
		return value;
	};
	try {
		this.avatarOri = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting avatarOri '+e);
		console.error('Problems setting avatarOri',e);
	}
	this.set_cCameraOffsetOri = function (value) {
		try {
			this.proxy.cCameraOffsetOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting cCameraOffsetOri '+e);
			console.error('Problems setting cCameraOffsetOri',e);
		}
	};
	this.cCameraOffsetOri_changed = function () {
		var value = this.cCameraOffsetOri;
		return value;
	};
	try {
		this.cCameraOffsetOri = new SFRotation(1,0,0,-0.2);
	} catch (e) {
		console.log('Problems setting cCameraOffsetOri '+e);
		console.error('Problems setting cCameraOffsetOri',e);
	}
	this.set_viewPos = function (value) {
		try {
			this.proxy.viewPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting viewPos '+e);
			console.error('Problems setting viewPos',e);
		}
	};
	this.viewPos_changed = function () {
		var value = this.viewPos;
		return value;
	};
	try {
		this.viewPos = undefined;
	} catch (e) {
		console.log('Problems setting viewPos '+e);
		console.error('Problems setting viewPos',e);
	}
	this.set_avatarOri = function (value) {
		try {
			this.proxy.avatarOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting avatarOri '+e);
			console.error('Problems setting avatarOri',e);
		}
	};
	this.avatarOri_changed = function () {
		var value = this.avatarOri;
		return value;
	};
	try {
		this.avatarOri = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting avatarOri '+e);
		console.error('Problems setting avatarOri',e);
	}
	this.set_viewOri = function (value) {
		try {
			this.proxy.viewOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting viewOri '+e);
			console.error('Problems setting viewOri',e);
		}
	};
	this.viewOri_changed = function () {
		var value = this.viewOri;
		return value;
	};
	try {
		this.viewOri = undefined;
	} catch (e) {
		console.log('Problems setting viewOri '+e);
		console.error('Problems setting viewOri',e);
	}


ecmascript:

	this.set_avatarPos = function (Pos)
{
    this.proxy.avatarPos= Pos;
    this.Update();
}
;

	this.set_avatarOri = function (Ori)
{
    this.proxy.avatarOri= Ori;
    this.Update();
}
;

	this.Update = function ()
{
    var viewPos= this.proxy.avatarPos.add(this.proxy.avatarOri.multVec(this.proxy.cCameraOffsetPos));
    var viewOri= this.proxy.cCameraOffsetOri.multiply(this.proxy.avatarOri);

    if( this.proxy.viewPos_changed != viewPos)
        this.proxy.viewPos_changed=   viewPos;

    if( this.proxy.viewOri_changed != viewOri)
        this.proxy.viewOri_changed=   viewOri;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] = function() {
	this.set_ShadowPos = function (value) {
		try {
			this.proxy.ShadowPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ShadowPos '+e);
			console.error('Problems setting ShadowPos',e);
		}
	};
	this.ShadowPos_changed = function () {
		var value = this.ShadowPos;
		return value;
	};
	try {
		this.ShadowPos = undefined;
	} catch (e) {
		console.log('Problems setting ShadowPos '+e);
		console.error('Problems setting ShadowPos',e);
	}
	this.set_MonkeyPos = function (value) {
		try {
			this.proxy.MonkeyPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting MonkeyPos '+e);
			console.error('Problems setting MonkeyPos',e);
		}
	};
	this.MonkeyPos_changed = function () {
		var value = this.MonkeyPos;
		return value;
	};
	try {
		this.MonkeyPos = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting MonkeyPos '+e);
		console.error('Problems setting MonkeyPos',e);
	}
	this.set_ShadowOri = function (value) {
		try {
			this.proxy.ShadowOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting ShadowOri '+e);
			console.error('Problems setting ShadowOri',e);
		}
	};
	this.ShadowOri_changed = function () {
		var value = this.ShadowOri;
		return value;
	};
	try {
		this.ShadowOri = undefined;
	} catch (e) {
		console.log('Problems setting ShadowOri '+e);
		console.error('Problems setting ShadowOri',e);
	}
	this.set_MonkeyPos = function (value) {
		try {
			this.proxy.MonkeyPos = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting MonkeyPos '+e);
			console.error('Problems setting MonkeyPos',e);
		}
	};
	this.MonkeyPos_changed = function () {
		var value = this.MonkeyPos;
		return value;
	};
	try {
		this.MonkeyPos = new SFVec3f(0,0,0);
	} catch (e) {
		console.log('Problems setting MonkeyPos '+e);
		console.error('Problems setting MonkeyPos',e);
	}
	this.set_GroundTrans = function (value) {
		try {
			this.proxy.GroundTrans = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting GroundTrans '+e);
			console.error('Problems setting GroundTrans',e);
		}
	};
	this.GroundTrans_changed = function () {
		var value = this.GroundTrans;
		return value;
	};
	try {
		this.GroundTrans = X3DJSON.nodeUtil("Scene","TrGround");
	} catch (e) {
		console.log('Problems setting GroundTrans '+e);
		console.error('Problems setting GroundTrans',e);
	}
	this.set_MonkeyOri = function (value) {
		try {
			this.proxy.MonkeyOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting MonkeyOri '+e);
			console.error('Problems setting MonkeyOri',e);
		}
	};
	this.MonkeyOri_changed = function () {
		var value = this.MonkeyOri;
		return value;
	};
	try {
		this.MonkeyOri = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting MonkeyOri '+e);
		console.error('Problems setting MonkeyOri',e);
	}
	this.set_GroundGrid = function (value) {
		try {
			this.proxy.GroundGrid = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting GroundGrid '+e);
			console.error('Problems setting GroundGrid',e);
		}
	};
	this.GroundGrid_changed = function () {
		var value = this.GroundGrid;
		return value;
	};
	try {
		this.GroundGrid = X3DJSON.nodeUtil("Scene","EvGridGround");
	} catch (e) {
		console.log('Problems setting GroundGrid '+e);
		console.error('Problems setting GroundGrid',e);
	}
	this.set_MonkeyOri = function (value) {
		try {
			this.proxy.MonkeyOri = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting MonkeyOri '+e);
			console.error('Problems setting MonkeyOri',e);
		}
	};
	this.MonkeyOri_changed = function () {
		var value = this.MonkeyOri;
		return value;
	};
	try {
		this.MonkeyOri = new SFRotation(0,0,1,0);
	} catch (e) {
		console.log('Problems setting MonkeyOri '+e);
		console.error('Problems setting MonkeyOri',e);
	}


ecmascript:

	this.set_MonkeyPos = function (Pos)
{
    this.proxy.MonkeyPos= Pos;
    this.Update();
}
;

	this.set_MonkeyOri = function (Ori)
{
    this.proxy.MonkeyOri= Ori;
    this.Update();
}
;

	this.Update = function ()
{
    this.proxy.ShadowPos_changed= this.AddGroundHeight(new SFVec3f(this.proxy.MonkeyPos.x, .4, this.proxy.MonkeyPos.z));

    var ViewDir= this.proxy.MonkeyOri.multVec(new SFVec3f(0, 0, -1));
    ViewDir.y= 0; // make it horizontal.

    var HorzOri= new SFRotation(new SFVec3f(0, 0, -1), ViewDir);
    // now we have a horizontal orientation only.

    // figure out the normal vector of the ground.
    // for this, figure out three points on the ground around the monkey position.

    var cRadius= 2.3;

    var EvGridPointA= this.AddGroundHeight((new SFVec3f(this.proxy.MonkeyPos.x, 0, this.proxy.MonkeyPos.z)).add(HorzOri.multVec((new SFVec3f(  0, 0, -1  )).multiply(cRadius))));
    var EvGridPointB= this.AddGroundHeight((new SFVec3f(this.proxy.MonkeyPos.x, 0, this.proxy.MonkeyPos.z)).add(HorzOri.multVec((new SFVec3f( .866, 0, .5)).multiply(cRadius))));
    var EvGridPointC= this.AddGroundHeight((new SFVec3f(this.proxy.MonkeyPos.x, 0, this.proxy.MonkeyPos.z)).add(HorzOri.multVec((new SFVec3f(-.866, 0, .5)).multiply(cRadius))));

    var Normal= EvGridPointC.subtract(EvGridPointA).cross(EvGridPointB.subtract(EvGridPointA));

    var NormalOri= new SFRotation(new SFVec3f(0, 1, 0), Normal);

    this.proxy.ShadowOri_changed= HorzOri.multiply(NormalOri);
}

// r;

	this.AddGroundHeight = function (Vec)
{
    var PosOnGrid= Vec.subtract(X3DJSON.nodeUtil("Scene","TrGround", "translation"));

    var FloatIdxX= PosOnGrid.x / X3DJSON.nodeUtil("Scene","EvGridGround", "xSpacing");
    var FloatIdxZ= PosOnGrid.z / X3DJSON.nodeUtil("Scene","EvGridGround", "zSpacing");

    var FracX= FloatIdxX - Math.floor(FloatIdxX);
    var FracZ= FloatIdxZ - Math.floor(FloatIdxZ);

    // We do linear interpolation in the square we have.

    var IdxLowerX= Math.floor(FloatIdxX);
    var IdxLowerZ= Math.floor(FloatIdxZ);
    var IdxHigherX= IdxLowerX + 1;
    var IdxHigherZ= IdxLowerZ + 1;

    if(IdxLowerX  < 0) IdxLowerX= 0;
    if(IdxLowerZ  < 0) IdxLowerZ= 0;
    if(IdxHigherX < 0) IdxHigherX= 0;
    if(IdxHigherZ < 0) IdxHigherZ= 0;
    if(IdxLowerX  >= X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension")) IdxLowerX=  X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension") - 1;
    if(IdxHigherX >= X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension")) IdxHigherX= X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension") - 1;
    if(IdxLowerZ  >= X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension")) IdxLowerZ=  X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension") - 1;
    if(IdxHigherZ >= X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension")) IdxHigherZ= X3DJSON.nodeUtil("Scene","EvGridGround", "zDimension") - 1;

    var LowerXHeight=  this.GetGroundGridHeightAt(IdxLowerX,  IdxLowerZ) * (1 - FracZ) + this.GetGroundGridHeightAt(IdxLowerX,  IdxHigherZ) * FracZ;
    var HigherXHeight= this.GetGroundGridHeightAt(IdxHigherX, IdxLowerZ) * (1 - FracZ) + this.GetGroundGridHeightAt(IdxHigherX, IdxHigherZ) * FracZ;

    var Height= LowerXHeight * (1 - FracX) + HigherXHeight * FracX;

    return new SFVec3f(Vec.x, Vec.y + Height, Vec.z);
}
;

	this.GetGroundGridHeightAt = function (IdxX, IdxZ)
{
    return X3DJSON.nodeUtil("Scene","EvGridGround", "height")[IdxX + IdxZ * X3DJSON.nodeUtil("Scene","EvGridGround", "xDimension")];
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].initialize();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree']['ACTION']['croneDiffuseColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree']['ACTION']['croneDiffuseColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree']['ACTION']['croneDiffuseColor'].push(function(property, value) {
		if (property === 'croneDiffuseColor') {
			X3DJSON.nodeUtil("Scene","MatCrown","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneDiffuseColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneDiffuseColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneDiffuseColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MatCrown","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneDiffuseColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneDiffuseColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneDiffuseColor, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree']['ACTION']['croneEmissiveColor'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree']['ACTION']['croneEmissiveColor'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree']['ACTION']['croneEmissiveColor'].push(function(property, value) {
		if (property === 'croneEmissiveColor') {
			X3DJSON.nodeUtil("Scene","MatCrown","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneEmissiveColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneEmissiveColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneEmissiveColor, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","MatCrown","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneEmissiveColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneEmissiveColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneEmissiveColor, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Proxi")) {
X3DJSON.nodeUtil("Scene","Proxi").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Proxi")) {
X3DJSON.nodeUtil("Scene","Proxi").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","TchNavi")) {
X3DJSON.nodeUtil("Scene","TchNavi").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].set_hitCoord(X3DJSON.nodeUtil("Scene","TchNavi","hitTexCoord"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].set_hitCoord(X3DJSON.nodeUtil("Scene","TchNavi","hitTexCoord"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TchNavi")) {
X3DJSON.nodeUtil("Scene","TchNavi").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].set_activated(X3DJSON.nodeUtil("Scene","TchNavi","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].set_activated(X3DJSON.nodeUtil("Scene","TchNavi","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens']['ACTION']['userInput'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens']['ACTION']['userInput'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens']['ACTION']['userInput'].push(function(property, value) {
		if (property === 'userInput') {
			X3DJSON.nodeUtil("Scene","DampUserInput","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].userInput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].userInput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].userInput, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","DampUserInput","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].userInput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].userInput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].userInput, __eventTime);
    if (X3DJSON.nodeUtil("Scene","DampUserInput")) {
X3DJSON.nodeUtil("Scene","DampUserInput").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].userInput(X3DJSON.nodeUtil("Scene","DampUserInput","value"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].userInput(X3DJSON.nodeUtil("Scene","DampUserInput","value"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectPos'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectPos'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectPos'].push(function(property, value) {
		if (property === 'objectPos') {
			X3DJSON.nodeUtil("Scene","TransObject","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TransObject","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectOri'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectOri'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectOri'].push(function(property, value) {
		if (property === 'objectOri') {
			X3DJSON.nodeUtil("Scene","TransObject","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TransObject","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Timer")) {
X3DJSON.nodeUtil("Scene","Timer").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].Tick(X3DJSON.nodeUtil("Scene","Timer","time"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].Tick(X3DJSON.nodeUtil("Scene","Timer","time"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectPos'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectPos'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectPos'].push(function(property, value) {
		if (property === 'objectPos') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].set_avatarPos(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].set_avatarPos(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectOri'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectOri'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectOri'].push(function(property, value) {
		if (property === 'objectOri') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].set_avatarOri(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].set_avatarOri(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView']['ACTION']['viewPos'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView']['ACTION']['viewPos'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView']['ACTION']['viewPos'].push(function(property, value) {
		if (property === 'viewPos') {
			X3DJSON.nodeUtil("Scene","VP","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewPos, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","VP","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewPos, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView']['ACTION']['viewOri'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView']['ACTION']['viewOri'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView']['ACTION']['viewOri'].push(function(property, value) {
		if (property === 'viewOri') {
			X3DJSON.nodeUtil("Scene","VP","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewOri, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","VP","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewOri, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectPos'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectPos'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectPos'].push(function(property, value) {
		if (property === 'objectPos') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].set_MonkeyPos(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].set_MonkeyPos(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectOri'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectOri'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi']['ACTION']['objectOri'].push(function(property, value) {
		if (property === 'objectOri') {
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].set_MonkeyOri(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri, __eventTime);
		}
		}
});
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].set_MonkeyOri(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri, __eventTime);
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr']['ACTION']['ShadowPos'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr']['ACTION']['ShadowPos'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr']['ACTION']['ShadowPos'].push(function(property, value) {
		if (property === 'ShadowPos') {
			X3DJSON.nodeUtil("Scene","TrShadow","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowPos, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TrShadow","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowPos, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr']['ACTION']['ShadowOri'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr']['ACTION']['ShadowOri'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr']['ACTION']['ShadowOri'].push(function(property, value) {
		if (property === 'ShadowOri') {
			X3DJSON.nodeUtil("Scene","TrShadow","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowOri, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","TrShadow","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowOri, __eventTime);
			X3DJSON.nodeUtil("Scene","MatCrown","diffuseColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneDiffuseColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneDiffuseColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneDiffuseColor, __eventTime);
			X3DJSON.nodeUtil("Scene","MatCrown","emissiveColor",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneEmissiveColor === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneEmissiveColor() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrTree'].croneEmissiveColor, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].set_hitCoord(X3DJSON.nodeUtil("Scene","TchNavi","hitTexCoord"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].set_activated(X3DJSON.nodeUtil("Scene","TchNavi","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","DampUserInput","destination",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].userInput === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].userInput() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNaviSens'].userInput, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].userInput(X3DJSON.nodeUtil("Scene","DampUserInput","value"), __eventTime);
			X3DJSON.nodeUtil("Scene","TransObject","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos, __eventTime);
			X3DJSON.nodeUtil("Scene","TransObject","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].Tick(X3DJSON.nodeUtil("Scene","Timer","time"), __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].set_avatarPos(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].set_avatarOri(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","VP","position",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewPos, __eventTime);
			X3DJSON.nodeUtil("Scene","VP","orientation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['Scr3rdPersonView'].viewOri, __eventTime);
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].set_MonkeyPos(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectPos, __eventTime);
		}
		if (X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'] && typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].set_MonkeyOri(typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrNavi'].objectOri, __eventTime);
		}
			X3DJSON.nodeUtil("Scene","TrShadow","translation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowPos_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowPos_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowPos, __eventTime);
			X3DJSON.nodeUtil("Scene","TrShadow","rotation",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowOri_changed === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowOri_changed() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Followers/PoorMansInertia.json']['ScrShadowMgr'].ShadowOri, __eventTime);