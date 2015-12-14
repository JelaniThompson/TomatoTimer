//Get the time the timer is supposed to end and subtract it from the current time to calculate time remaining
function timeCalculations(endTime) {
    var timeRemaining = Date.parse(endTime) - Date.parse(new Date());
    //Perform .floor() to get whole seconds after minute has been counted
    //Divide timeRemaining by 1000 to get seconds and not milliseconds
    var seconds = Math.floor((timeRemaining / 1000) % 60);
    var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
}

//Default values for increment and decrement
var settings = {
    workPeriod: 0,
    breakPeriod: 5
};

//Call the .on function on button to have values update
//$('.button').on('click', checkPeriod);
$('.controls').on('click', checkPeriod);

//Increment/Decrement work periods and breaks
function checkPeriod() {
    var workDisplay = document.getElementById("workDisplay");
    var breakDisplay = document.getElementById("breakNum");

    if ($(this).hasClass("incrementWork")) {
        settings.workPeriod += 1;
        console.log("Work Length: " + settings.workPeriod);
    } else if ($(this).hasClass("decrementWork")) {
        settings.workPeriod -= 1;
        console.log("Work Length: " + settings.workPeriod);
    } else if ($(this).hasClass("breakPlus")) {
        settings.breakPeriod += 1;
        console.log("Break Length: " + settings.breakPeriod);
    } else if ($(this).hasClass("breakMinus")) {
        settings.breakPeriod -= 1;
        console.log("Break Length: " + settings.breakPeriod);

        //Check if value going below zero
        if (settings.breakPeriod < 0) {
            //Don't subtract
            $('#workDisplay').innerHTML = settings.breakPeriod;
        }
    }

    //Display the number for breaks or work periods
    $('#workDisplay').innerHTML = settings.workPeriod;
    breakDisplay.innerHTML = settings.breakPeriod;
}

checkPeriod();

//Display time when you click the circle
$('#start').on('click', displayTime);

function displayTime() {
    //timeDisplay.innerHTML = settings.workPeriod;
}

//Counting down
