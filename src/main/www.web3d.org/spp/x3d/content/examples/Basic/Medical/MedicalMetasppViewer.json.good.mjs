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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'] = function() {
	this.set_hit = function (value) {
		try {
			this.proxy.hit = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting hit '+e);
			console.error('Problems setting hit',e);
		}
	};
	this.hit_changed = function () {
		var value = this.hit;
		return value;
	};
	try {
		this.hit = new SFTime();
	} catch (e) {
		console.log('Problems setting hit '+e);
		console.error('Problems setting hit',e);
	}
	this.set_tog = function (value) {
		try {
			this.proxy.tog = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting tog '+e);
			console.error('Problems setting tog',e);
		}
	};
	this.tog_changed = function () {
		var value = this.tog;
		return value;
	};
	try {
		this.tog = new SFInt32();
	} catch (e) {
		console.log('Problems setting tog '+e);
		console.error('Problems setting tog',e);
	}


ecmascript:

var bit;
	this.initialize = function ()
{ 
    bit = 1;
};

	this.hit = function (val)
{
    if (bit == 1)
    {
        this.proxy.tog = 0;
        bit = 0;
    } 
    else 
    {
        this.proxy.tog = 1;
        bit = 1;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].initialize();
if (typeof X3DJSON['Script'] === 'undefined') {
X3DJSON['Script'] = {};
}
if (typeof X3DJSON['Script']['Scene'] === 'undefined') {
X3DJSON['Script']['Scene'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C'] === 'undefined') {
X3DJSON['Script']['Scene']['C'] = {};
}
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'] = function() {
	this.set_lungTS = function (value) {
		try {
			this.proxy.lungTS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lungTS '+e);
			console.error('Problems setting lungTS',e);
		}
	};
	this.lungTS_changed = function () {
		var value = this.lungTS;
		return value;
	};
	try {
		this.lungTS = new SFBool();
	} catch (e) {
		console.log('Problems setting lungTS '+e);
		console.error('Problems setting lungTS',e);
	}
	this.set_colonTS = function (value) {
		try {
			this.proxy.colonTS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting colonTS '+e);
			console.error('Problems setting colonTS',e);
		}
	};
	this.colonTS_changed = function () {
		var value = this.colonTS;
		return value;
	};
	try {
		this.colonTS = new SFBool();
	} catch (e) {
		console.log('Problems setting colonTS '+e);
		console.error('Problems setting colonTS',e);
	}
	this.set_liverTS = function (value) {
		try {
			this.proxy.liverTS = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting liverTS '+e);
			console.error('Problems setting liverTS',e);
		}
	};
	this.liverTS_changed = function () {
		var value = this.liverTS;
		return value;
	};
	try {
		this.liverTS = new SFBool();
	} catch (e) {
		console.log('Problems setting liverTS '+e);
		console.error('Problems setting liverTS',e);
	}
	this.set_who = function (value) {
		try {
			this.proxy.who = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting who '+e);
			console.error('Problems setting who',e);
		}
	};
	this.who_changed = function () {
		var value = this.who;
		return value;
	};
	try {
		this.who = new SFInt32();
	} catch (e) {
		console.log('Problems setting who '+e);
		console.error('Problems setting who',e);
	}
	this.set_lungMeta = function (value) {
		try {
			this.proxy.lungMeta = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting lungMeta '+e);
			console.error('Problems setting lungMeta',e);
		}
	};
	this.lungMeta_changed = function () {
		var value = this.lungMeta;
		return value;
	};
	try {
		this.lungMeta = X3DJSON.nodeUtil("Scene","undefined");
	} catch (e) {
		console.log('Problems setting lungMeta '+e);
		console.error('Problems setting lungMeta',e);
	}
	this.set_colonMeta = function (value) {
		try {
			this.proxy.colonMeta = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting colonMeta '+e);
			console.error('Problems setting colonMeta',e);
		}
	};
	this.colonMeta_changed = function () {
		var value = this.colonMeta;
		return value;
	};
	try {
		this.colonMeta = X3DJSON.nodeUtil("Scene","undefined");
	} catch (e) {
		console.log('Problems setting colonMeta '+e);
		console.error('Problems setting colonMeta',e);
	}
	this.set_liverMeta = function (value) {
		try {
			this.proxy.liverMeta = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting liverMeta '+e);
			console.error('Problems setting liverMeta',e);
		}
	};
	this.liverMeta_changed = function () {
		var value = this.liverMeta;
		return value;
	};
	try {
		this.liverMeta = X3DJSON.nodeUtil("Scene","undefined");
	} catch (e) {
		console.log('Problems setting liverMeta '+e);
		console.error('Problems setting liverMeta',e);
	}
	this.set_msg = function (value) {
		try {
			this.proxy.msg = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting msg '+e);
			console.error('Problems setting msg',e);
		}
	};
	this.msg_changed = function () {
		var value = this.msg;
		return value;
	};
	try {
		this.msg = new MFString();
	} catch (e) {
		console.log('Problems setting msg '+e);
		console.error('Problems setting msg',e);
	}


ecmascript:

	this.initialize = function ()
{
    this.proxy.msg = new MFString();
    this.proxy.msg[0] = 'Metadata Here';
    this.proxy.msg[1] = 'Metadata Here';
};

	this.lungTS = function (val)
{ 
    //this.proxy.msg = this.buildString(X3DJSON.nodeUtil("Scene","undefined", "")); 
    //this.proxy.msg[0] = X3DJSON.nodeUtil("Scene","undefined", "reference");
    // works in .x3dv not .x3d??? 
    this.proxy.msg[0] = 'FMA parser';
    this.proxy.msg[1] = 'Preferred name: Upper_lobe_of_lung'; 
    this.proxy.msg[2] = 'Synonym: Lobus_superior '; 
    this.proxy.msg[3] = 'Synonym: Superior_lobe_of_lung'; 
} ;

	this.liverTS = function (val)
{ 
    //this.proxy.msg = this.buildString(X3DJSON.nodeUtil("Scene","undefined", "")); 
    //this.proxy.msg[0] = X3DJSON.nodeUtil("Scene","undefined", "reference"); 
    this.proxy.msg[0] = 'FMA mysql';
    this.proxy.msg[1] = 'short_value: Liver';
    this.proxy.msg[2] = 'frame: 26212';
    this.proxy.msg[3] = 'frame_type: 6 ';
} ;

	this.colonTS = function (val)
{ 
    //this.proxy.msg = this.buildString(X3DJSON.nodeUtil("Scene","undefined", "")); 
    // this.proxy.msg[0] = X3DJSON.nodeUtil("Scene","undefined", "reference"); 
    this.proxy.msg[0] ='SNOMED';
    this.proxy.msg[1] = 'conceptId: 369445005 ';
    this.proxy.msg[2] = 'descriptionId: 774149015 ';
    this.proxy.msg[3] = 'fullySpecfiedName: Chronic proctocolitis (disorder)';
} ;

	this.buildString = function (aNode)
{ 
    // walking for metadata works differently across browsers encodings!!! 
    str = new MFString(); 
    str [0] = aNode.reference; 
    // the top DEF'd MetaDataSet 
    tmp = new MFNode(); 
    tmp = aNode.children; 
    console.error(tmp.length); 
    for (i = 0; tmp.length ; i++)
    {
       // this = aNode.children[i]; 
       // // if () // drill down one more level of children 
       return str;
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].initialize();
    if (X3DJSON.nodeUtil("Scene","PS")) {
X3DJSON.nodeUtil("Scene","PS").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","PS")) {
X3DJSON.nodeUtil("Scene","PS").addEventListener('outputchange', function(event) {
}, false);
}
    if (X3DJSON.nodeUtil("Scene","bodyTS")) {
X3DJSON.nodeUtil("Scene","bodyTS").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].hit(X3DJSON.nodeUtil("Scene","bodyTS","touchTime"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].hit(X3DJSON.nodeUtil("Scene","bodyTS","touchTime"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler']['ACTION']['tog'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler']['ACTION']['tog'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler']['ACTION']['tog'].push(function(property, value) {
		if (property === 'tog') {
			X3DJSON.nodeUtil("Scene","SkinSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].tog === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].tog() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].tog, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","SkinSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].tog === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].tog() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].tog, __eventTime);
    if (X3DJSON.nodeUtil("Scene","lungTS")) {
X3DJSON.nodeUtil("Scene","lungTS").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].lungTS(X3DJSON.nodeUtil("Scene","lungTS","isOver"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].lungTS(X3DJSON.nodeUtil("Scene","lungTS","isOver"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","liverTS")) {
X3DJSON.nodeUtil("Scene","liverTS").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].liverTS(X3DJSON.nodeUtil("Scene","liverTS","isOver"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].liverTS(X3DJSON.nodeUtil("Scene","liverTS","isOver"), __eventTime);
    if (X3DJSON.nodeUtil("Scene","colonTS")) {
X3DJSON.nodeUtil("Scene","colonTS").addEventListener('outputchange', function(event) {
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].colonTS(X3DJSON.nodeUtil("Scene","colonTS","isOver"), __eventTime);
}, false);
}
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].colonTS(X3DJSON.nodeUtil("Scene","colonTS","isOver"), __eventTime);
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata']['ACTION']['msg'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata']['ACTION']['msg'] = [];
}
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata']['ACTION']['msg'].push(function(property, value) {
		if (property === 'msg') {
			X3DJSON.nodeUtil("Scene","msg","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].msg === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].msg() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].msg, __eventTime);
		}
});
			X3DJSON.nodeUtil("Scene","msg","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].msg === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].msg() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].msg, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].hit(X3DJSON.nodeUtil("Scene","bodyTS","touchTime"), __eventTime);
			X3DJSON.nodeUtil("Scene","SkinSwitch","whichChoice",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].tog === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].tog() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['toggler'].tog, __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].lungTS(X3DJSON.nodeUtil("Scene","lungTS","isOver"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].liverTS(X3DJSON.nodeUtil("Scene","liverTS","isOver"), __eventTime);
			X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].colonTS(X3DJSON.nodeUtil("Scene","colonTS","isOver"), __eventTime);
			X3DJSON.nodeUtil("Scene","msg","string",typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].msg === "function" ? X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].msg() : X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Basic/Medical/MedicalMetadataViewer.json']['viewMetadata'].msg, __eventTime);