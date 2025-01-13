var x3dom = require('../node/fields.js');
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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] = function() {
	this.set_SeaStateChoice0 = function (value) {
		try {
			this.proxy.SeaStateChoice0 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice0 '+e);
			console.error('Problems setting SeaStateChoice0',e);
		}
	};
	this.SeaStateChoice0_changed = function () {
		var value = this.SeaStateChoice0;
		return value;
	};
	try {
		this.SeaStateChoice0 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice0 '+e);
		console.error('Problems setting SeaStateChoice0',e);
	}
	this.set_SeaStateChoice1 = function (value) {
		try {
			this.proxy.SeaStateChoice1 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice1 '+e);
			console.error('Problems setting SeaStateChoice1',e);
		}
	};
	this.SeaStateChoice1_changed = function () {
		var value = this.SeaStateChoice1;
		return value;
	};
	try {
		this.SeaStateChoice1 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice1 '+e);
		console.error('Problems setting SeaStateChoice1',e);
	}
	this.set_SeaStateChoice2 = function (value) {
		try {
			this.proxy.SeaStateChoice2 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice2 '+e);
			console.error('Problems setting SeaStateChoice2',e);
		}
	};
	this.SeaStateChoice2_changed = function () {
		var value = this.SeaStateChoice2;
		return value;
	};
	try {
		this.SeaStateChoice2 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice2 '+e);
		console.error('Problems setting SeaStateChoice2',e);
	}
	this.set_SeaStateChoice3 = function (value) {
		try {
			this.proxy.SeaStateChoice3 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice3 '+e);
			console.error('Problems setting SeaStateChoice3',e);
		}
	};
	this.SeaStateChoice3_changed = function () {
		var value = this.SeaStateChoice3;
		return value;
	};
	try {
		this.SeaStateChoice3 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice3 '+e);
		console.error('Problems setting SeaStateChoice3',e);
	}
	this.set_SeaStateChoice4 = function (value) {
		try {
			this.proxy.SeaStateChoice4 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice4 '+e);
			console.error('Problems setting SeaStateChoice4',e);
		}
	};
	this.SeaStateChoice4_changed = function () {
		var value = this.SeaStateChoice4;
		return value;
	};
	try {
		this.SeaStateChoice4 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice4 '+e);
		console.error('Problems setting SeaStateChoice4',e);
	}
	this.set_SeaStateChoice5 = function (value) {
		try {
			this.proxy.SeaStateChoice5 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice5 '+e);
			console.error('Problems setting SeaStateChoice5',e);
		}
	};
	this.SeaStateChoice5_changed = function () {
		var value = this.SeaStateChoice5;
		return value;
	};
	try {
		this.SeaStateChoice5 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice5 '+e);
		console.error('Problems setting SeaStateChoice5',e);
	}
	this.set_SeaStateChoice6 = function (value) {
		try {
			this.proxy.SeaStateChoice6 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice6 '+e);
			console.error('Problems setting SeaStateChoice6',e);
		}
	};
	this.SeaStateChoice6_changed = function () {
		var value = this.SeaStateChoice6;
		return value;
	};
	try {
		this.SeaStateChoice6 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice6 '+e);
		console.error('Problems setting SeaStateChoice6',e);
	}
	this.set_SeaStateChoice7 = function (value) {
		try {
			this.proxy.SeaStateChoice7 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice7 '+e);
			console.error('Problems setting SeaStateChoice7',e);
		}
	};
	this.SeaStateChoice7_changed = function () {
		var value = this.SeaStateChoice7;
		return value;
	};
	try {
		this.SeaStateChoice7 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice7 '+e);
		console.error('Problems setting SeaStateChoice7',e);
	}
	this.set_SeaStateChoice8 = function (value) {
		try {
			this.proxy.SeaStateChoice8 = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateChoice8 '+e);
			console.error('Problems setting SeaStateChoice8',e);
		}
	};
	this.SeaStateChoice8_changed = function () {
		var value = this.SeaStateChoice8;
		return value;
	};
	try {
		this.SeaStateChoice8 = new SFBool();
	} catch (e) {
		console.log('Problems setting SeaStateChoice8 '+e);
		console.error('Problems setting SeaStateChoice8',e);
	}
	this.set_SeaStateValue = function (value) {
		try {
			this.proxy.SeaStateValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting SeaStateValue '+e);
			console.error('Problems setting SeaStateValue',e);
		}
	};
	this.SeaStateValue_changed = function () {
		var value = this.SeaStateValue;
		return value;
	};
	try {
		this.SeaStateValue = new SFInt32();
	} catch (e) {
		console.log('Problems setting SeaStateValue '+e);
		console.error('Problems setting SeaStateValue',e);
	}
	this.set_BuoyanceValue = function (value) {
		try {
			this.proxy.BuoyanceValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BuoyanceValue '+e);
			console.error('Problems setting BuoyanceValue',e);
		}
	};
	this.BuoyanceValue_changed = function () {
		var value = this.BuoyanceValue;
		return value;
	};
	try {
		this.BuoyanceValue = new MFVec3f();
	} catch (e) {
		console.log('Problems setting BuoyanceValue '+e);
		console.error('Problems setting BuoyanceValue',e);
	}
	this.set_BuoyanceKeyValues = function (value) {
		try {
			this.proxy.BuoyanceKeyValues = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting BuoyanceKeyValues '+e);
			console.error('Problems setting BuoyanceKeyValues',e);
		}
	};
	this.BuoyanceKeyValues_changed = function () {
		var value = this.BuoyanceKeyValues;
		return value;
	};
	try {
		this.BuoyanceKeyValues = new MFFloat();
	} catch (e) {
		console.log('Problems setting BuoyanceKeyValues '+e);
		console.error('Problems setting BuoyanceKeyValues',e);
	}
	this.set_PitchValue = function (value) {
		try {
			this.proxy.PitchValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting PitchValue '+e);
			console.error('Problems setting PitchValue',e);
		}
	};
	this.PitchValue_changed = function () {
		var value = this.PitchValue;
		return value;
	};
	try {
		this.PitchValue = new MFRotation();
	} catch (e) {
		console.log('Problems setting PitchValue '+e);
		console.error('Problems setting PitchValue',e);
	}
	this.set_RollValue = function (value) {
		try {
			this.proxy.RollValue = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting RollValue '+e);
			console.error('Problems setting RollValue',e);
		}
	};
	this.RollValue_changed = function () {
		var value = this.RollValue;
		return value;
	};
	try {
		this.RollValue = new MFRotation();
	} catch (e) {
		console.log('Problems setting RollValue '+e);
		console.error('Problems setting RollValue',e);
	}


ecmascript:

// Return the numeric value of SST button clicked
//mfVec3fObjectName = new MFVec3f(SFVec3f v1, SFVec3f v2,...)
//sfVec3fObjectName = new SFVec3f(numeric x, numeric y, numeric z)
//sfRotationObjectName = new SFRotation(numeric x, numeric y, numeric z, numeric angle)
//mfRotationObjectName = new MFRotation(SFRotation r1, SFRotation r2, ...)
//mfFloatObjectName = new MFFloat(numeric n1, numeric n2, ...)

//Sea state 4 ( Beaufort=4-6)with wind=20 Knots
//               freq=0.124(8.1 period)
//               wavelength=159.2m
//               waveheight=4-8 ft or 1.32m-2.64 meam +/- 1.98=2.00m


	this.initialize = function ()
{
	this.proxy.SeaStateValue = 0;
}

//functino ComputeSSH(Ssh)
//Sea state 1 (Beaufort 2 to 3) with wind 4 to 10 Knots
//               freq = .5   (    period (T))
//               wavelength= 12.5   m (L)
//               waveheight=2-4 (3 as mean or ft or 0.91 meam +/- .91m ( A )
//{
//	A=0.91;
//	L=12.5;
//	k=1/159.2;
//	f=0.5;
//	pi=3.141592;
//	T=8.1;
//	for ( var x=0, t=0 ; i <= 10 ; x=x+0.1, t=t+0.1);
//	theta0=0;
//	theta1=pi/12;
//	theta2=-pi/12;
//	w=2*pi*0.124;
//	height=A*cos(2*pi*((x/L)-(t/T)));
//	saida=[x       t        height];
//	return height;
//}
;

	this.SeaStateChoice1 = function (inputBoolean, timestamp)
{
	if (inputBoolean)
	{
//	ComputeSSH(1);
	this.proxy.SeaStateValue = 0;
	L=1
 	y0=L* -0.0060
	y1=L*0.0710
	y2=L*0.0030
	y3=L*-0.2115
	y4=L*-0.4640
	y5=L*-0.5885
	y6=L*-0.4515
	y7=L*-0.0370
	y8=L*0.5240
	y9=L*0.9950
	y10=L*1.1345
	y11=L*0.8160
	y12=L*0.1025
	y13=L*-0.7565
	y14=L*-1.4155
	y15=L*-1.5765
	y16=L*-1.1230
	y17=L*-0.1865
	y18=L*0.8910
	y19=L*1.6865
	y20=L*1.8670
	y21=L*1.3340
	y22=L*0.2705
	y23=L*-0.9230
	y24=L*-1.7840
	y25=L*-1.9755
	y26=L*-1.4200
	y27=L*-0.3350
	y28=L*0.8590
	y29=L*1.7040
	y30=L*1.8880
	y31=L*1.3640
	y32=L*0.3615
	y33=L*-0.7170
	y34=L*-1.4600
	y35=L*-1.6120
	y36=L*-1.1630
	y37=L*-0.3360
	y38=L*-0.5205
	y39=L*-1.0815
	y40=L*-0.1740
	x1 = new SFVec3f(400, y0, 400);
	x2 = new SFVec3f(390, y1, 390);
	x3 = new SFVec3f(380, y2, 380);
	x4 = new SFVec3f(370, y3, 370);
	x5 = new SFVec3f(360, y4, 360);
	x6= new SFVec3f(350, y5, 350);
	x7 = new SFVec3f(340, y6, 340);
	x8 = new SFVec3f(330, y7, 330);
	x9 = new SFVec3f(320, y8, 320);
	x10 = new SFVec3f(310,y9, 310);
	x11 = new SFVec3f(300, y10, 300);
	x12 = new SFVec3f(290, y11, 290);
	x13 = new SFVec3f(280, y12, 280);
	x14 = new SFVec3f(260, y13, 260);
	x15 = new SFVec3f(250, y14, 250);
	x16= new SFVec3f(240, y15, 240);
	x17 = new SFVec3f(230, y16, 230);
	x18 = new SFVec3f(220, y17, 220);
	x19 = new SFVec3f(210, y18, 210);
	x20 = new SFVec3f(200,y19, 200);
	x21 = new SFVec3f(190, y20, 190);
	x22 = new SFVec3f(180, y21, 180);
	x23 = new SFVec3f(170, y22, 170);
	x24 = new SFVec3f(160, y23, 160);
	x25 = new SFVec3f(150, y4, 150);
	x26= new SFVec3f(140, y25, 140);
	x27 = new SFVec3f(130, y26, 130);
	x28 = new SFVec3f(120, y27, 120);
	x29 = new SFVec3f(110, y28, 110);
	x30 = new SFVec3f(100, y29, 100);
	x31 = new SFVec3f(90, y30, 90);
	x32= new SFVec3f(80, y31, 80);
	x33 = new SFVec3f(70, y32, 70);
	x34 = new SFVec3f(60, y33, 60);
	x35 = new SFVec3f(50, y34, 50);
	x36= new SFVec3f(40, y35, 40);
	x37 = new SFVec3f(30, y36, 30);
	x38 = new SFVec3f(20, y37, 20);
	x39 = new SFVec3f(10, y38, 10);
	x40 = new SFVec3f(5,y39, 5);
	x41 = new SFVec3f(0,y40, 0);
	R1 = new SFRotation(1, 0, 0, 0.01);
	R2 = new SFRotation(1, 0, 0, -0.01);
	R3 = new SFRotation(1, 0, 0, 0.01);
	P1 = new SFRotation(0, 0, 1, 0.01);
	P2 = new SFRotation(0, 0, 1, -0.01);
	P3 = new SFRotation(0, 0, 1, 0.01);
	this.proxy.PitchValue = new MFRotation(P1, P2, P3);
	this.proxy.RollValue = new MFRotation(R1, R2, R3);
	this.proxy.BuoyanceValue = new MFVec3f(x1, x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,x21,x22,x23,x24,x25,x26,x27,x28,x29,x30,x31,x32,x33,x34,x35,x36,x37,x38,x39,x40,x41)
	this.proxy.BuoyanceKeyValues = new MFFloat( 0, 0.01, 0.02,0.03, 0.04, 0.05, 0.06, 0.07,0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.2500  , 0.2600  , 0.2700  , 0.2800  , 0.2900  , 0.3000  , 0.3100  , 0.3200  , 0.3300  , 0.3400  , 0.3500  , 0.3600  , 0.3700  , 0.3800   ,0.3900   ,0.4000)
	}
}
;

	this.SeaStateChoice2 = function (inputBoolean, timestamp)
{
	if (inputBoolean)
	{
	this.proxy.SeaStateValue = 1;
	L=1.5
 	y0=L* -0.0060
	y1=L*0.0710
	y2=L*0.0030
	y3=L*-0.2115
	y4=L*-0.4640
	y5=L*-0.5885
	y6=L*-0.4515
	y7=L*-0.0370
	y8=L*0.5240
	y9=L*0.9950
	y10=L*1.1345
	y11=L*0.8160
	y12=L*0.1025
	y13=L*-0.7565
	y14=L*-1.4155
	y15=L*-1.5765
	y16=L*-1.1230
	y17=L*-0.1865
	y18=L*0.8910
	y19=L*1.6865
	y20=L*1.8670
	y21=L*1.3340
	y22=L*0.2705
	y23=L*-0.9230
	y24=L*-1.7840
	y25=L*-1.9755
	y26=L*-1.4200
	y27=L*-0.3350
	y28=L*0.8590
	y29=L*1.7040
	y30=L*1.8880
	y31=L*1.3640
	y32=L*0.3615
	y33=L*-0.7170
	y34=L*-1.4600
	y35=L*-1.6120
	y36=L*-1.1630
	y37=L*-0.3360
	y38=L*-0.5205
	y39=L*-1.0815
	y40=L*-0.1740
	x1 = new SFVec3f(400, y0, 400);
	x2 = new SFVec3f(390, y1, 390);
	x3 = new SFVec3f(380, y2, 380);
	x4 = new SFVec3f(370, y3, 370);
	x5 = new SFVec3f(360, y4, 360);
	x6= new SFVec3f(350, y5, 350);
	x7 = new SFVec3f(340, y6, 340);
	x8 = new SFVec3f(330, y7, 330);
	x9 = new SFVec3f(320, y8, 320);
	x10 = new SFVec3f(310,y9, 310);
	x11 = new SFVec3f(300, y10, 300);
	x12 = new SFVec3f(290, y11, 290);
	x13 = new SFVec3f(280, y12, 280);
	x14 = new SFVec3f(260, y13, 260);
	x15 = new SFVec3f(250, y14, 250);
	x16= new SFVec3f(240, y15, 240);
	x17 = new SFVec3f(230, y16, 230);
	x18 = new SFVec3f(220, y17, 220);
	x19 = new SFVec3f(210, y18, 210);
	x20 = new SFVec3f(200,y19, 200);
	x21 = new SFVec3f(190, y20, 190);
	x22 = new SFVec3f(180, y21, 180);
	x23 = new SFVec3f(170, y22, 170);
	x24 = new SFVec3f(160, y23, 160);
	x25 = new SFVec3f(150, y4, 150);
	x26= new SFVec3f(140, y25, 140);
	x27 = new SFVec3f(130, y26, 130);
	x28 = new SFVec3f(120, y27, 120);
	x29 = new SFVec3f(110, y28, 110);
	x30 = new SFVec3f(100, y29, 100);
	x31 = new SFVec3f(90, y30, 90);
	x32= new SFVec3f(80, y31, 80);
	x33 = new SFVec3f(70, y32, 70);
	x34 = new SFVec3f(60, y33, 60);
	x35 = new SFVec3f(50, y34, 50);
	x36= new SFVec3f(40, y35, 40);
	x37 = new SFVec3f(30, y36, 30);
	x38 = new SFVec3f(20, y37, 20);
	x39 = new SFVec3f(10, y38, 10);
	x40 = new SFVec3f(5,y39, 5);
	x41 = new SFVec3f(0,y40, 0);
	R1 = new SFRotation(1, 0, 0, 0.02);
	R2 = new SFRotation(1, 0, 0, -0.02);
	R3 = new SFRotation(1, 0, 0, 0.02);
	P1 = new SFRotation(0, 0, 1, 0.02);
	P2 = new SFRotation(0, 0, 1, -0.02);
	P3 = new SFRotation(0, 0, 1, 0.02);
	this.proxy.PitchValue = new MFRotation(P1, P2, P3);
	this.proxy.RollValue = new MFRotation(R1, R2, R3);
	this.proxy.BuoyanceValue = new MFVec3f(x1, x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,x21,x22,x23,x24,x25,x26,x27,x28,x29,x30,x31,x32,x33,x34,x35,x36,x37,x38,x39,x40,x41)
	this.proxy.BuoyanceKeyValues = new MFFloat( 0, 0.01, 0.02,0.03, 0.04, 0.05, 0.06, 0.07,0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.2500  , 0.2600  , 0.2700  , 0.2800  , 0.2900  , 0.3000  , 0.3100  , 0.3200  , 0.3300  , 0.3400  , 0.3500  , 0.3600  , 0.3700  , 0.3800   ,0.3900   ,0.4000)
	}
}
;

	this.SeaStateChoice3 = function (inputBoolean,timestamp)
{
	if (inputBoolean)
	{
	this.proxy.SeaStateValue = 2;
	L=2
 	y0=L* -0.0060
	y1=L*0.0710
	y2=L*0.0030
	y3=L*-0.2115
	y4=L*-0.4640
	y5=L*-0.5885
	y6=L*-0.4515
	y7=L*-0.0370
	y8=L*0.5240
	y9=L*0.9950
	y10=L*1.1345
	y11=L*0.8160
	y12=L*0.1025
	y13=L*-0.7565
	y14=L*-1.4155
	y15=L*-1.5765
	y16=L*-1.1230
	y17=L*-0.1865
	y18=L*0.8910
	y19=L*1.6865
	y20=L*1.8670
	y21=L*1.3340
	y22=L*0.2705
	y23=L*-0.9230
	y24=L*-1.7840
	y25=L*-1.9755
	y26=L*-1.4200
	y27=L*-0.3350
	y28=L*0.8590
	y29=L*1.7040
	y30=L*1.8880
	y31=L*1.3640
	y32=L*0.3615
	y33=L*-0.7170
	y34=L*-1.4600
	y35=L*-1.6120
	y36=L*-1.1630
	y37=L*-0.3360
	y38=L*-0.5205
	y39=L*-1.0815
	y40=L*-0.1740
	x1 = new SFVec3f(400, y0, 400);
	x2 = new SFVec3f(390, y1, 390);
	x3 = new SFVec3f(380, y2, 380);
	x4 = new SFVec3f(370, y3, 370);
	x5 = new SFVec3f(360, y4, 360);
	x6= new SFVec3f(350, y5, 350);
	x7 = new SFVec3f(340, y6, 340);
	x8 = new SFVec3f(330, y7, 330);
	x9 = new SFVec3f(320, y8, 320);
	x10 = new SFVec3f(310,y9, 310);
	x11 = new SFVec3f(300, y10, 300);
	x12 = new SFVec3f(290, y11, 290);
	x13 = new SFVec3f(280, y12, 280);
	x14 = new SFVec3f(260, y13, 260);
	x15 = new SFVec3f(250, y14, 250);
	x16= new SFVec3f(240, y15, 240);
	x17 = new SFVec3f(230, y16, 230);
	x18 = new SFVec3f(220, y17, 220);
	x19 = new SFVec3f(210, y18, 210);
	x20 = new SFVec3f(200,y19, 200);
	x21 = new SFVec3f(190, y20, 190);
	x22 = new SFVec3f(180, y21, 180);
	x23 = new SFVec3f(170, y22, 170);
	x24 = new SFVec3f(160, y23, 160);
	x25 = new SFVec3f(150, y4, 150);
	x26= new SFVec3f(140, y25, 140);
	x27 = new SFVec3f(130, y26, 130);
	x28 = new SFVec3f(120, y27, 120);
	x29 = new SFVec3f(110, y28, 110);
	x30 = new SFVec3f(100, y29, 100);
	x31 = new SFVec3f(90, y30, 90);
	x32= new SFVec3f(80, y31, 80);
	x33 = new SFVec3f(70, y32, 70);
	x34 = new SFVec3f(60, y33, 60);
	x35 = new SFVec3f(50, y34, 50);
	x36= new SFVec3f(40, y35, 40);
	x37 = new SFVec3f(30, y36, 30);
	x38 = new SFVec3f(20, y37, 20);
	x39 = new SFVec3f(10, y38, 10);
	x40 = new SFVec3f(5,y39, 5);
	x41 = new SFVec3f(0,y40, 0);
	R1 = new SFRotation(1, 0, 0, 0.03);
	R2 = new SFRotation(1, 0, 0, -0.03);
	R3 = new SFRotation(1, 0, 0, 0.03);
	P1 = new SFRotation(0, 0, 1, 0.03);
	P2 = new SFRotation(0, 0, 1, -0.03);
	P3 = new SFRotation(0, 0, 1, 0.03);
	this.proxy.PitchValue = new MFRotation(P1, P2, P3);
	this.proxy.RollValue = new MFRotation(R1, R2, R3);
	this.proxy.BuoyanceValue = new MFVec3f(x1, x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,x21,x22,x23,x24,x25,x26,x27,x28,x29,x30,x31,x32,x33,x34,x35,x36,x37,x38,x39,x40,x41)
	this.proxy.BuoyanceKeyValues = new MFFloat( 0, 0.01, 0.02,0.03, 0.04, 0.05, 0.06, 0.07,0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.2500  , 0.2600  , 0.2700  , 0.2800  , 0.2900  , 0.3000  , 0.3100  , 0.3200  , 0.3300  , 0.3400  , 0.3500  , 0.3600  , 0.3700  , 0.3800   ,0.3900   ,0.4000)
	}
}

;

	this.SeaStateChoice4 = function (inputBoolean, timestamp)
{
	if (inputBoolean)
	{
	L=3
 	y0=L* -0.0060
	y1=L*0.0710
	y2=L*0.0030
	y3=L*-0.2115
	y4=L*-0.4640
	y5=L*-0.5885
	y6=L*-0.4515
	y7=L*-0.0370
	y8=L*0.5240
	y9=L*0.9950
	y10=L*1.1345
	y11=L*0.8160
	y12=L*0.1025
	y13=L*-0.7565
	y14=L*-1.4155
	y15=L*-1.5765
	y16=L*-1.1230
	y17=L*-0.1865
	y18=L*0.8910
	y19=L*1.6865
	y20=L*1.8670
	y21=L*1.3340
	y22=L*0.2705
	y23=L*-0.9230
	y24=L*-1.7840
	y25=L*-1.9755
	y26=L*-1.4200
	y27=L*-0.3350
	y28=L*0.8590
	y29=L*1.7040
	y30=L*1.8880
	y31=L*1.3640
	y32=L*0.3615
	y33=L*-0.7170
	y34=L*-1.4600
	y35=L*-1.6120
	y36=L*-1.1630
	y37=L*-0.3360
	y38=L*-0.5205
	y39=L*-1.0815
	y40=L*-0.1740
	x1 = new SFVec3f(400, y0, 400);
	x2 = new SFVec3f(390, y1, 390);
	x3 = new SFVec3f(380, y2, 380);
	x4 = new SFVec3f(370, y3, 370);
	x5 = new SFVec3f(360, y4, 360);
	x6= new SFVec3f(350, y5, 350);
	x7 = new SFVec3f(340, y6, 340);
	x8 = new SFVec3f(330, y7, 330);
	x9 = new SFVec3f(320, y8, 320);
	x10 = new SFVec3f(310,y9, 310);
	x11 = new SFVec3f(300, y10, 300);
	x12 = new SFVec3f(290, y11, 290);
	x13 = new SFVec3f(280, y12, 280);
	x14 = new SFVec3f(260, y13, 260);
	x15 = new SFVec3f(250, y14, 250);
	x16= new SFVec3f(240, y15, 240);
	x17 = new SFVec3f(230, y16, 230);
	x18 = new SFVec3f(220, y17, 220);
	x19 = new SFVec3f(210, y18, 210);
	x20 = new SFVec3f(200,y19, 200);
	x21 = new SFVec3f(190, y20, 190);
	x22 = new SFVec3f(180, y21, 180);
	x23 = new SFVec3f(170, y22, 170);
	x24 = new SFVec3f(160, y23, 160);
	x25 = new SFVec3f(150, y4, 150);
	x26= new SFVec3f(140, y25, 140);
	x27 = new SFVec3f(130, y26, 130);
	x28 = new SFVec3f(120, y27, 120);
	x29 = new SFVec3f(110, y28, 110);
	x30 = new SFVec3f(100, y29, 100);
	x31 = new SFVec3f(90, y30, 90);
	x32= new SFVec3f(80, y31, 80);
	x33 = new SFVec3f(70, y32, 70);
	x34 = new SFVec3f(60, y33, 60);
	x35 = new SFVec3f(50, y34, 50);
	x36= new SFVec3f(40, y35, 40);
	x37 = new SFVec3f(30, y36, 30);
	x38 = new SFVec3f(20, y37, 20);
	x39 = new SFVec3f(10, y38, 10);
	x40 = new SFVec3f(5,y39, 5);
	x41 = new SFVec3f(0,y40, 0);
	R1 = new SFRotation(1, 0, 0, 0.07);
	R2 = new SFRotation(1, 0, 0, -0.07);
	R3 = new SFRotation(1, 0, 0, 0.07);
	P1 = new SFRotation(0, 0, 1, 0.07);
	P2 = new SFRotation(0, 0, 1, -0.07);
	P3 = new SFRotation(0, 0, 1, 0.07);
	this.proxy.PitchValue = new MFRotation(P1, P2, P3);
	this.proxy.RollValue = new MFRotation(R1, R2, R3);
	this.proxy.BuoyanceValue = new MFVec3f(x1, x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,x21,x22,x23,x24,x25,x26,x27,x28,x29,x30,x31,x32,x33,x34,x35,x36,x37,x38,x39,x40,x41)
	this.proxy.BuoyanceKeyValues = new MFFloat( 0, 0.01, 0.02,0.03, 0.04, 0.05, 0.06, 0.07,0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.2500  , 0.2600  , 0.2700  , 0.2800  , 0.2900  , 0.3000  , 0.3100  , 0.3200  , 0.3300  , 0.3400  , 0.3500  , 0.3600  , 0.3700  , 0.3800   ,0.3900   ,0.4000)
	}
}

;

	this.SeaStateChoice5 = function (inputBoolean, timestamp)
{
	if (inputBoolean)
	{
	this.proxy.SeaStateValue = 4;
	L=5
 	y0=L* -0.0060
	y1=L*0.0710
	y2=L*0.0030
	y3=L*-0.2115
	y4=L*-0.4640
	y5=L*-0.5885
	y6=L*-0.4515
	y7=L*-0.0370
	y8=L*0.5240
	y9=L*0.9950
	y10=L*1.1345
	y11=L*0.8160
	y12=L*0.1025
	y13=L*-0.7565
	y14=L*-1.4155
	y15=L*-1.5765
	y16=L*-1.1230
	y17=L*-0.1865
	y18=L*0.8910
	y19=L*1.6865
	y20=L*1.8670
	y21=L*1.3340
	y22=L*0.2705
	y23=L*-0.9230
	y24=L*-1.7840
	y25=L*-1.9755
	y26=L*-1.4200
	y27=L*-0.3350
	y28=L*0.8590
	y29=L*1.7040
	y30=L*1.8880
	y31=L*1.3640
	y32=L*0.3615
	y33=L*-0.7170
	y34=L*-1.4600
	y35=L*-1.6120
	y36=L*-1.1630
	y37=L*-0.3360
	y38=L*-0.5205
	y39=L*-1.0815
	y40=L*-0.1740
	x1 = new SFVec3f(400, y0, 400);
	x2 = new SFVec3f(390, y1, 390);
	x3 = new SFVec3f(380, y2, 380);
	x4 = new SFVec3f(370, y3, 370);
	x5 = new SFVec3f(360, y4, 360);
	x6= new SFVec3f(350, y5, 350);
	x7 = new SFVec3f(340, y6, 340);
	x8 = new SFVec3f(330, y7, 330);
	x9 = new SFVec3f(320, y8, 320);
	x10 = new SFVec3f(310,y9, 310);
	x11 = new SFVec3f(300, y10, 300);
	x12 = new SFVec3f(290, y11, 290);
	x13 = new SFVec3f(280, y12, 280);
	x14 = new SFVec3f(260, y13, 260);
	x15 = new SFVec3f(250, y14, 250);
	x16= new SFVec3f(240, y15, 240);
	x17 = new SFVec3f(230, y16, 230);
	x18 = new SFVec3f(220, y17, 220);
	x19 = new SFVec3f(210, y18, 210);
	x20 = new SFVec3f(200,y19, 200);
	x21 = new SFVec3f(190, y20, 190);
	x22 = new SFVec3f(180, y21, 180);
	x23 = new SFVec3f(170, y22, 170);
	x24 = new SFVec3f(160, y23, 160);
	x25 = new SFVec3f(150, y4, 150);
	x26= new SFVec3f(140, y25, 140);
	x27 = new SFVec3f(130, y26, 130);
	x28 = new SFVec3f(120, y27, 120);
	x29 = new SFVec3f(110, y28, 110);
	x30 = new SFVec3f(100, y29, 100);
	x31 = new SFVec3f(90, y30, 90);
	x32= new SFVec3f(80, y31, 80);
	x33 = new SFVec3f(70, y32, 70);
	x34 = new SFVec3f(60, y33, 60);
	x35 = new SFVec3f(50, y34, 50);
	x36= new SFVec3f(40, y35, 40);
	x37 = new SFVec3f(30, y36, 30);
	x38 = new SFVec3f(20, y37, 20);
	x39 = new SFVec3f(10, y38, 10);
	x40 = new SFVec3f(5,y39, 5);
	x41 = new SFVec3f(0,y40, 0);
	R1 = new SFRotation(1, 0, 0, 0.1);
	R2 = new SFRotation(1, 0, 0, -0.1);
	R3 = new SFRotation(1, 0, 0, 0.1);
	P1 = new SFRotation(0, 0, 1, 0.1);
	P2 = new SFRotation(0, 0, 1, -0.1);
	P3 = new SFRotation(0, 0, 1, 0.1);
	this.proxy.PitchValue = new MFRotation(P1, P2, P3);
	this.proxy.RollValue = new MFRotation(R1, R2, R3);
	this.proxy.BuoyanceValue = new MFVec3f(x1, x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,x21,x22,x23,x24,x25,x26,x27,x28,x29,x30,x31,x32,x33,x34,x35,x36,x37,x38,x39,x40,x41)
	this.proxy.BuoyanceKeyValues = new MFFloat( 0, 0.01, 0.02,0.03, 0.04, 0.05, 0.06, 0.07,0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.2500  , 0.2600  , 0.2700  , 0.2800  , 0.2900  , 0.3000  , 0.3100  , 0.3200  , 0.3300  , 0.3400  , 0.3500  , 0.3600  , 0.3700  , 0.3800   ,0.3900   ,0.4000)
	}
}
;

	this.SeaStateChoice6 = function (inputBoolean, timestamp)
{
	if (inputBoolean)
	{
	this.proxy.SeaStateValue = 5;
	L=7
 	y0=L* -0.0060
	y1=L*0.0710
	y2=L*0.0030
	y3=L*-0.2115
	y4=L*-0.4640
	y5=L*-0.5885
	y6=L*-0.4515
	y7=L*-0.0370
	y8=L*0.5240
	y9=L*0.9950
	y10=L*1.1345
	y11=L*0.8160
	y12=L*0.1025
	y13=L*-0.7565
	y14=L*-1.4155
	y15=L*-1.5765
	y16=L*-1.1230
	y17=L*-0.1865
	y18=L*0.8910
	y19=L*1.6865
	y20=L*1.8670
	y21=L*1.3340
	y22=L*0.2705
	y23=L*-0.9230
	y24=L*-1.7840
	y25=L*-1.9755
	y26=L*-1.4200
	y27=L*-0.3350
	y28=L*0.8590
	y29=L*1.7040
	y30=L*1.8880
	y31=L*1.3640
	y32=L*0.3615
	y33=L*-0.7170
	y34=L*-1.4600
	y35=L*-1.6120
	y36=L*-1.1630
	y37=L*-0.3360
	y38=L*-0.5205
	y39=L*-1.0815
	y40=L*-0.1740
	x1 = new SFVec3f(400, y0, 400);
	x2 = new SFVec3f(390, y1, 390);
	x3 = new SFVec3f(380, y2, 380);
	x4 = new SFVec3f(370, y3, 370);
	x5 = new SFVec3f(360, y4, 360);
	x6= new SFVec3f(350, y5, 350);
	x7 = new SFVec3f(340, y6, 340);
	x8 = new SFVec3f(330, y7, 330);
	x9 = new SFVec3f(320, y8, 320);
	x10 = new SFVec3f(310,y9, 310);
	x11 = new SFVec3f(300, y10, 300);
	x12 = new SFVec3f(290, y11, 290);
	x13 = new SFVec3f(280, y12, 280);
	x14 = new SFVec3f(260, y13, 260);
	x15 = new SFVec3f(250, y14, 250);
	x16= new SFVec3f(240, y15, 240);
	x17 = new SFVec3f(230, y16, 230);
	x18 = new SFVec3f(220, y17, 220);
	x19 = new SFVec3f(210, y18, 210);
	x20 = new SFVec3f(200,y19, 200);
	x21 = new SFVec3f(190, y20, 190);
	x22 = new SFVec3f(180, y21, 180);
	x23 = new SFVec3f(170, y22, 170);
	x24 = new SFVec3f(160, y23, 160);
	x25 = new SFVec3f(150, y4, 150);
	x26= new SFVec3f(140, y25, 140);
	x27 = new SFVec3f(130, y26, 130);
	x28 = new SFVec3f(120, y27, 120);
	x29 = new SFVec3f(110, y28, 110);
	x30 = new SFVec3f(100, y29, 100);
	x31 = new SFVec3f(90, y30, 90);
	x32= new SFVec3f(80, y31, 80);
	x33 = new SFVec3f(70, y32, 70);
	x34 = new SFVec3f(60, y33, 60);
	x35 = new SFVec3f(50, y34, 50);
	x36= new SFVec3f(40, y35, 40);
	x37 = new SFVec3f(30, y36, 30);
	x38 = new SFVec3f(20, y37, 20);
	x39 = new SFVec3f(10, y38, 10);
	x40 = new SFVec3f(5,y39, 5);
	x41 = new SFVec3f(0,y40, 0);
	R1 = new SFRotation(1, 0, 0, 0.1);
	R2 = new SFRotation(1, 0, 0, -0.1);
	R3 = new SFRotation(1, 0, 0, 0.1);
	P1 = new SFRotation(0, 0, 1, 0.15);
	P2 = new SFRotation(0, 0, 1, -0.15);
	P3 = new SFRotation(0, 0, 1, 0.15);
	this.proxy.PitchValue = new MFRotation(P1, P2, P3);
	this.proxy.RollValue = new MFRotation(R1, R2, R3);
	this.proxy.BuoyanceValue = new MFVec3f(x1, x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,x21,x22,x23,x24,x25,x26,x27,x28,x29,x30,x31,x32,x33,x34,x35,x36,x37,x38,x39,x40,x41)
	this.proxy.BuoyanceKeyValues = new MFFloat( 0, 0.01, 0.02,0.03, 0.04, 0.05, 0.06, 0.07,0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.2500  , 0.2600  , 0.2700  , 0.2800  , 0.2900  , 0.3000  , 0.3100  , 0.3200  , 0.3300  , 0.3400  , 0.3500  , 0.3600  , 0.3700  , 0.3800   ,0.3900   ,0.4000)
	}
}

;

	this.SeaStateChoice7 = function (inputBoolean, timestamp)
{
	if (inputBoolean)
	{
	 this.proxy.SeaStateValue = 6;
	L=9
 	y0=L* -0.0060
	y1=L*0.0710
	y2=L*0.0030
	y3=L*-0.2115
	y4=L*-0.4640
	y5=L*-0.5885
	y6=L*-0.4515
	y7=L*-0.0370
	y8=L*0.5240
	y9=L*0.9950
	y10=L*1.1345
	y11=L*0.8160
	y12=L*0.1025
	y13=L*-0.7565
	y14=L*-1.4155
	y15=L*-1.5765
	y16=L*-1.1230
	y17=L*-0.1865
	y18=L*0.8910
	y19=L*1.6865
	y20=L*1.8670
	y21=L*1.3340
	y22=L*0.2705
	y23=L*-0.9230
	y24=L*-1.7840
	y25=L*-1.9755
	y26=L*-1.4200
	y27=L*-0.3350
	y28=L*0.8590
	y29=L*1.7040
	y30=L*1.8880
	y31=L*1.3640
	y32=L*0.3615
	y33=L*-0.7170
	y34=L*-1.4600
	y35=L*-1.6120
	y36=L*-1.1630
	y37=L*-0.3360
	y38=L*-0.5205
	y39=L*-1.0815
	y40=L*-0.1740
	x1 = new SFVec3f(400, y0, 400);
	x2 = new SFVec3f(390, y1, 390);
	x3 = new SFVec3f(380, y2, 380);
	x4 = new SFVec3f(370, y3, 370);
	x5 = new SFVec3f(360, y4, 360);
	x6= new SFVec3f(350, y5, 350);
	x7 = new SFVec3f(340, y6, 340);
	x8 = new SFVec3f(330, y7, 330);
	x9 = new SFVec3f(320, y8, 320);
	x10 = new SFVec3f(310,y9, 310);
	x11 = new SFVec3f(300, y10, 300);
	x12 = new SFVec3f(290, y11, 290);
	x13 = new SFVec3f(280, y12, 280);
	x14 = new SFVec3f(260, y13, 260);
	x15 = new SFVec3f(250, y14, 250);
	x16= new SFVec3f(240, y15, 240);
	x17 = new SFVec3f(230, y16, 230);
	x18 = new SFVec3f(220, y17, 220);
	x19 = new SFVec3f(210, y18, 210);
	x20 = new SFVec3f(200,y19, 200);
	x21 = new SFVec3f(190, y20, 190);
	x22 = new SFVec3f(180, y21, 180);
	x23 = new SFVec3f(170, y22, 170);
	x24 = new SFVec3f(160, y23, 160);
	x25 = new SFVec3f(150, y4, 150);
	x26= new SFVec3f(140, y25, 140);
	x27 = new SFVec3f(130, y26, 130);
	x28 = new SFVec3f(120, y27, 120);
	x29 = new SFVec3f(110, y28, 110);
	x30 = new SFVec3f(100, y29, 100);
	x31 = new SFVec3f(90, y30, 90);
	x32= new SFVec3f(80, y31, 80);
	x33 = new SFVec3f(70, y32, 70);
	x34 = new SFVec3f(60, y33, 60);
	x35 = new SFVec3f(50, y34, 50);
	x36= new SFVec3f(40, y35, 40);
	x37 = new SFVec3f(30, y36, 30);
	x38 = new SFVec3f(20, y37, 20);
	x39 = new SFVec3f(10, y38, 10);
	x40 = new SFVec3f(5,y39, 5);
	x41 = new SFVec3f(0,y40, 0);
	R1 = new SFRotation(1, 0, 0, 0.15);
	R2 = new SFRotation(1, 0, 0, -0.15);
	R3 = new SFRotation(1, 0, 0, 0.15);
	P1 = new SFRotation(0, 0, 1, 0.2);
	P2 = new SFRotation(0, 0, 1, -0.2);
	P3 = new SFRotation(0, 0, 1, 0.2);
	this.proxy.PitchValue = new MFRotation(P1, P2, P3);
	this.proxy.RollValue = new MFRotation(R1, R2, R3);
	this.proxy.BuoyanceValue = new MFVec3f(x1, x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,x21,x22,x23,x24,x25,x26,x27,x28,x29,x30,x31,x32,x33,x34,x35,x36,x37,x38,x39,x40,x41)
	this.proxy.BuoyanceKeyValues = new MFFloat( 0, 0.01, 0.02,0.03, 0.04, 0.05, 0.06, 0.07,0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.2500  , 0.2600  , 0.2700  , 0.2800  , 0.2900  , 0.3000  , 0.3100  , 0.3200  , 0.3300  , 0.3400  , 0.3500  , 0.3600  , 0.3700  , 0.3800   ,0.3900   ,0.4000)
	}
}

;

	this.SeaStateChoice8 = function (inputBoolean, timestamp)
{
	if (inputBoolean)
	{
	this.proxy.SeaStateValue = 7;
	L=10
 	y0=L* -0.0060
	y1=L*0.0710
	y2=L*0.0030
	y3=L*-0.2115
	y4=L*-0.4640
	y5=L*-0.5885
	y6=L*-0.4515
	y7=L*-0.0370
	y8=L*0.5240
	y9=L*0.9950
	y10=L*1.1345
	y11=L*0.8160
	y12=L*0.1025
	y13=L*-0.7565
	y14=L*-1.4155
	y15=L*-1.5765
	y16=L*-1.1230
	y17=L*-0.1865
	y18=L*0.8910
	y19=L*1.6865
	y20=L*1.8670
	y21=L*1.3340
	y22=L*0.2705
	y23=L*-0.9230
	y24=L*-1.7840
	y25=L*-1.9755
	y26=L*-1.4200
	y27=L*-0.3350
	y28=L*0.8590
	y29=L*1.7040
	y30=L*1.8880
	y31=L*1.3640
	y32=L*0.3615
	y33=L*-0.7170
	y34=L*-1.4600
	y35=L*-1.6120
	y36=L*-1.1630
	y37=L*-0.3360
	y38=L*-0.5205
	y39=L*-1.0815
	y40=L*-0.1740
	x1 = new SFVec3f(400, y0, 400);
	x2 = new SFVec3f(390, y1, 390);
	x3 = new SFVec3f(380, y2, 380);
	x4 = new SFVec3f(370, y3, 370);
	x5 = new SFVec3f(360, y4, 360);
	x6= new SFVec3f(350, y5, 350);
	x7 = new SFVec3f(340, y6, 340);
	x8 = new SFVec3f(330, y7, 330);
	x9 = new SFVec3f(320, y8, 320);
	x10 = new SFVec3f(310,y9, 310);
	x11 = new SFVec3f(300, y10, 300);
	x12 = new SFVec3f(290, y11, 290);
	x13 = new SFVec3f(280, y12, 280);
	x14 = new SFVec3f(260, y13, 260);
	x15 = new SFVec3f(250, y14, 250);
	x16= new SFVec3f(240, y15, 240);
	x17 = new SFVec3f(230, y16, 230);
	x18 = new SFVec3f(220, y17, 220);
	x19 = new SFVec3f(210, y18, 210);
	x20 = new SFVec3f(200,y19, 200);
	x21 = new SFVec3f(190, y20, 190);
	x22 = new SFVec3f(180, y21, 180);
	x23 = new SFVec3f(170, y22, 170);
	x24 = new SFVec3f(160, y23, 160);
	x25 = new SFVec3f(150, y4, 150);
	x26= new SFVec3f(140, y25, 140);
	x27 = new SFVec3f(130, y26, 130);
	x28 = new SFVec3f(120, y27, 120);
	x29 = new SFVec3f(110, y28, 110);
	x30 = new SFVec3f(100, y29, 100);
	x31 = new SFVec3f(90, y30, 90);
	x32= new SFVec3f(80, y31, 80);
	x33 = new SFVec3f(70, y32, 70);
	x34 = new SFVec3f(60, y33, 60);
	x35 = new SFVec3f(50, y34, 50);
	x36= new SFVec3f(40, y35, 40);
	x37 = new SFVec3f(30, y36, 30);
	x38 = new SFVec3f(20, y37, 20);
	x39 = new SFVec3f(10, y38, 10);
	x40 = new SFVec3f(5,y39, 5);
	x41 = new SFVec3f(0,y40, 0);
	R1 = new SFRotation(1, 0, 0, 0.25);
	R2 = new SFRotation(1, 0, 0, -0.25);
	R3 = new SFRotation(1, 0, 0, 0.25);
	P1 = new SFRotation(0, 0, 1, 0.3);
	P2 = new SFRotation(0, 0, 1, -0.3);
	P3 = new SFRotation(0, 0, 1, 0.3);
	this.proxy.PitchValue = new MFRotation(P1, P2, P3);
	this.proxy.RollValue = new MFRotation(R1, R2, R3);
	this.proxy.BuoyanceValue = new MFVec3f(x1, x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,x21,x22,x23,x24,x25,x26,x27,x28,x29,x30,x31,x32,x33,x34,x35,x36,x37,x38,x39,x40,x41)
	this.proxy.BuoyanceKeyValues = new MFFloat( 0, 0.01, 0.02,0.03, 0.04, 0.05, 0.06, 0.07,0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.2500  , 0.2600  , 0.2700  , 0.2800  , 0.2900  , 0.3000  , 0.3100  , 0.3200  , 0.3300  , 0.3400  , 0.3500  , 0.3600  , 0.3700  , 0.3800   ,0.3900   ,0.4000)
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].initialize();
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState1")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState1").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice1(X3DJSON.nodeUtil("Scene","TouchSensorSeaState1","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice1(X3DJSON.nodeUtil("Scene","TouchSensorSeaState1","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState2")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState2").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice2(X3DJSON.nodeUtil("Scene","TouchSensorSeaState2","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice2(X3DJSON.nodeUtil("Scene","TouchSensorSeaState2","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState3")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState3").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice3(X3DJSON.nodeUtil("Scene","TouchSensorSeaState3","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice3(X3DJSON.nodeUtil("Scene","TouchSensorSeaState3","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState4")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState4").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice4(X3DJSON.nodeUtil("Scene","TouchSensorSeaState4","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice4(X3DJSON.nodeUtil("Scene","TouchSensorSeaState4","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState5")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState5").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice5(X3DJSON.nodeUtil("Scene","TouchSensorSeaState5","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice5(X3DJSON.nodeUtil("Scene","TouchSensorSeaState5","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState6")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState6").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice6(X3DJSON.nodeUtil("Scene","TouchSensorSeaState6","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice6(X3DJSON.nodeUtil("Scene","TouchSensorSeaState6","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState7")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState7").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice7(X3DJSON.nodeUtil("Scene","TouchSensorSeaState7","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice7(X3DJSON.nodeUtil("Scene","TouchSensorSeaState7","isActive"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","TouchSensorSeaState8")) {
X3DJSON.nodeUtil("Scene","TouchSensorSeaState8").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice8(X3DJSON.nodeUtil("Scene","TouchSensorSeaState8","isActive"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice8(X3DJSON.nodeUtil("Scene","TouchSensorSeaState8","isActive"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['SeaStateValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['SeaStateValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['SeaStateValue'].push(function(property, value) {
		if (property === 'SeaStateValue') {
			X3DJSON.nodeUtil("Scene","SeaStateNumber","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SeaStateNumber","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateValue, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['BuoyanceValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['BuoyanceValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['BuoyanceValue'].push(function(property, value) {
		if (property === 'BuoyanceValue') {
			X3DJSON.nodeUtil("Scene","ShipBuoyanceHeight","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ShipBuoyanceHeight","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceValue, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['BuoyanceKeyValues'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['BuoyanceKeyValues'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['BuoyanceKeyValues'].push(function(property, value) {
		if (property === 'BuoyanceKeyValues') {
			X3DJSON.nodeUtil("Scene","ShipBuoyanceHeight","key",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceKeyValues === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceKeyValues() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceKeyValues, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","ShipBuoyanceHeight","key",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceKeyValues === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceKeyValues() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceKeyValues, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['PitchValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['PitchValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['PitchValue'].push(function(property, value) {
		if (property === 'PitchValue') {
			X3DJSON.nodeUtil("Scene","Pitch","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].PitchValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].PitchValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].PitchValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Pitch","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].PitchValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].PitchValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].PitchValue, __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['RollValue'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['RollValue'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue']['ACTION']['RollValue'].push(function(property, value) {
		if (property === 'RollValue') {
			X3DJSON.nodeUtil("Scene","Roll","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].RollValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].RollValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].RollValue, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","Roll","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].RollValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].RollValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].RollValue, __eventTime);
    if (X3DJSON.nodeUtil("Scene","Clock")) {
X3DJSON.nodeUtil("Scene","Clock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Ondulation")) {
X3DJSON.nodeUtil("Scene","Ondulation").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PitchClock")) {
X3DJSON.nodeUtil("Scene","PitchClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Pitch")) {
X3DJSON.nodeUtil("Scene","Pitch").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Pitch")) {
X3DJSON.nodeUtil("Scene","Pitch").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","RollClock")) {
X3DJSON.nodeUtil("Scene","RollClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Roll")) {
X3DJSON.nodeUtil("Scene","Roll").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","Roll")) {
X3DJSON.nodeUtil("Scene","Roll").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BuoyanceClock")) {
X3DJSON.nodeUtil("Scene","BuoyanceClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ShipBuoyanceHeight")) {
X3DJSON.nodeUtil("Scene","ShipBuoyanceHeight").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","BuoyanceClock")) {
X3DJSON.nodeUtil("Scene","BuoyanceClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","SubBuoyanceHeigth")) {
X3DJSON.nodeUtil("Scene","SubBuoyanceHeigth").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ShipClock")) {
X3DJSON.nodeUtil("Scene","ShipClock").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","ShipBuoyanceHeight")) {
X3DJSON.nodeUtil("Scene","ShipBuoyanceHeight").addEventListener('outputchange', function(event) {
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice1(X3DJSON.nodeUtil("Scene","TouchSensorSeaState1","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice2(X3DJSON.nodeUtil("Scene","TouchSensorSeaState2","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice3(X3DJSON.nodeUtil("Scene","TouchSensorSeaState3","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice4(X3DJSON.nodeUtil("Scene","TouchSensorSeaState4","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice5(X3DJSON.nodeUtil("Scene","TouchSensorSeaState5","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice6(X3DJSON.nodeUtil("Scene","TouchSensorSeaState6","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice7(X3DJSON.nodeUtil("Scene","TouchSensorSeaState7","isActive"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateChoice8(X3DJSON.nodeUtil("Scene","TouchSensorSeaState8","isActive"), __eventTime);
			X3DJSON.nodeUtil("Scene","SeaStateNumber","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].SeaStateValue, __eventTime);
			X3DJSON.nodeUtil("Scene","ShipBuoyanceHeight","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceValue, __eventTime);
			X3DJSON.nodeUtil("Scene","ShipBuoyanceHeight","key",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceKeyValues === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceKeyValues() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].BuoyanceKeyValues, __eventTime);
			X3DJSON.nodeUtil("Scene","Pitch","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].PitchValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].PitchValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].PitchValue, __eventTime);
			X3DJSON.nodeUtil("Scene","Roll","keyValue",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].RollValue === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].RollValue() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/Environment/SeaState/MoveSeaByExtrusion14.json']['SeaStateChoiceToValue'].RollValue, __eventTime);