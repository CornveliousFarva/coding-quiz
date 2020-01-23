//Variables to start the quiz, go to the next question, and contain the questions and answers
var startButton = document.getElementById("start-button")
var nextButton = document.getElementById("next-button")
var questionContainer = document.getElementById("question-container")
var questionEl = document.getElementById("question")
var answerBtnEl = document.getElementById("answer-button")

start-button.addEventListener("click", startGame)
next-button.addEventListener("click", () =>
// Declare The Question Variables
questionEl.addEventListener("click") =[{
  question: "What 3 Programming Languages Are the Foundations for Coding?\n\(a)Ash, Misty, and Brock\n\(b) Python, Ruby, C++\n\(c)Yakko, Wakko, and Dot\n\(d)HTML, CSS, and JavaScript",
  answer: "(d)"
},
{
    question: "In CSS, a class is prefixed with a #.\n\(a)True\n\(b)False",
    answer: "b"
},
{
    question:"What is the DOM?\n\(a)A line from the jingle for Tums\n\(b) The Document Object Model, an object oriented model of a website's logical structure\n\(c)A character from GTA V with an obsession for extreme sports",
    answer: "b"
},
{
    question:"What HTML tag is most effective at breaking up lines of text? \n\(a)<p> \n\(b)<break> \n\(c)<b> \n\(d)<br>",
    answer:"d"
},
{
    question:"CSS stands for Cascading Style Sheets. \n\ (a)True \n\(b)False",
    answer:"a"
},
{
    prompt:"For inserting a JavaScript link from within the same folder but in a separate .js document, where would the most effective place to put it be? \n\(a) After the closing body tag, but before the closing HTML tag \n\(b)Before the opening HTML tag \n\(c)In the <head> tag \n\(d) After the </html> tag",
    answer:"a"
},
{
    question:"In the below HTML example, which element is the parent of p? <body> | <h1><p> Hi Everybody (Hi Dr. Nick) </h1></p><br> | </body>? \n\(a)<body> \n\ (b)<br> \n\(c)<h1 \n\ (d)<p>",
    answer: "c"
},
{
    question:"In JavaScript, you can only use an if statement once. \n\(a) True \n\(b) False",
    answer:"a"
},
{
    question:"What 3 things are a coder's best friend?\n\(a)Mohamed Salah, Roberto Firmino,and James Milner\n\(b)Aang, Sokka, and Katara\n\(c)Computer, coffee, and confidence\n\(d)Lawyers, Guns, and Money",
    answer:"c"
},
{
    question:"What should always be a coder's mantra?\n\(a)Never Give Up\n\(b)It's ok to give up\n\(c)Almost always give up\n\(d)Always give up",
    answer:"a"
},
{
    question:"Who was the first draft pick for the Kansas City Chiefs in 2013?\n\(a)Patrick Mahomes\n\(b)Tryeek Hill\n\(c)Eric Fisher\n\(d)Travis Kelce"
    answer: "c"
}
]};
// Set Up A Score Tally
var score = 0;
// Set Up A Timer that when it hits 0, the question is counted as wrong and moves onto the next question
var x = timerInterval(function(){
    var timer = countDownSeconds - now;
    var seconds = Math.floor(( distance % (1000 * 60)) / 1000);
    if (countDownSeconds < 0){
        clearInterval(x);
        document.getElementById("") = "Time's Up!"
    }
