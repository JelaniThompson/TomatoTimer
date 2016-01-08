'use strict';

//Visual representation of work/break times (change this to jQuery later)
let workDisplay = document.getElementById("workNum");
let breakDisplay = document.getElementById("breakNum");

//Status of starting and stopping the timer (stopped by default)
let status;

let state = 'off';

//Set time dynamically
let setTime = function(minutes, seconds) {
    minutes = 0;
    seconds = 0;
}

setTime();

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
	setTime.seconds -= 1;
}

console.log(state);