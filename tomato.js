'use strict';

//Default values for increment and decrementing the minute
let settings = {
    workPeriod: 25,
    breakPeriod: 5
};

//Visual representation of work/break times
let workDisplay = document.getElementById("workNum");
let breakDisplay = document.getElementById("breakNum");
let newTime = new Date();
let second = 1000;
let minute = 60000;

//Take the first two values from the minute variable (omit '60' from '60000')
let splitMinute = ("" + minute).split("", 2).join('');

//Make a splitSecond too (splitSecond * workPeriod / breakPeriod) http://imgur.com/W927Cn5

//Do something every second
let updateSecond = function() {
    updateSecond.called = true;
    console.log(second);
    //Update workPeriod or breakPeriod depending on current thingy
    //settings.workPeriod - 1;
}

//Do something every minute
let updateMinute = function() {
    updateMinute.called = true;
    //use .substring(0, 2) - 1 on minute(60000) to countdown each second
    splitMinute -= 1;
    console.log(splitMinute);
}

//Initialize counting
updateSecond();
updateMinute();

//Prevent overlapping when calling each second or minute and check for new time every second with setInterval
if (updateSecond.called) {
    setInterval(updateSecond, second);
}

if (updateMinute.called) {
    setInterval(updateMinute, minute);
}

//Status of starting and stopping the timer (stopped by default)
let started;
let stopped = false;

//Start Timer
function startTimer() {
    stopped = false;
    started = true;
}

//Stop Timer
function stopTimer() {
    started = false;
    stopped = true;
    clearInterval(startTime);
}

//Check if timer is stopped or started
$('#counter').on('click', function() {
    if (stopped = true) {
        startTimer();
    } else if (started = true) {
        stopTimer();
    }
});

//Increment/Decrement work periods and breaks
function checkPeriod() {
    if ($(this).hasClass("workPlus")) {
        settings.workPeriod += 1;
        console.log("Work Length: " + settings.workPeriod);
    } else if ($(this).hasClass("breakPlus")) {
        settings.breakPeriod += 1;
        console.log("Break Length: " + settings.breakPeriod);
    }
    breakDisplay.innerHTML = settings.breakPeriod;
    workDisplay.innerHTML = settings.workPeriod;
}

//Make sure you can't go below 0 when clicking minus
$(".breakMinus").on('click', _ => {
    if (settings.breakPeriod > 0) {
        settings.breakPeriod -= 1;
        breakDisplay.innerHTML = settings.breakPeriod;
        console.log(settings.breakPeriod);
    }
});

$('.workMinus').on('click', _ => {
    if (settings.workPeriod > 0) {
        settings.workPeriod -= 1;
        workDisplay.innerHTML = settings.workPeriod;
        console.log(settings.workPeriod);
    }
});

//Call the .on function on button to have values update
$('.controls').on('click', checkPeriod);

checkPeriod();
