js-storyboards
==============

JS Storyboards - simple script for creating independent timelines for custom events

Using this script you can plan an unlimited number of actions to happen on a web page, in anunlimited number of separate timelines. These actions can be dependent on current time (with relation to the timeline's starting time) or playing time of several media elements - right now, HTML5 audio element and Youtube API player are supported.

You can time a nice intro for your webpage.
You can play a song, and display lyrics, show images, play animations, effects - whatever your can 

imagine.

Features:
#########

- Define your own timelines
- Timeline can be a timer/audio element/youtube player
- Set actions for each timeline, in millisecond
- Actions are in no way limited - it can be any custom or predefined funcion
- For each "tick" of the main loop, execute an action
- For each timeline, you can assign a function to be executed in the timeline main loop - not just 

when an action is planned.
- Start/Restart/Stop a timeline at any moment - even from other timelines

Future functionality:
#####################

- audio element with multiple sources
- HTML5 video player
- recurring actions - time your action every <n> milliseconds


Prerequisites
#############

None. You are free to use any framework you like for your custom actions.

Usage
#####

See 'examples' folder, you'll find a demo for the timer timeline, in combination with either audio element or youtube player.
This example shows a complex timeline, with music, images and videos with fadeouts and various transitions:

http://dojnet.czweb.org/superticket/


