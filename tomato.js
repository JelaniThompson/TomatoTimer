'use strict';

//Visual representation of work/break times and counter
let $workDisplay = $("#workNum"),
    $breakDisplay = $("#breakNum"),
    $workMinus = $(".workMinus"),
    $workPlus = $(".workPlus"),
    $breakMinus = $(".breakMinus"),
    $breakPlus = $(".breakPlus"),
    $counter = $("#counter");

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
$counter.text(getMinutes);

//Timer states
let toggleTimer = function(newState) {
    if (state !== 'done') {
        //The ? serves as a toggle (statement ? true value : false value)
        state = newState || (state == 'on' ? 'off' : 'on');
    }
    console.log(state);
}

$("#counter").on('click', () => toggleTimer());

$workMinus.on('click', function() {
    getMinutes -= 1;
    console.clear();
    $workDisplay.text(getMinutes);
    $counter.text(getMinutes);
    console.log(getMinutes);
});

$workPlus.on('click', function() {
    getMinutes += 1;
    console.clear();
    $workDisplay.text(getMinutes);
    $counter.text(getMinutes);
    console.log(getMinutes);
});

//Count down seconds and minutes
let countdownSecond = function() {
    if (state == 'on') {
        //Seconds stuff
    }
}

let countdownMinute = function() {
    if (state == 'on') {
        $counter.text(getMinutes -= 1);
    }
}

//Update time display every minute/second
window.setInterval(countdownMinute, 60000)
window.setInterval(countdownSecond, 1000);

console.log(state);

//REMEMBER. BREAK TIMER ONLY ACTIVATES ONCE WORK TIMER IS FINISHED. THIS MAKES EVERYTHING MUCH EASIER