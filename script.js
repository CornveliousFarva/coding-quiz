//sets score to 0 initially
var score = 0;
//total questions
var total = 10;
//amount of points per question
var point = 1;
//highest possible score
var highScore = total + point;

//Initialize and establish correct answers
    function init(){
        //sets the correct answers for each question
        sessionStorage.setItem("a1", "B");
        sessionStorage.setItem("a2", "B");
        sessionStorage.setItem("a3", "C");
        sessionStorage.setItem("a4", "A");
        sessionStorage.setItem("a5", "A");
        sessionStorage.setItem("a6", "D");
        sessionStorage.setItem("a7", "C");
        sessionStorage.setItem("a8", "A");
        sessionStorage.setItem("a9", "C");
        sessionStorage.setItem("a10", "A");
    }

//Hides all of the questions and brings them up after hitting the next button
$(document).ready(function(){
    //hides all questions
    $('.questionForm').hide();
    //shows the first question
    $("#q1").show();
    //submit the first answer to the first question and each subsequent question
    $("#q1 #Next").click(function(){
        $(".questionForm").hide();
        //process("q1");
        $("#q2").fadeIn(200);
        return false;
    });

    $("#q2 #Next").click(function(){
        $(".questionForm").hide();
        //process("q2")
        $("#q3").fadeIn(200);
        return false;
    });

    $("#q3 #Next").click(function(){
        $(".questionForm").hide();
        //process("q3");
        $("#q4").fadeIn(200);
        return false;
    });

    $("#q4 #Next").click(function(){
        $(".questionForm").hide();
        //process("q4");
        $("#q5").fadeIn(200);
        return false;
    });

    $("#q5 #Next").click(function(){
        $(".questionForm").hide();
        //process("q5");
        $("#q6").fadeIn(200);
        return false;
    });

    $("#q6 #Next").click(function(){
        $(".questionForm").hide();
        //process("q6");
        $("#q7").fadeIn(200);
        return false;
    });

    $("#q7 #Next").click(function(){
        $(".questionForm").hide();
        //process("q7");
        $("#q8").fadeIn(200);
        return false;
    });

    $("#q8 #Next").click(function(){
        $(".questionForm").hide();
        //process("q8");
        $("#q9").fadeIn(200);
        return false;
    });

    $("#q9 #Next").click(function(){
        $(".questionForm").hide();
        //process("q9");
        $("#q10").fadeIn(200);
        return false;
    });

    $("#q10 #Next").click(function(){
        $(".questionForm").hide();
        //process("q10");
        $("#results").fadeIn(200);
        return false;
    });

    $("#results")


    
});

//Add event listener
window.addEventListener("load",init,false);
