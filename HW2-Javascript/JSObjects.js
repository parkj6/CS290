console.log("Javascript Objects: deepEqual");
/* 
	Activity:
	Implement the Deep Comparison described [http://eloquentjavascript.net/04_data.html#h_IJBU+aXOIC] in the Eloquent JavaScript textbook. 
	This will check your understanding of object notation and the for ... in loop.
*/

function deepEqual (a,b){
	if (typeof(a)=="object" && a!=null && 
		typeof(b)=="object" && b!=null){
		
		for (prop in a) {
			if (a[prop] != null &&
				b[prop] != null){
					deepEqual(a[prop],b[prop]);			
			}
			if (a[prop] != b[prop]){
				return false;
			} 
			else{
				return true;
			}
		}
	}
	else{
		return false;
	}
}

// Test
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
