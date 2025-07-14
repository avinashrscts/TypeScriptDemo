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
