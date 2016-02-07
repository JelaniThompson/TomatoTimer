'use strict';

//Jet fuel can't melt dank memes

//Visual representation of work/break times and counter
let $workDisplay = $("#workNum"),
    $breakDisplay = $("#breakNum"),
    $workMinus = $(".workMinus"),
    $workPlus = $(".workPlus"),
    $breakMinus = $(".breakMinus"),
    $breakPlus = $(".breakPlus"),
    $counter = $("#counter");

//Create a date object for the start 
let date = new Date(0, 0, 0, 0, 0, 0, 0);

//Alarm audio
let alarmSound = new Audio('http://www.oringz.com/oringz-uploads/b2_oringz-pack-nine-17.mp3');

let state = 'off';

//Default value for minutes (25)
date.setMinutes(25);

//Prevent delayed loading in
$workDisplay.text(date.getMinutes());
$counter.text(date.getMinutes());

//Return seconds as M:SS
function displayTime(minutes, seconds) {
    if (state == "on") {
        $counter.text(date.getMinutes() + ":" + date.getSeconds());
    }
    //Add a way to check if a number needs a 0 prepended with an if statement (<10)
    if (state == "on") {
        if (date.getSeconds() < 10) {
            $counter.text(date.getMinutes() + ":" + "0" + date.getSeconds());
        }
    }
}

setInterval(function() {
    if (state == 'on') {
        date.setSeconds(date.getSeconds() - 1);
    }
}, 1000);

setInterval(displayTime, 1000);

//Timer states
let toggleTimer = function(newState) {
    let started = true;
    if (state !== 'done') {
        //The ? serves as a toggle (statement ? true value : false value)
        state = newState || (state == 'on' ? 'off' : 'on');
    }
    console.log(state);
    //$counter.text(state);
}

$counter.on('click', () => toggleTimer());

//Shrink these with an if statement later (check Dustin's DMs on Slack)
$workMinus.on('click', function() {
    if (state == "off" && date.getMinutes() > 1) {
        date.setSeconds(0);
        date.setMinutes(date.getMinutes() - 1);
        $workDisplay.text(date.getMinutes());
    }
    //Make it so that workDisplay displays a constant value
});

$workPlus.on('click', function() {
    if (state == "off" && date.getMinutes() < 59) {
        date.setSeconds(0);
        date.setMinutes(date.getMinutes() + 1);
        $workDisplay.text(date.getMinutes());
    }
});

console.log(state);
