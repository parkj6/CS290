console.log("Javascript Function");
/* 
	Activity:
	Write a JavaScript program that declares a function but calls it before it is declared.
	Because of function hoisting this will work in JavaScript. Go prove it!

	Also write a function which is assigned to a variable. 
	Call it before it is assigned and prove that this does not work. 
*/

first(); //should work.

function first( input ){
	document.getElementById("firstFunction").textContent = "This function was called before declared.";
}

second(); //should not work.

var someVariable = function(){
	document.getElementById("secondFunction").textContent = "This function is assigned to a someVariable.";
}

var second = someVariable;

second(); //this works if first call for function second() is commented out.