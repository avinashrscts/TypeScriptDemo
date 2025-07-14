console.log("Interface Example");
var product1 = {
    id: 1,
    name: "Laptop",
    price: 1000,
    description: "A high-performance laptop",
    displayInfo: function () {
        console.log("Product ID: " + this.id);
        console.log("Name: " + this.name);
        console.log("Price: $" + this.price);
        console.log("Description: " + this.description);
    }
};
console.log("Product Information:");
product1.displayInfo();
var add = function (a, b) {
    console.log("Sum: " + (a + b));
};
var subtract = function (a, b) {
    return a - b;
};
console.log("Functional Interface Example:");
add(5, 10);
console.log("Difference: " + subtract(10, 5));
var studentList = ["Alice", "Bob", "Charlie"];
console.log("Student List:");
for (var i = 0; i < 3; i++) {
    console.log(studentList[i]);
}
var studentScores = {
    "Alice": 85,
    "Bob": 92,
    "Charlie": 78
};
studentScores["David"] = 90;
console.log("Student Scores:");
for (var student in studentScores) {
    console.log(student + ": " + studentScores[student]);
}
// Extending Interface
console;
var myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    numberOfDoors: "4",
    seat: 5,
    auto: true
};
console.log("Car Details:");
console.log("Make: " + myCar.make);
console.log("Model: " + myCar.model);
console.log("Year: " + myCar.year);
console.log("Color: " + myCar.color);
console.log("Number of Doors: " + myCar.numberOfDoors);
console.log("Seats: " + myCar.seat);
console.log("Automatic: " + myCar.auto);
