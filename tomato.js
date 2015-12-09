//Get the time the timer is supposed to end and subtract it from the current time to calculate time remaining
function timeCalculations(endTime) {
  var timeRemaining = Date.parse(endTime) - Date.parse(new Date());
  //Perform .floor() to get whole seconds after minute has been counted
  //Divide timeRemaining by 1000 to get seconds and not milliseconds
  var seconds = Math.floor((timeRemaining/1000) % 60);
  var minutes = Math.floor((timeRemaining/1000/60) % 60);
}

//Settings for increment and decrement
var settings = {
  workPeriod : 0,
  breakPeriod : 0
};

//Call the .on function on button to have values update
$('.button').on('click', checkPeriod);

//Increment/Decrement work periods and breaks
function checkPeriod() {
  var timeDisplay = document.getElementById("timeDisplay");
  var workDisplay = document.getElementById("workDisplay");
  var breakDisplay = document.getElementById("breakDisplay");

  if( $(this).hasClass("incrementWork") ) {
    settings.workPeriod += 1;
    console.log("Work Length: " + settings.workPeriod);
  }

  else if ( $(this).hasClass("decrementWork") ) {
      settings.workPeriod -= 1;
      console.log("Work Length: " + settings.workPeriod);
  }

  else if ( $(this).hasClass("incrementBreak") ) {
    settings.breakPeriod += 1;
    console.log("Break Length: " + settings.breakPeriod);
  }

  else if ( $(this).hasClass("decrementBreak") ) {
    settings.breakPeriod -= 1;
    console.log("Break Length: " + settings.breakPeriod);
  }
  workDisplay.innerHTML = settings.workPeriod;
  breakDisplay.innerHTML = settings.breakPeriod;
}

//Display timer in DOM
$('#start').on('click', displayTime);

function displayTime() {  
  timeDisplay.innerHTML = settings.workPeriod;
}

checkPeriod();

//Counting down
