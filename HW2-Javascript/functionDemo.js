//Hoisting and omitting argument
out1();

function out1( input ){
    document.getElementById("output1").textContent = "I am from out1";
}

//Variable as a function
var out2 = function (){
    document.getElementById("output2").textContent = "I am from out2";
};

out2();

//Reassigning functions
var reassignMe = function (){
    document.getElementById("output3").textContent = "I am from out3";
};

var out3 = reassignMe;

out3();

//Passing parmeters
function sendToOut4( stuff ){
    document.getElementById("output4").textContent = stuff;
}

sendToOut4( "Content from function call" );