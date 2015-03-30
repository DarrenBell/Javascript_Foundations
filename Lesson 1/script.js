// strings
// strings can hold any contextual data
// strings are defined by enclosing any text in single or double quotes - no different with the quotations
// if you want to use both single and double there's a few ways to get around this
// you either use one or the other for the start and the other for the quote inside the string.
var message = 'Joe says, "Hello."';
// otherwise you can escape the quote
var message = 'Joe\'s message is "Hello"';
// using the backslash you can escape the quote
var message - "Joe's message is \"Hello\".";
// if you need to escape a backslash you need to put double - escape the escape
// you can concatinate (plus operator) to add strings together
var message1 = "Four score ";
var message2 = "and seven years ago."
message1 + message2
// answer = Four score and seven years ago
// can use += for strings
// you can also use coercion
// substring and substr lets you extract a sequence of characters within a string
// substring () substring lets you pass in 2 numbers, starting with 0 and the second character is the last character you want
var lang = "JavaScript";
lang.substring(0, 4);
// this would return Java, position 0 is the J and 4 is the second a
// you can leave off the second number in substring for it to return all values after the first number
// substr () works the same way however the 2nd number specifies how many numbers you want to get back.
lang.substr(0, 4);
// this would return Java also
// you can also leave out the 2nd number with this
// language.charAt returns character in that index number
lang.charAt(4)
// -1 means a character does not exist

