var cntDown;
var start;
var value;
var number = 40;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswer = 0;
var rightAnswer = ["Strongest Greek fighter", "Achille's firend", "King of Mycenae", "God of Travelers", "God of youth", "God of fire", "Queen of Sparta", "King of Troy", "King of Troy", "Goddess of War"];


// start the clock when the Start button is clicked
$(document).on("click", "#start", function() {
  number = 40;
});
//function to run the clock
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
//function to bring the timer down
function decrement() {
  number--;
  $("#show-number").html("<h3>Time Remaining " + number + " seconds</h3>");
  
  if (number === 0 ) {
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


 Function to get selected value and check it
 //$('.cirbtn').click(function () {
   //console.log(.cirbtn);
   for (i = 0; i < 11; i++) {
     value = $("input[name='q[i]']:checked").val();
     console.log(value);
     if (value === rightAnswer[i]) {
       correct++;
       console.log(value);
       console.log(rightAnswer[i])
     }
          
     else if (value = "undefined") {
      unanswer++;
      } 
     else {
     incorrect++;
    }
  }

console.log("This is the number correct: " + correct);
console.log("This is the value of incorrect " + incorrect);
console.log("This is the value of unAnswered " + unanswer);

  $(document).on("click", "#done", function() {
    stop ();
    incorrect = 0;
    correct = 0;
    unanswer = 0;

  });
  





//To display the selected value we used <p id="result"> tag in HTML file
//$('.container').append(value); console.log(value);
//})
