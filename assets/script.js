//creating timer
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var timerInverval;

var container = document.querySelector(".container");
var questionsTitle = document.getElementById("questionsTitle");
var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");
var startbutton = document.getElementById('start-button');
var questionEl = document.getElementById("questions");
var goBack = document.querySelector("goBack-button");
var clearScores = document.querySelector("clearScores-button");
var response = document.getElementById("response")
var endScreen = document.getElementById("end-screen")
var highscores = document.querySelectorAll(".highscores")

//Keeps track of the question and score you are on
var questionindex = 0
var score = 0

//Clickable buttons that cause a specific function to run
startbutton.addEventListener ("click", startquiz);
choice1.addEventListener ("click", renderNext);
choice2.addEventListener ("click", renderNext);
choice3.addEventListener ("click", renderNext);
choice4.addEventListener ("click", renderNext);
goBack.addEventListener ("click", resetGame);
highscores.addEventListener ("click", seehighscores);

//Array of questions, possible answer choices, correct answer
var questions = [
    {"question": "Commonly used data types DO Not Include:", 
    "options": ["1. strings", "2. booleans", "3. alerts", "4. numbers"], 
    "answer": "4. numbers"},
    {"question": "The condition is an if / else statement is enclosed with _______.", 
    "options": ["1: quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"], 
    "answer": "2. curly brackets"},
    {"question": "Arrays in Javascript can be used to store.", 
    "options": ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"], 
    "answer": "4. all of the above"},
    {"question": "String values must be enclosed within ______ when being assigned to variables.", 
    "options": ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"], 
    "answer": "3. quotes"},
    {"question": "A very useful tool used during development and debugging for printing content to the debugger is:", 
    "options": ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"], 
    "answer": "4. console.log"},
];

//The countdown function gets the timer to start when startquiz button is clicked
function countdown() {
     timerInverval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
//When time runs out, clears internal
        if(secondsLeft === 0) {
            clearInterval(timerInverval)
        }
    }, 1000); 
}

//The startquiz function shows each question and has the countdown function to begin
function startquiz() {
    countdown()
    container.classList.add("hide");
    questionEl.classList.remove("hide");
//calling the function to show the array 
    questionsTitle.textContent = questions[questionindex].question
    choice1.textContent = questions[questionindex].options[0]
    choice2.textContent = questions[questionindex].options[1]
    choice3.textContent = questions[questionindex].options[2]
    choice4.textContent = questions[questionindex].options[3]
}

function renderNext(event) {
     console.log(event.target.textContent) 
     console.log(event)

     if (event.target.textContent == questions[questionindex].answer) {
        console.log('Correct');
        //posts it to the page by calling the function answerFeedback
        answerFeedback ("Correct");
        secondsLeft++
        } else {
        console.log('Incorrect');
        answerFeedback("Incorrect");
        secondsLeft = secondsLeft-15
        }        
    }

    questionindex++
    questionsTitle.textContent = questions[questionindex].question
    choice1.textContent = questions[questionindex].options[0]
    choice2.textContent = questions[questionindex].options[1]
    choice3.textContent = questions[questionindex].options[2]
    choice4.textContent = questions[questionindex].options[3]


//causes the feedback to show
function answerFeedback(Correct) {
response.textContent = Correct
}

function finalpage() {
    questionEl.classList.add("hide");
    endScreen.classList.remove("hide");
}

function resetGame() {

}

function seehighscores() {

}