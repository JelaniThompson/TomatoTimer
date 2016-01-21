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
setTime(24, 60);

let getMinutes = time.getMinutes(setTime.minutes);
let getSeconds = time.getSeconds(setTime.seconds);

$workDisplay.text(getMinutes);
$counter.text(getMinutes);

//Timer states
let toggleTimer = function(newState) {
    displayTime();

    if (state !== 'done') {
        //The ? serves as a toggle (statement ? true value : false value)
        state = newState || (state == 'on' ? 'off' : 'on');
    }

    if (state == 'off') {
        $counter.text(getMinutes + ":" + getSeconds);
    }
    console.log(state);
}

$counter.on('click', () => toggleTimer());

//Shrink these with an if statement later (check Dustin's DMs on Slack)
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
        getSeconds -= 1;
        $counter.text(getMinutes + ":" + getSeconds);
    }
}

let countdownMinute = function() {
    if (state == 'on') {
        getMinutes--;
        $counter.text(getMinutes + ":" + getSeconds);
    }
}

//Update time display every minute/second
function displayTime() {
    window.setInterval(countdownSecond, 1000);
    window.setInterval(countdownMinute, 60000)
}

console.log(state);

//REMEMBER. BREAK TIMER ONLY ACTIVATES ONCE WORK TIMER IS FINISHED. THIS MAKES EVERYTHING MUCH EASIER
