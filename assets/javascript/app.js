

var cntDown;
var start;
var done;
var number = 40;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswer = 0;
var q1;
var q2;
var q3;
var q4;
var q5;
var q6;
var q7;
var q8;
var q9;

//  When the resume button gets clicked, execute the run function.
$("#start").on("click", run);
$("#stop").on("click", stop);

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $("#show-number").html("<h3>Time Remaining " + number + " seconds</h3>");
  if (number === 0) {
    stop();
    alert("Time Up!");
  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
   clearInterval(intervalId);
}

//  Execute the run function.
run();

function checkAnswer () {
 for (var i = 0; i< 9; i++) {
     if (q[i] === )
 }
  
}
if $("cirbtn.name") === ("Strongest Greek fighter") {
  correct++;
}
else if {
  incorrect++;
}
else {
  unanswer++;
}