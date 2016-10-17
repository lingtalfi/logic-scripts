 


// your external surface's params
 var channelSrc = 1;
 var ccSrc = 16;

// destination
 var channelDst = 1;
 var ccDst = 1; // 1 = modulation wheel


 function HandleMIDI(event) {
 

 	// detecting the control number on my nanoKONTROL2
 	if (
 		event instanceof ControlChange &&
 		channelSrc == event.channel && 
 		ccSrc == event.number 
 		){
 		event.channel = channelDst;
 		event.number = ccDst;
 	}

 	//event.trace();
 	event.send();
 }



function ParameterChanged(param, value) {

	if(0 == param){
		channelSrc = value;
	}
	else if(1 == param){
		ccSrc = value;
	}
	else if(2 == param){
		channelDst = value;
	}
	else if(3 == param){
		ccDst = value;
	}
    
}



 //define UI parameters 
var PluginParameters = [
{name:"Src channel", defaultValue:1, minValue:1, maxValue:16, numberOfSteps:15, type:"linear"}, 
{name:"Src CC", defaultValue:16, minValue:0, maxValue:127, numberOfSteps:127, type:"linear"}, 
{name:"Dst channel", defaultValue:1, minValue:1, maxValue:16, numberOfSteps:15, type:"linear"}, 
{name:"Dst CC", defaultValue:1, minValue:0, maxValue:127, numberOfSteps:127, type:"linear"}
];