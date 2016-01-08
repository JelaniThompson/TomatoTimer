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
    time.setMinutes(minutes);
    time.setSeconds(seconds);
}

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

}

$(".workMinus").on('click', _ => {
	//time.setMinutes(minutes -= 1);
	console.log("test");
});

console.log(state);
