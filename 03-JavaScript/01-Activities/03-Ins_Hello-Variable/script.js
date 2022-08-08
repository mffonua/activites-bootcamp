// Declares student variable using var keyword 
var studentName;

// Uses assignment operator(=) to assign a value
var studentName = "Abdul";
var studentAge = 32;

// To re-assign a variable, use only the variable's name  
studentName = "Tonya";
studentAge = 52;

// To access a value stored in a variable, use the variable's name
console.log(studentName);

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
// console.log("My name is ");
studentAge = 52 + 38;

// Logs "My name is Tonya" " + is called concatenation"
console.log("My name is " + studentName);
console.log("My age is " + studentAge);