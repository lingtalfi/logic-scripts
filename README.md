Logic Scripts
==================
2016-07-20



This page contains my logic scripts and techniques:

- cc remapper
- controlling hi-hat opening with foot damp pedal





CC remapper
-------------------

This script listen to a control change on a given channel, 
and remaps it to another.

Why?

My keyboard doesn't have a modwheel, but I own a nanoKONTROL2 control surface,
so this script allows me to use any nanoKONTROL2 fader as the modulation wheel.

By extension of this script, we can easily map any channel-cc pair to what we need.




Controlling hi-hat opening with foot damp pedal
------------------------------------------------------

This technique explains the setup I use to control the hi-hat opening with the foot pedal of my clavinova.

This is a little bit long, but fortunately we need to do this once only (per instrument).


First, you need to open logic, and add a "Software Instrument" track.

Then assign the "Drum Kit > Bluebird" (or the kit you like) instrument to that track.

Then open the "Drum Kit Designer" (click the drum kit instrument name in the inspector for instance).

At the bottom left corner of the "Drum Kit Designer" window, click the triangle to open a set of options,
and from there change Input Mapping from "GM" to "GM + ModWheel controls HiHat opening level".


So far so good, and if we had a modwheel we could control the hi-hat opening.
Now we need to tell logic that whatever value is send from the foot pedal should be transformed into a modwheel value
before it reaches the instrument, hang on.


In the inspector, click the MIDI FX (in the effects above the instrument name) and add the "scripter" effect to your drum instrument.

A "Script Editor" window will open (or if it doesn't open it by clicking the "Open Script in Editor").


In the "Script Editor" window, paste the ccRemapper code found here: https://github.com/lingtalfi/logic-scripts/blob/master/scripts/cc-remapper.js.

Then Save it as ccRemapper.pst: "cmd + s" should work, or you can also find the "Save As" option from the drop down menu
of the MidiFX window (the other popup window) where it normally says "Factory Default".

A "save" dialog will prompt you to set the location of the preset.

Script presets are by default located in the following directory: /Users/$yourName/Music/Audio Music Apps/Plug-In Settings/Scripter.

Just accept the default and type ccRemapper.pst and save.

Then, in the "Script Editor" window click the "Run Script" button.

This will open the Script Parameters where you can do the footPedal to modWheel conversion.

In my case, the numbers are:

- Src channel: 15
- Src CC: 64 (this is the cc number for the foot pedal)
- Dst channel: 15
- Dst CC: 1 (this is the cc number for modulation wheel)


If it worked, you can play the hi-hat (it's a B flat note on your keyboard) and press the foot pedal and it will
control it's opening.


Now The source and destination channel (15 in my case) is actually the value of the "MIDI channel" property found in the inspector.
When this is set to All, the channel is actually transposed to 15.

(I'm not sure why, but if you want to know for sure what those numbers are in your case, open the environment and plug a monitor to the output of your drum track.)

So you have to make sure that the "Src channel" and "Dst channel" of your ccRemapper plugin match the actual "MIDI channel"
of your drum instrument.

And, that's it.

Hope that helped.












