// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "What three programming languages are the foundation of coding?",
        choiceA : "Ash, Misty, and Brock",
        choiceB : "HTML, CSS, and JavaScript",
        choiceC : "Windows, Mac, and Linux",
        choiceD : "Ruby, Python, and Java",
        correct : "B"
    },{
        question : "In CSS, a class is prefixed with a #.",
        choiceA : "True",
        choiceB : "False",
        correct : "A"
    },{
        question : "What is the DOM?",
        choiceA : "A line from the jingle for Tums.",
        choiceB : "A character from GTA 5 obsessed with extreme sports",
        choiceC : "The Document Object Model, an object oriented model of a website's logical structure.",
        correct : "C"
    },{
        question : "JSON stands for JavaScript Orient Notation.",
        choiceA : "True",
        choiceB : "False",
        correct : "B"
    },{
        question : "What does CSS stand for?",
        choiceA : "Correcting Style Sheets",
        choiceB : "Chesseburger, Salad, Soda",
        choiceC : "Corvette, Stingray, Stratus",
        choiceD : "Cascading Style Sheets",
        correct : "D"
    },{
        question : "In the this HTML example, what element is the parent of p: <br>body | <h1> <p> Hi Everybody (Hi Dr. Nick) /h1> /p> | /body> </br></h2>",
        choiceA : "<br>",
        choiceB : "<p>",
        choiceC : "<h1>",
        correct : "C"
    },{
        question : "On an HTML file, Where would you put an external JavaScript link in order to make the JavaScript link work?",
        choiceA : "Within the body tag.",
        choiceB : "Within the head tag.",
        choiceC : "Outside of the HTML tag.",
        choiceD : "After the closing body tag but before the closing HTML tag.",
        correct : "B"
    },{
        question : "What three things are a coder's best friend?",
        choiceA : "Computer, Coffee, and Confidence.",
        choiceB : "Lawyers Guns, and Money.",
        choiceC : "Mohamed Salah, James Milner, and Sadio Mane",
        choiceD : "Aang, Sokka, and Katara",
        correct : "A"
    },{
        question : "In JavaScript, an if statement can be used multiple times",
        choiceA : "True",
        choiceB : "False",
        correct : "B"
    },,{
        question : "What should always be a coder's motto to live by?",
        choiceA : "I can do this!",
        choiceB : "I think I can do this!",
        choiceC : "I might be able to do this!",
        choiceD : "I can't do this!",
        correct : "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15; // 15s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;    
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
