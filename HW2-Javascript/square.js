console.log("Starting Function:");
square(2);

function square(x) {
  return x * x;
}
square(8);
console.log(square(8));
callSquare(10);

function callSquare(x){
console.log(x);
    return square(x);
	
}