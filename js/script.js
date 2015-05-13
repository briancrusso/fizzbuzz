var userNum = prompt("Enter a number"); 

for (var i = 0; i > userNum; i++) {
    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("FizzBuzz");
    } else if ((i % 5) === 0) {
        console.log("Buzz");
    } else if ((i % 3) === 0) {
        console.log("Fizz"); 
    } else {
        console.log(i);
    }
}



	
