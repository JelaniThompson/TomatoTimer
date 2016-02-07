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
let breakCounter = new Date(0, 0, 0, 0, 0, 0, 0);

//Alarm audio
let alarmSound = new Audio('http://www.oringz.com/oringz-uploads/b2_oringz-pack-nine-17.mp3');

let state = 'off';

//Default value for minutes (25)
date.setMinutes(25);
breakCounter.setMinutes(5);

//Prevent delayed loading in
$workDisplay.text(date.getMinutes());
$breakDisplay.text(breakCounter.getMinutes());
$counter.text(date.getMinutes());

//Return seconds as M:SS
function displayTime(minutes, seconds) {
    if (state == "on") {
        $counter.text(date.getMinutes() + ":" + date.getSeconds());
    }

    //If a number needs a 0 prepend with an if statement (<10)
    if (state == "on") {
        if (date.getSeconds() < 10) {
            $counter.text(date.getMinutes() + ":" + "0" + date.getSeconds());
        }
    }

    //Break display for when timer is done
    if (state == "done") {
        breakCounter.setSeconds(breakCounter.getSeconds() - 1);
        $counter.text(breakCounter.getMinutes() + ":" + breakCounter.getSeconds());
    }

    if (state == "done") {
        if (breakCounter.getSeconds() < 10) {
            $counter.text(breakCounter.getMinutes() + ":" + "0" + breakCounter.getSeconds());
        }

        if (breakCounter.getMinutes() == 0 && breakCounter.getSeconds() == 0) {
            state = "on";
            date.setMinutes(25);
            alarmSound.play();
        }
    }
}

setInterval(displayTime, 1000);

let countdown = setInterval(function() {
    if (state == 'on') {
        date.setSeconds(date.getSeconds() - 1);
    }

    //Set state to done to trigger alarm sound to play
    if (date.getMinutes() == 0 && date.getSeconds() == 0) {
        state = "done";
        clearInterval(countdown);
        alarmSound.play();
    }
}, 1000);

//Timer states
let toggleTimer = function(newState) {
    let started = true;
    if (state !== 'done') {
        //The ? serves as a toggle (statement ? true value : false value)
        state = newState || (state == 'on' ? 'off' : 'on');
    }
    console.log(state);
}

$counter.on('click', () => toggleTimer());

//Shrink these with an if statement later (check Dustin's DMs on Slack)
$workMinus.on('click', function() {
    if (state == "off" && date.getMinutes() > 1) {
        date.setSeconds(0);
        date.setMinutes(date.getMinutes() - 1);
        $workDisplay.text(date.getMinutes());
    }
});

$workPlus.on('click', function() {
    if (state == "off" && date.getMinutes() < 59) {
        date.setSeconds(0);
        date.setMinutes(date.getMinutes() + 1);
        $workDisplay.text(date.getMinutes());
    }
});

$breakMinus.on('click', function() {
    if (state == "done" || "off" && breakCounter.getMinutes() > 1) {
        breakCounter.setSeconds(0);
        breakCounter.setMinutes(breakCounter.getMinutes() - 1);
        $breakDisplay.text(breakCounter.getMinutes());
    }
});

$breakPlus.on('click', function() {
    if (state == "done" || "off" && breakCounter.getMinutes() < 59) {
        breakCounter.setSeconds(0);
        breakCounter.setMinutes(breakCounter.getMinutes() + 1);
        $breakDisplay.text(breakCounter.getMinutes());
    }
});