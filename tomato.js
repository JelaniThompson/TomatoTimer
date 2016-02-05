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

//Default value for minutes (25)
date.setMinutes(25);

//Prevent delayed loading in
$workDisplay.text(date.getMinutes());
$counter.text(date.getMinutes());

//Return seconds as M:SS
function displayTime(minutes, seconds) {
    $counter.text(date.getMinutes() + ":" + date.getSeconds());
    $workDisplay.text(date.getMinutes());
    //Add a way to check if a number needs a 0 prepended with an if statement (<10)
    if(date.getSeconds() < 10) {
        $counter.text(date.getMinutes() + ":" + "0" + date.getSeconds());
    }
}

setInterval(function() {
    date.setSeconds(date.getSeconds() - 1);
}, 1000);

setInterval(displayTime, 1000);

let state = 'off';

//Make a function to display time as MM:SS

//Timer states
let toggleTimer = function(newState) {
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
    getMinutes--;
    console.clear();
    $workDisplay.text(getMinutes);
    $counter.text(getMinutes);
    console.log(getMinutes);
});

$workPlus.on('click', function() {
    getMinutes++;
    console.clear();
    $workDisplay.text(getMinutes);
    $counter.text(getMinutes);
    console.log(getMinutes);
});

console.log(state);
