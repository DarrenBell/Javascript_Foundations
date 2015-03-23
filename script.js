// booleans are true or false values
// operators
// equals operator
5 == 5;
// true
5 == 6;
// false
// not equals operator
5 != 6;
// true
5 !=5;
// false
// greater than and less than operators
6 > 5;
// true
5 < 4;
// false
// greater than can be combined with equals to
5 >= 5;
// true
// can compare strings
"rose" == "rose";
// true
"cat" == "dog";
// false
"cat" > "dog";
// false - alphabetical comparison, dog is greater than cat as it comes after 'c', lowercase however beats uppercase
if(someCondition) { // if true - only this will run if true
	doThis(); // do this
}
else {
	doThat(); // if false do this - only this will run if false
}
// if statement
if(true) {
	console.log("Hello World"); // will always evaluate to true
}
var userName = "user1234";
if(userName == "user1234") {
	console.log("Welcome to the site") ;
}

var age = 35, 
minAge = 18;

if(age >= minAge) {
	console.log("Welcome to the site");
}
// else statement
else {
	console.log("Sorry, too yong.");
}
var rand = Math.random();

if (rand > 0.5) { // 50% of the time it will be yes and 50% of the time it will be no - random
	console.log("Yes!, do it!")
}
else {
	console.log("No! don't!");
}
// else if statements
if(someCondition) {
	doThis();
}
else if (anotherCondition) {
	doThat();
}
else {
	doTheOther();
}
// type coercion are useful in if statements with undefined and null variables

var cost = 10,
quantity;

if(quantity) {
	var total = cost * quantity // if quantity is any number besides 0 it will be true and execute
}
else {
	console.log("quantity is not defined");  // if quantity is 0 it is false and will log this
}
// coercion rules - what will be what
// undefined = false
// null = false
// 0 = false
// any other number (including negative numbers) = true
// "" = false
// "any other string" = true
// "false" is a non empty string and will become true

// strict comparison operator (no coercion used) is === this is used always (best practice) because string number and an actual number can be true 5 == "5" this is a quirk
