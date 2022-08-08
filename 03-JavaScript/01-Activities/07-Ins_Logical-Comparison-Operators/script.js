var a = 100;
var b = 10;
var c = "10";

// Arithmetic operators combine with numbers to form an expression that returns a single number
console.log(a + b); // "a" plus "b"
console.log(a - b); // "a" minus "b"
console.log(a / b); // "a" divided by "b"
console.log(a * b); // "a" times "b"

// Modulus returns the remainder between two numbers.  
console.log(a % b);

// Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false
// Compares equality

console.log(b == c); // == "is loose equality" === "strict equality" so even tho c is a string they are loosely equal 
console.log(b != c); // ! means not , so is "b" not equal to "c"

// Compares equality and type (strict equality) the type and value must be equivalent
console.log(b === c); //true
console.log(b !== c); //false because c is a string 

// Greater than or less than
console.log(a > b);
console.log(a < b);

// Greater than or equal to and less than or equal to
console.log(a <= b);
console.log(a >= b);

// Logical operators take in two or more expressions and return true or false 
var expression1 = (b == c); //true
var expression2 = (a > b); //true

// Evaluates to true if expression1 AND expression2 are both true, otherwise false
            //true          //true
console.log(expression1 && expression2); // ---> the whole expression is true

// Evaluates to true if expression1 OR expression2 is true, otherwise false
 
console.log(expression1 || expression2); // -----> at least one of them is true, so it is true.

// Logical Not (!) turns an expression that evaluates to true to false and vice versa
// Returns true

console.log(expression2);

// Returns false
console.log(!expression2); // ----> remember ! means not, so this would be false.
