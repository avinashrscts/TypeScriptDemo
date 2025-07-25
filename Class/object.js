var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var student = {
    fullName: "John Doe",
    age: 20,
    isEnrolled: true,
    subjects: ["Math", "Science", "History"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        zip: "12345"
    },
};
for (var item in student) {
    // if (student.hasOwnProperty(key)) {
    //     console.log(key + ": " + student[key]);
    // }
    console.log(item + ": " + student[item]);
}
// Destructuring the object
// This allows us to extract properties from the object into variables
var fullName = student.fullName, age = student.age, isEnrolled = student.isEnrolled, subjects = student.subjects;
console.log(fullName); // John Doe
console.log(age); // 20     
console.log(isEnrolled); // true
console.log(subjects); // ["Math", "Science", "History"]
//array destructuring
var firstSubject = subjects[0], secondSubject = subjects[1];
console.log(firstSubject); // Math
console.log(secondSubject); // Science
// Nested destructuring
var _a = student.address, street = _a.street, city = _a.city, zip = _a.zip;
console.log(street); // 123 Main St
console.log(city); // Anytown  
console.log(zip); // 12345
// ARRAY functions
var numbers = [1, 2, 3, 4, 5];
// Using forEach to iterate over the array
numbers.forEach(function (num) {
    console.log(num); // 1, 2, 3, 4, 5
});
console.log(numbers.join(" ")); // 1, 2, 3, 4, 5
console.log(numbers.slice(1, 3)); // [2, 3]
console.log(numbers.splice(1, 2, 88, 99)); // [2, 3] (removes 2 elements starting from index 1)
console.log(numbers); // [1, 4, 5] (original array is modified  
numbers.push(6, 3, 77); // Adds elements to the end of the array
console.log(numbers); // [1, 4, 5, 6, 3, 77]
numbers.pop(); // Removes the last element from the array
console.log(numbers); // [1, 4, 5, 6, 3]
numbers.shift(); // Removes the first element from the array
console.log(numbers); // [4, 5, 6, 3]
numbers.unshift(0); // Adds an element to the beginning of the array    
console.log(numbers); // [0, 4, 5, 6, 3]
// Using map to create a new array with each element multiplied by 2
//function demo
function multiplyByTwo(num) {
    return num * 2;
}
var doubledNumbers = numbers.map(multiplyByTwo);
console.log(doubledNumbers); // [0, 8, 10, 12, 6]       
//function with default and optional parameters
function greet(name, age, rol) {
    if (name === void 0) { name = "Guest"; }
    if (age === void 0) { age = 18; }
    return "Hello, ".concat(name, "! You are ").concat(age, " years old. role: ").concat(rol);
}
// Testing the greet function with different parameters
console.log(greet()); // Hello, Guest! You are 18 years old. role: undefined
console.log(greet("Alice", 25)); // Hello, Alice! You are 25 years old. role: undefined
console.log(greet("Bob", 30, 1)); // Hello, Bob! You are 30 years old. role: 1      
var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        result *= nums[i];
    }
    return result;
};
// Testing the product function with different numbers
console.log(product(2, 3, 4, 6)); // 144 (2 * 3 * 4 * 6 = 144)
//arrow function
console.log("Arrow function demo");
var numbers11 = [1, 2, 3, 4, 5];
var square = function (x) { return x * x; };
// Testing the square function
console.log(square(5)); // 25
// Using the square function with an array of numbers
var squares = numbers11.map(square);
console.log(squares); // [0, 16, 25, 36, 9]
// Using the square function with an array of numbers
var mutiply = function (x, y) { return x * y; };
var numbers12 = [1, 2, 3, 4, 5];
var productOfNumbers = numbers12.reduce(mutiply);
console.log(productOfNumbers); // 120 (1 * 2 * 3 * 4 * 5 = 120)
var myArray = [];
for (var i = 0; i < 10; i++) {
    myArray.push(function () { return i; });
}
console.log(myArray); // Array of functions that return the value of i
// Testing the functions in myArray
for (var j = 0; j < 10; j++) {
    console.log("".concat(j, " -> ").concat(myArray[j]())); // 9, 9, 9, 9, 9, 9, 9, 9, 9, 9
}
// let is a block-scoped variable declaration
var blockScopedVariable = "I am block scoped";
//difference between var and let
// var is function-scoped or globally scoped, while let is block-scoped 
// var can be redeclared and updated, while let can only be updated
// var can be accessed before its declaration due to hoisting, while let cannot 
// let is not hoisted in the same way as var, so it cannot be accessed before its declaration
//
// const is a block-scoped variable declaration that cannot be reassigned
// const is used for variables that should not change
// const variables must be initialized at the time of declaration
// const variables cannot be redeclared or updated
// const variables can be used to create constants, such as mathematical constants or configuration values
var pi = 3.14159; // Example of a constant
console.log(pi); // 3.14159
// const can also be used with objects and arrays, but the properties or elements can still be modified
var myObject = { name: "Alice", age: 25 };
console.log(myObject); // { name: "Alice", age: 25 }
myObject.age = 26; // Modifying a property of a const object
console.log(myObject); // { name: "Alice", age: 26 }
// const for function declaration
// 
var myFunction1 = function () {
    console.log("Hello, World!");
};
console.log("regular expression demo ");
// Regular expressions are used for pattern matching in strings
// They can be used to validate input, search for patterns, or replace text 
var cell = "1234567890";
var reg = /[0-9]{10}/;
if (cell.match(reg)) {
    console.log("Valid cell number");
}
else {
    console.log("Invalid cell number");
}
var password = "password123";
var passwordReg = /(?=.*[A-Z])\w{4,10}/;
if (password.match(passwordReg)) {
    console.log("Valid password");
}
else {
    console.log("Invalid password");
}
var expiryDate = new Date("2023-10-31");
console.log(expiryDate); // Output: 2023-10-31T00:00:00.000Z    
console.log(expiryDate.toISOString()); // Output: 2023-10-31T00:00:00.000Z
console.log(expiryDate.toJSON()); // Output: 2023-10-31
console.log(expiryDate.toString()); // Output: Wed Oct 31 2023
console.log(expiryDate.toLocaleString()); // Output: Wed, 31 Oct 2023
console.log(expiryDate.toLocaleDateString()); // Output: 31/10/202
console.log(expiryDate.toLocaleTimeString()); // Output: 00:00:00
console.log(expiryDate.getFullYear()); // Output: 2023
console.log(expiryDate.getMonth()); // Output: 9 (October, as months are
// zero-based)
console.log(expiryDate.getDate()); // Output: 31    
console.log(expiryDate.getDay()); // Output: 4 (Thursday)
console.log(expiryDate.getHours()); // Output: 0
console.log(expiryDate.getMinutes()); // Output: 0
console.log(expiryDate.getSeconds()); // Output: 0
console.log(expiryDate.setDate(15)); // Sets the date to 15th of the month
console.log(expiryDate); // Output: 2023-10-15T00:00:00.000Z
//error handlling
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
console.log("Error handling demo");
try {
    console.log(divide(10, 2)); // Output: 5
    console.log(divide(10, 0)); // This will throw an error
}
catch (error) {
    console.error("An error occurred:", error.message); // Output: An error occurred: Division by zero is not allowed.
}
finally {
    console.log("Finally block executed.");
}
function randomGenerator() {
    var randomNumber = Math.random(); // Generates a random number between 0 and 1
    console.log("Random number:", randomNumber);
    if (randomNumber < 0.5) {
        throw new TypeError("Random number is less than 0.5");
    }
    else {
        throw new RangeError("Random number is greater than or equal to 0.5");
    }
}
try {
    randomGenerator();
}
catch (error) {
    if (error instanceof TypeError) {
        console.error("TypeError caught:", error.message);
    }
    else if (error instanceof RangeError) {
        console.error("RangeError caught:", error.message);
    }
    else {
        console.error("Unknown error caught:", error.message);
    }
}
finally {
    console.log("Finally block executed.");
}
//custome error
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "CustomError"; // Set the name of the error
        return _this;
    }
    return CustomError;
}(Error));
// Function that throws a custom error
function throwCustomError() {
    throw new CustomError("This is a custom error message.");
}
try {
    throwCustomError();
}
catch (error) {
    if (error instanceof CustomError) {
        console.error("CustomError caught:", error.message);
    }
}
