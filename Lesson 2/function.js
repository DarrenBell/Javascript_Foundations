// functions
// the main reason for writing a function is to prevent you from writing the same code multiple times
// functions are declared using the function keyword
// you have the function keyword, the name of the function, followed by parenthesis and a pair of brackets
// inside the brackets you put the code that defines what you want the function to do:
// 
function sayHello(name, useAlert) { // in this instance it will evaluate to false because useAlert is not defined, this is useful because it makes the second parameter optional
	if(useAlert) { // if useAlert is true or evaluates to true it will use alert
		alert("Hello, " + name);
	}
	else {
	console.log("Hello, " + name); // we are concatenating name onto the end of Hello.	
	} // if useAlert is false or evaluates to false it will use console.log
}
sayHello("Darren");  // using the word true after the comma makes the function true and use the alert

function randomInt(max) { // 1 parameter - max which represents the maximum number returned - in this case 100
	var rand = Math.random() * max //generate a random number and multiply by max storing it in a variable called rand
	rand = Math.round(rand); // this rounds the value of the rand variable to a whole number and stores the result back in rand
	return rand; // outputs the result for use
}
console.log(randomInt(100)); // log a random whole number from 0 to 100
// this would be the scope of the variable rand

// variables declared inside functions are called local variables - they don't exist out of the confides of the function
// the scope defines the parts of the code where a variable is visible and can be used

// valid function and parameter names follow the same as variables do
// when you call a function you can pass data to it - you specify what that data is by placing it inside the function definition - this is known as a parameter of the function
// you are creating a variable that is only used within the body of the function
// the variable name is set when you call the function
// you can use that parameter in the functions code
// functions can have multiple parameters, separated by commas
// a function returns a value, this is represented by the word return

