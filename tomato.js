



//HEY, REMEMBER TO USE DATE FUNCTIONS IN JAVASCRIPT FOR CALCULATING TIME STUFFS
//THEY WORK FOR MILLISECONDS, SECONDS, MINUTES, HOURS, ETC. DESPITE THE NAME

//Time values
var time = [{
  hour: undefined,
  second: undefined
}];

//25 Minute Timer
function set25() {
  time.hour = 25;
  time.second = 0;
}

//5 Minute Break
function set5() {
  time.hour = 5;
  time.second = 0;
}

//10 Minute Break
function set10() {
  time.hour = 10;
  time.second = 0;
}

//Initiate Countdown
$('start-button').click(function() {
  //This is where you should begin countdown
  for(var i = 0; i < time; i++) {
    console.log(time.hour);
  }
});
