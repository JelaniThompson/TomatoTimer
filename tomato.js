//Perform .floor() to get whole seconds after minute has been counted
var breakMinutes = Math.floor((settings.breakPeriod / 1000 / 60) % 60);
var workMinutes = Math.floor((settings.workPeriod / 1000 / 60) % 60);
//Divide timeRemaining by 1000 to get seconds and not milliseconds
var breakSeconds = Math.floor((settings.breakPeriod / 1000) % 60);
var workSeconds = Math.floor((settings.workPeriod / 1000) % 60);

var workDisplay = document.getElementById("workNum");
var breakDisplay = document.getElementById("breakNum");

//Default values for increment and decrement
var settings = {
    workPeriod: 25,
    breakPeriod: 5
};

//Call the .on function on button to have values update
//$('.button').on('click', checkPeriod);
$('.controls').on('click', checkPeriod);

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


//Display time when you click the circle
//$('#start').on('click', displayTime);

//Counting down
//Multiply work/breakPeriod by minutes variable

checkPeriod();