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
if (typeof X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json'] === 'undefined') {
	X3DJSON['SceneC:/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json'] = {};
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
if (typeof X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json'] === 'undefined') {
X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json'] = {};
}

X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json']['BuoyCommunicationsGridScript'] = function() {
	this.set_buoyArray = function (value) {
		try {
			this.proxy.buoyArray = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting buoyArray '+e);
			console.error('Problems setting buoyArray',e);
		}
	};
	this.buoyArray_changed = function () {
		var value = this.buoyArray;
		return value;
	};
	try {
		this.buoyArray = new MFNode();
	} catch (e) {
		console.log('Problems setting buoyArray '+e);
		console.error('Problems setting buoyArray',e);
	}
	this.set_buoyCommunicationsRoutingTable = function (value) {
		try {
			this.proxy.buoyCommunicationsRoutingTable = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting buoyCommunicationsRoutingTable '+e);
			console.error('Problems setting buoyCommunicationsRoutingTable',e);
		}
	};
	this.buoyCommunicationsRoutingTable_changed = function () {
		var value = this.buoyCommunicationsRoutingTable;
		return value;
	};
	try {
		this.buoyCommunicationsRoutingTable = new MFInt32();
	} catch (e) {
		console.log('Problems setting buoyCommunicationsRoutingTable '+e);
		console.error('Problems setting buoyCommunicationsRoutingTable',e);
	}
	this.set_senderPosition = function (value) {
		try {
			this.proxy.senderPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting senderPosition '+e);
			console.error('Problems setting senderPosition',e);
		}
	};
	this.senderPosition_changed = function () {
		var value = this.senderPosition;
		return value;
	};
	try {
		this.senderPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting senderPosition '+e);
		console.error('Problems setting senderPosition',e);
	}
	this.set_senderPosition = function (value) {
		try {
			this.proxy.senderPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting senderPosition '+e);
			console.error('Problems setting senderPosition',e);
		}
	};
	this.senderPosition_changed = function () {
		var value = this.senderPosition;
		return value;
	};
	try {
		this.senderPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting senderPosition '+e);
		console.error('Problems setting senderPosition',e);
	}
	this.set_receiverPosition = function (value) {
		try {
			this.proxy.receiverPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting receiverPosition '+e);
			console.error('Problems setting receiverPosition',e);
		}
	};
	this.receiverPosition_changed = function () {
		var value = this.receiverPosition;
		return value;
	};
	try {
		this.receiverPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting receiverPosition '+e);
		console.error('Problems setting receiverPosition',e);
	}
	this.set_receiverPosition = function (value) {
		try {
			this.proxy.receiverPosition = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting receiverPosition '+e);
			console.error('Problems setting receiverPosition',e);
		}
	};
	this.receiverPosition_changed = function () {
		var value = this.receiverPosition;
		return value;
	};
	try {
		this.receiverPosition = new SFVec3f();
	} catch (e) {
		console.log('Problems setting receiverPosition '+e);
		console.error('Problems setting receiverPosition',e);
	}
	this.set_textMessage = function (value) {
		try {
			this.proxy.textMessage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting textMessage '+e);
			console.error('Problems setting textMessage',e);
		}
	};
	this.textMessage_changed = function () {
		var value = this.textMessage;
		return value;
	};
	try {
		this.textMessage = new MFString();
	} catch (e) {
		console.log('Problems setting textMessage '+e);
		console.error('Problems setting textMessage',e);
	}
	this.set_textMessage = function (value) {
		try {
			this.proxy.textMessage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting textMessage '+e);
			console.error('Problems setting textMessage',e);
		}
	};
	this.textMessage_changed = function () {
		var value = this.textMessage;
		return value;
	};
	try {
		this.textMessage = new MFString();
	} catch (e) {
		console.log('Problems setting textMessage '+e);
		console.error('Problems setting textMessage',e);
	}
	this.set_sendMessage = function (value) {
		try {
			this.proxy.sendMessage = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting sendMessage '+e);
			console.error('Problems setting sendMessage',e);
		}
	};
	this.sendMessage_changed = function () {
		var value = this.sendMessage;
		return value;
	};
	try {
		this.sendMessage = new SFBool();
	} catch (e) {
		console.log('Problems setting sendMessage '+e);
		console.error('Problems setting sendMessage',e);
	}
	this.set_traceEnabled = function (value) {
		try {
			this.proxy.traceEnabled = (typeof value === 'string' && typeof value.indexOf === 'function' && value.indexOf(',') >= 0 ? value.split(/[ ,]+/) : value);
		} catch (e) {
			console.log('Problems setting traceEnabled '+e);
			console.error('Problems setting traceEnabled',e);
		}
	};
	this.traceEnabled_changed = function () {
		var value = this.traceEnabled;
		return value;
	};
	try {
		this.traceEnabled = new SFBool(true);
	} catch (e) {
		console.log('Problems setting traceEnabled '+e);
		console.error('Problems setting traceEnabled',e);
	}


ecmascript:

	this.alwaysPrint = function (text)
{
	console.error ('[BuoyCommunicationsGrid]' + text);
};

	this.tracePrint = function (text)
{
	if (this.proxy.traceEnabled) console.error ('[BuoyCommunicationsGrid]' + text);
};

	this.set_senderPosition = function (value, timestamp)
{
	this.proxy.senderPosition = value;
};

	this.set_receiverPosition = function (value, timestamp)
{
	this.proxy.receiverPosition = value;
};

	this.set_textMessage = function (value, timestamp)
{
	this.proxy.textMessage = value;
};

	this.distance = function (p1, p2) // inputs:  SFVec3f, output: float
{
	// square root of sum of sum of squares
	dx = (p1.x - p2.x);
	dy = (p1.y - p2.y);
	dz = (p1.z - p2.z);
	d = Math.sqrt (dx*dx + dy*dy + dz*dz);
//	this.tracePrint ('this.distance (' + p1 + ',' + p2 + ') =' + d);
	return d;
};

	this.timeSoundTravels = function (this.distance) // input: float meters, output: float seconds
{
	// speed of sound in water = 1500 m/s
	timeInterval = this.distance / 1500;
	this.tracePrint ('sound travels' + Math.round(this.distance) + ' meters in' +
	'timeInterval=' + Math.round(timeInterval*1000)/1000 + ' seconds');
	return timeInterval;
};

	this.routingTableIndex = function (senderNodeIndex, destinationNodeIndex)
{
	if ((     senderNodeIndex < 0) || (     senderNodeIndex >= this.proxy.buoyArray.length) ||
	    (destinationNodeIndex < 0) || (destinationNodeIndex >= this.proxy.buoyArray.length))
	   this.alwaysPrint ('this.routingTableIndex () error, input index out of bounds:  senderNodeIndex=' + senderNodeIndex +
	', destinationNodeIndex=' + destinationNodeIndex);
	newIndex = this.proxy.buoyArray.length*senderNodeIndex  + destinationNodeIndex;
	return newIndex;
};

	this.findClosestBuoyIndex = function (position)
{
	closestBuoyIndex = 0;  // this.initialize
	closestDistance  = this.distance (position, this.proxy.buoyArray[0].position);
//	this.tracePrint ('this.distance(position, this.proxy.buoyArray[0].position)=' + Math.round(closestDistance));
	if (this.proxy.buoyArray.length == 1) return closestBuoyIndex;

	for (i=1; i < this.proxy.buoyArray.length; i++) // start comparison loop at second buoy
	{
		d = this.distance (position, this.proxy.buoyArray[i].position);
	//	this.tracePrint ('this.distance(position, this.proxy.buoyArray[' + i + '].position)=' + d);
		if (d < closestDistance)
		{
			closestBuoyIndex = i;
			closestDistance  = d;
		//	this.tracePrint ('  closestBuoyIndex=' + closestBuoyIndex);
		}
	}
	this.tracePrint ('closest this.distance(position, this.proxy.buoyArray[' + closestBuoyIndex + '].position)=' + Math.round(closestDistance));
	return closestBuoyIndex;
};

	this.initialize = function ()
{
	n = this.proxy.buoyArray.length;
	this.tracePrint ('this.initialize() this.proxy.buoyArray.length=' + this.proxy.buoyArray.length);
	this.tracePrint ('this.initialize() this.proxy.buoyCommunicationsRoutingTable=' + this.proxy.buoyCommunicationsRoutingTable);
	this.tracePrint ('this.initialize() this.proxy.buoyCommunicationsRoutingTable.length=' + this.proxy.buoyCommunicationsRoutingTable.length);

	// check that routing table is a properly sized square array
	if (this.proxy.buoyCommunicationsRoutingTable.length != n*n)
	{
		this.alwaysPrint ('this.initialize() invalid this.proxy.buoyCommunicationsRoutingTable.length=' + this.proxy.buoyCommunicationsRoutingTable.length +
			   ', should = (' + n + '*' + n + ') =' + (n*n));
	}
	this.tracePrint ('this.initialize() square table check complete');
	// check for routing table loop from node to itself
	for (i=0; i < n; i++)
	{
	//	this.tracePrint ('this.initialize() this.proxy.buoyCommunicationsRoutingTable[this.routingTableIndex(' + i + ',' + i + ')]=' + this.proxy.buoyCommunicationsRoutingTable[this.routingTableIndex(i,i)] );
		if (this.proxy.buoyCommunicationsRoutingTable[this.routingTableIndex(i,i)] != -1)
		this.alwaysPrint ('this.initialize() invalid this.proxy.buoyCommunicationsRoutingTable[' + i + ']=' +
			             this.proxy.buoyCommunicationsRoutingTable[i] +
		' rather than -1, since node (' + i +
		') cannot route to itself');
	}
	this.tracePrint ('this.initialize() self route check complete');
	// check routing table values are legal
	for (i=0; i < n; i++)
	{
		for (j=0; j < n; j++)
		{
			k = this.proxy.buoyCommunicationsRoutingTable[this.routingTableIndex (i, j)];
		//	this.tracePrint ('this.initialize() this.routingTableIndex (' + i + ',' + j + ') =' + k);
			if ((this.proxy.buoyCommunicationsRoutingTable[k] < -1) ||
			    (this.proxy.buoyCommunicationsRoutingTable[k] >= this.proxy.buoyCommunicationsRoutingTable.length))
				this.alwaysPrint ('this.initialize() *** invalid this.proxy.buoyCommunicationsRoutingTable[' + i + ',' + j + ']=' +
				     this.proxy.buoyCommunicationsRoutingTable[k]);
		}
	}
	// TODO:  check for other routing table loops?

	this.tracePrint ('this.initialize() complete');
};

	this.sendMessage = function (value, timestamp)
{
	if (value != true)
	{
		if (value != false) this.tracePrint ('this.proxy.sendMessage() exiting, passed value=' + value);
		return;
	}
	// run-time setup happens here!   execution of all buoys occurs upon returning.
	// prepare the scene graph for a message sequence, then start it.

	// first find shortest distances and thus closest buoys to sender and receiver
	senderNodeIndex      = this.findClosestBuoyIndex(this.proxy.senderPosition);
	destinationNodeIndex = this.findClosestBuoyIndex(this.proxy.receiverPosition);
	this.tracePrint ('     senderNodeIndex=' +      senderNodeIndex + ' (' + this.proxy.senderPosition   + ')');
	this.tracePrint ('destinationNodeIndex=' + destinationNodeIndex + ' (' + this.proxy.receiverPosition + ')');

	// TODO:  sound beam from sender to senderNode or receiver (whichever is closest)

	if (senderNodeIndex == destinationNodeIndex)
	{
		this.tracePrint ('senderNode and destinationNode are the same, no message sent');
		this.tracePrint ('=============================================');
		return;
	}
	transmissionDuration  = 1;
	this.tracePrint ('transmissionDuration=' + transmissionDuration);

	// compute path (sequence of buoy IDs) from closest buoy to SeaWeb buoy
	// compute full buoy-to-buoy routing paths for current sender-receiver combination

	hopCount = 0;
	maxHopCount = this.proxy.buoyArray.length - 1;
	nextNodeIndex = -2;
	nodePath = new MFInt32();
	nodePath[nodePath.length] = senderNodeIndex;
	nodePathString ='sender, buoys' + senderNodeIndex;
	currentNodeIndex = senderNodeIndex;

	d  = this.distance (this.proxy.senderPosition, this.proxy.buoyArray[senderNodeIndex].position);
	dt = this.timeSoundTravels (d);
	accumulatedRange = d;
	accumulatedDelay = 2 * (dt + transmissionDuration);
	this.tracePrint ('this.distance=' + Math.round(d) + ', accumulatedRange=' + Math.round(accumulatedRange)
		+ ', accumulatedDelay=' + Math.round(accumulatedDelay*1000)/1000);

	while ((nextNodeIndex != -1) && (hopCount <= maxHopCount))
	{
		this.tracePrint ('=====');
		tableIndex = this.routingTableIndex (currentNodeIndex, destinationNodeIndex);
		nextNodeIndex = this.proxy.buoyCommunicationsRoutingTable[tableIndex];
		this.tracePrint ('currentNodeIndex=' + currentNodeIndex + ', nextNodeIndex=' + nextNodeIndex + ', tableIndex=' + tableIndex);

		// check if dead end - incomplete communication path
		if (nextNodeIndex < 0)
		{
			this.alwaysPrint ('*** hit a dead end! no further routing possible.');
			return nextNodeIndex;
			// consider not animating any buoys, i.e. whether or not partial routing allowed
		}
		hopCount++;
	//	this.tracePrint ('hopCount=' + hopCount + ', maxHopCount=' + maxHopCount);

		// communicate from currentNodeIndex buoy to nextNodeIndex buoy
		// by sending initialization values to each buoy in path:
		// message, target buoy ID/position, and then compute this.distance/time to travel
		// to set time delay of each buoy prior to start of each transmission.

		this.proxy.buoyArray[currentNodeIndex].proxy.textMessage = this.proxy.textMessage;
		this.proxy.buoyArray[currentNodeIndex].targetIdNumber = nextNodeIndex;
		this.proxy.buoyArray[currentNodeIndex].targetPosition = this.proxy.buoyArray[nextNodeIndex].position;
		d  = this.distance (	this.proxy.buoyArray[currentNodeIndex].position, this.proxy.buoyArray[nextNodeIndex].position);
		dt = this.timeSoundTravels (d);
		accumulatedRange += d;
		accumulatedDelay += 2 * (dt + transmissionDuration);
		this.proxy.buoyArray[currentNodeIndex].range  = d;
		this.proxy.buoyArray[currentNodeIndex].transmissionDuration  = transmissionDuration;
		this.proxy.buoyArray[currentNodeIndex].transmissionTimeDelay = accumulatedDelay;
		this.proxy.buoyArray[currentNodeIndex].set_activated = true;

		// set up for next time through loop:
		currentNodeIndex = nextNodeIndex;
		nodePath[nodePath.length] = nextNodeIndex;
		nodePathString +=',' + nextNodeIndex;
		this.tracePrint ('this.distance=' + Math.round(d) + ', accumulatedRange=' + Math.round(accumulatedRange)
			+ ', accumulatedDelay=' + Math.round(accumulatedDelay*1000)/1000);

		if (nextNodeIndex == destinationNodeIndex) break;
	}
	this.tracePrint ('====='); // last node to destination follows
	this.tracePrint ('destinationNodeIndex=' + destinationNodeIndex + ' to receiver');
	this.proxy.buoyArray[currentNodeIndex].proxy.textMessage = this.proxy.textMessage;
	this.proxy.buoyArray[currentNodeIndex].targetIdNumber = -2;
	this.proxy.buoyArray[currentNodeIndex].targetPosition = this.proxy.receiverPosition;
	d  = this.distance (	this.proxy.buoyArray[destinationNodeIndex].position, this.proxy.receiverPosition);
	dt = this.timeSoundTravels (d);
	accumulatedRange += d;
	accumulatedDelay += 2 * (dt + transmissionDuration);
	this.proxy.buoyArray[currentNodeIndex].range  = d;
	this.proxy.buoyArray[currentNodeIndex].transmissionDuration  = transmissionDuration;
	this.proxy.buoyArray[destinationNodeIndex].transmissionTimeDelay = accumulatedDelay ;
	this.proxy.buoyArray[destinationNodeIndex].set_activated = true;

	this.tracePrint ('this.distance=' + Math.round(d) + ', accumulatedRange=' + Math.round(accumulatedRange)
		+ ', accumulatedDelay=' + Math.round(accumulatedDelay*1000)/1000);

	this.tracePrint ('=====');
	this.tracePrint ('path destination found, buoy hopCount=' + hopCount + ', nodePath=' + nodePathString + ', receiver');
	for (i=0; i < nodePath.length; i++)
	{
		j = nodePath[i];
		this.tracePrint ('node=' + nodePath[i]
			+ ', this.proxy.buoyArray[' + nodePath[i] + '].transmissionTimeDelay=' + Math.round(this.proxy.buoyArray[nodePath[i]].transmissionTimeDelay*1000)/1000);
	}
	this.tracePrint ('=============================================');

	// TODO: do we need to trigger the RACOM radio at this point?
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
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json'] = {};
}

X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json']['BuoyCommunicationsGridScript'] = new X3DJSON['Script']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json']['BuoyCommunicationsGridScript']();
if (typeof X3DJSON['Obj'] === 'undefined') {
X3DJSON['Obj'] = {};
}
if (typeof X3DJSON['Obj']['Scene'] === 'undefined') {
X3DJSON['Obj']['Scene'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C'] === 'undefined') {
X3DJSON['Obj']['Scene']['C'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json'] = {};
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json']['BuoyCommunicationsGridScript'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json']['BuoyCommunicationsGridScript'] = {};
}

if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json']['BuoyCommunicationsGridScript']['ACTION'] === 'undefined') {
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json']['BuoyCommunicationsGridScript']['ACTION'] = {};
X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json']['BuoyCommunicationsGridScript'].proxy = X3DJSON.createProxy(X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json']['BuoyCommunicationsGridScript']['ACTION'],X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json']['BuoyCommunicationsGridScript']);
}
if (typeof X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json']['BuoyCommunicationsGridScript'].initialize === "function") X3DJSON['Obj']['Scene']['C']['/Users/jcarl/www.web3d.org/x3d/content/examples/Savage/CommunicationsAndSensors/SeaWeb/BuoyCommunicationsGridPrototype.json']['BuoyCommunicationsGridScript'].initialize();

