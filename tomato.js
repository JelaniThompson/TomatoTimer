'use strict';

//Visual representation of work/break times
let $workDisplay = $("#workNum"),
    $breakDisplay = $("#breakNum"),
    $workMinus = $(".workMinus"),
    $workPlus = $(".workPlus"),
    $breakMinus = $(".breakMinus"),
    $breakPlus = $(".breakPlus");

//Initialize date object to work with functions (seven 0's to remove default local time)
let time = new Date(0, 0, 0, 0, 0, 0, 0);

let state = 'off';

//Set time dynamically
let setTime = function(minutes, seconds) {
    minutes = time.setMinutes(minutes);
    seconds = time.setSeconds(seconds);
}

//Default value for minutes and seconds (25)
setTime(25, 0);

let getMinutes = time.getMinutes(setTime.minutes);

$workDisplay.text(getMinutes);

//Timer states
let toggleTimer = function(newState) {
    if (state !== 'done') {
        //The ? serves as a toggle (statement ? true value : false value)
        state = newState || (state == 'on' ? 'off' : 'on');
    }
    console.log(state);
    checkState();
}

$("#counter").on('click', () => toggleTimer());

//Check state
let checkState = function() {
    if (state == 'on') {
        countdown();
    }
}

//Start working on countdown
let countdown = function() {
	//console.log("soak console.logs in wood");
}

//Update time display every second
let updateTimeDisplay = window.setInterval(countdown, 1000);

$workMinus.on('click', function() {
    getMinutes -= 1;
    console.clear();
    $workDisplay.text(getMinutes);
    console.log(getMinutes);
});

console.log(state);
