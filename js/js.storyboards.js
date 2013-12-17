var delta;
var then;
var now;
var interval = 16;
var timelines = new Array();

// browser fallbacks in case requestAnimationFrame is not supported

window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(/* function */ callback, /* DOMElement */ element) {
			window.setTimeout(callback, 1000 / 60);
		};
})();

// main loop

function mainLoop() {
  now = Date.now();
  delta = now - then;
    
  if (delta > interval) {
		for (var i in timelines) {
			timelines[i].loopAction();
			if (timelines[i].isStarted()) {
				checkAction(timelines[i], now);
			}
		}
	}
	then = now - (delta % interval);
  requestAnimFrame(mainLoop);
}

// check for Actions to activate in selected timeline

function checkAction(timeline) {
	for (var i in timeline.actions) {
		if (!timeline.actions[i].played && timeline.actions[i].timestamp < timeline.currentTime()) {
			timeline.actions[i].played = true;
			doAction(timeline.actions[i]);
			break;
		}
	}
}

// exectute active Action

function doAction(action) {
	action.played = true;
	action.func();
}

// define Action object

function Action(timestamp, func) {
	this.func = func; 
	this.timestamp = timestamp;
	this.played = false;  
}

// define Timeline object

function Timeline(type) {
	this.type = type ? type : 'time';
	this.startTime = undefined;
	this.attachedTo = undefined;
	this.actions = new Array();
	this.loopAction = function() { }
	this.addAction = function(action) {
		var timestamp = action.timestamp; 
		this.actions[timestamp] = action;
	}
	this.currentTime = function() {
		switch (this.type) {
			case 'time':
				return Date.now() - this.startTime;
			break;
			case 'audio':
				return document.getElementById(this.attachedTo).currentTime * 1000;
			break;			
		}
	}
	this.stopTimeline = function() {
		this.active = false;
			for (var i in this.actions) {
				this.actions[i].played = false;
			}
		if (this.type == 'audio') {
			document.getElementById(this.attachedTo).pause();
			document.getElementById(this.attachedTo).currentTime = 0;
		}
	}
	this.startTimeline = function() {
		this.active = true;
		this.startTime = Date.now();
		if (this.type == 'audio') { 
			document.getElementById(this.attachedTo).play();
		}
		now = Date.now();
		then = Date.now();
	}
	this.restartTimeline = function() {
		this.stopTimeline();
		this.startTimeline();
	}
	this.active = false;
	this.isStarted = function() {
		return this.active;
	}
}

mainLoop();