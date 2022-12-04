//creating timer
var timeEl = document.querySelector(".time");
var secondsLeft = 60;

var questionEl = document.querySelector(".questions");
var questions = [
    {"question": "Commonly used data types DO Not Include:", "options": ["1. strings", "2. booleans", "3. alerts", "4. numbers"], "answer": "4. numbers"},
    {"question": "The condition is an if / else statement is enclosed with _______.", "options": ["1: quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"], "answer": "2. curly brackets"},
    {"question": "Arrays in Javascript can be used to store.", "options": ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"], "answer": "4. all of the above"},
    {"question": "String values must be enclosed within ______ when being assigned to variables.", "options": ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"], "answer": "3. quotes"},
    {"question": "A very useful tool used during development and debugging for printing content to the debugger is:", "options": ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"], "answer": "4. console.log"},
];

console.log(questions);

//making the timer work
//get the timer to start when start quiz button is clicked
function countdown() {
    var timerInverval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft + ".";
//if question is wrong 15 seconds is deleted
        if(secondsLeft === 0) {
            clearInterval(timerInverval)
            sendMessage()
        }
    }, 1000); 
}

function sendMessage() {
    timeEl.textContent = "Congrats, you have completed the quiz.";
  }

