function startStory() {

	// init first timeline, tie it to the audio element '#song'
	// set the loop action for this timeline to display players currentTime in #timer 

	timelines[0] = new Timeline('audio');
	timelines[0].loopAction = function() {  $('#timer').html(Math.floor(this.currentTime() / 1000)); }
	timelines[0].attachedTo = 'song';
	$('#theater').html('');
	$('#theater').css('backgroundColor', 'black'); 
	                                         
	// adding actions, in this case timed lyrics	                                         
	                                         
	timelines[0].addAction(new Action(1000,  function() { $('#theater').html('I see your face every morning'); ;  }));	
	timelines[0].addAction(new Action(6700, function() { $('#theater').html('I watch the years passing by'); }));	
	timelines[0].addAction(new Action(13000, function() { $('#theater').html('Dye your hair yellow dye it violet'); }));	
	timelines[0].addAction(new Action(19000, function() { $('#theater').html('Whatever colour you might like'); }));	
  timelines[0].addAction(new Action(24700, function() { $('#theater').html('Still I know what’s behind it'); }));	
  timelines[0].addAction(new Action(30500, function() { $('#theater').html('I know the colour you trying to hide'); }));
	
	// you can easily stop the timeline and make it start again; when it's an audio element, it will restart from the beginning	
	timelines[0].addAction(new Action(36000, function() { $('#theater').html(''); timelines[0].stopTimeline(); timelines[0].startTimeline();  }));

	//preparing another timeline, independent of the other, this one being counted by the browsers RequestAnimationFrame

	timelines[1] = new Timeline('time');  
  timelines[1].addAction(new Action(3000,  function() { $('#theater').css('backgroundColor', '#333');  }));	
	timelines[1].addAction(new Action(6000, function() { $('#theater').css('backgroundColor', '#666'); }));	
	timelines[1].addAction(new Action(9000, function() { $('#theater').css('backgroundColor', '#999'); }));	
	timelines[1].addAction(new Action(12000, function() { $('#theater').css('backgroundColor', '#666'); }));	
	timelines[1].addAction(new Action(15000, function() { $('#theater').css('backgroundColor', '#333'); }));	
	
	// making a final action and restarting the other timeline, this time with a specific restartTimeline function
	
	timelines[1].addAction(new Action(18000, function() { $('#theater').css('backgroundColor', 'black'); timelines[1].restartTimeline(); }));	

	// starting both timelines

  timelines[0].startTimeline();
  timelines[1].startTimeline();
 	
}

function stopStory() {
	
	// stopping both timelines
	
  timelines[0].stopTimeline();
  timelines[1].stopTimeline();
}
