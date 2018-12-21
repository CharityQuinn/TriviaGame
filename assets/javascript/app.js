var cntDown;
var start;
var user;
var number = 40;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswer = 0;
var tf = false;
var rightAnswer = ["Strongest Greek fighter", "Achille's friend", "King of Mycenae", "God of Travelers", "God of youth", "God of Fire", "Queen of Sparta", "Queen of Sparta", "King of Troy", "Goddess of War"];

$(document).ready(function(){
  $("#game").hide();
  $("#end").hide ();
  });

// start the clock when the Start button is clicked
$(document).on("click", "#start", function () {
   $("#game").show();
   $("#begin").hide();
  number = 40;
  run();
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

  if (number === 0) {
    stop();
    alert("Time Up!");
  }
}
$(document).on("click", "#dbtn", function () {
  console.log("We just hit done, stopping clock, calling check");
  stop();
  check();
  $("#game").hide();
  $("#end").show();


})

     
  
//Function to get selected user and check it
function check() {
    var questionZero = $(`input[name="q0"]:checked`).val();
    var questionOne = $(`input[name="q1"]:checked`).val();
    var questionTwo = $(`input[name="q2"]:checked`).val();
    var questionThree = $(`input[name="q3"]:checked`).val();
    var questionFour = $(`input[name="q4"]:checked`).val();
    var questionFive = $(`input[name="q5"]:checked`).val();
    var questionSix = $(`input[name="q6"]:checked`).val();
    var questionSeven = $(`input[name="q7"]:checked`).val();
    var questionEight = $(`input[name="q8"]:checked`).val();
    var questionNine = $(`input[name="q9"]:checked`).val();

    var ansArray = [questionZero, questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine];
    for (i = 0; i < 10; i++) {
    console.log(i);
    console.log("This is the array of user Answer " + ansArray[i]);
    console.log("This is the right answer " +rightAnswer[i]);
   
    if (rightAnswer[i] === ansArray[i]) {
      correct++;
      console.log("THIS answer is correct " + ansArray[i])
      console.log("This is the number of correct "+ correct);
    }
      else {
      incorrect++;
      console.log("This answer is wrong " + ansArray[i]);
      console.log("This is the number of incorrect " + incorrect);

    }
    console.log("This is the number correct: " + correct);
    console.log("This is the user of incorrect " + incorrect);
    $("#correct").html("Questions Correct: " + correct);
    $("#incorrect").html("Questions Incorrect: " + incorrect);
    
  }
}
 
  
  
  
  

  //  The stop function
  function stop() {

    //  Clears our intervalId
    clearInterval(intervalId);
  }