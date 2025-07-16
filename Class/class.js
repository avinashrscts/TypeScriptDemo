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
var _a;
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
console.log("Interface Example Completed Successfully");
console.log("Class Example START");
// Class Example
var Passenger = /** @class */ (function () {
    // constructor() {
    //     this.firstName = "";
    //     this.lastName = "";
    // }
    function Passenger(firstName, lastName, frequentFlyerNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNumber = frequentFlyerNumber;
    }
    Passenger.prototype.displayInfo = function () {
        console.log("Passenger Information:");
        console.log("Name: " + this.lastName + ", " + this.firstName);
        if (this.frequentFlyerNumber) {
            console.log("Frequent Flyer Number: " + this.frequentFlyerNumber);
        }
    };
    return Passenger;
}());
var passenger1 = new Passenger("John", "Doe", 12345);
passenger1.lastName = "Doe";
console.log("Passenger Details:");
passenger1.displayInfo();
var one = "🐼";
var obj = (_a = {},
    _a['one'] = "🤡",
    _a[one] = "🐻",
    _a);
console.log("Object with computed property names:");
console.log(obj.one); // Output: 🤡
console.log(obj[one]); // Output: 🐻
console.log(obj);
var Flight = /** @class */ (function () {
    function Flight(flightNumber, departure, arrival, duration) {
        this.flightNumber = flightNumber;
        this.departure = departure;
        this.arrival = arrival;
        this.duration = duration;
    }
    Flight.prototype.displayFlightInfo = function () {
        console.log("Flight Information:");
        console.log("Flight Number: " + this.flightNumber);
        console.log("Departure: " + this.departure);
        console.log("Arrival: " + this.arrival);
        console.log("Duration: " + this.duration + " hours");
    };
    return Flight;
}());
var flight1 = new Flight("AA123", "New York", "Los Angeles", 6);
console.log("Flight Details:");
flight1.displayFlightInfo();
console.log("Class Example Completed Successfully");
console.log("Interface and Class Example END");
console.log("Inheritance Example START");
// Inheritance Example
var BMW = /** @class */ (function () {
    function BMW() {
    }
    BMW.prototype.start = function () {
        console.log("Starting the BMW...");
    };
    BMW.prototype.stop = function () {
        console.log("Stopping the BMW...");
    };
    return BMW;
}());
var BMWX5 = /** @class */ (function (_super) {
    __extends(BMWX5, _super);
    function BMWX5(make, model, year, color, cruiseControl) {
        var _this = _super.call(this) || this;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.color = color;
        _this.cruiseControl = cruiseControl;
        return _this;
    }
    BMWX5.prototype.displayDetails = function () {
        console.log("BMW X5 Details:");
        console.log("Make: " + this.make);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
        console.log("Color: " + this.color);
        console.log("Cruise Control: " + this.cruiseControl);
    };
    return BMWX5;
}(BMW));
var BMWX3 = /** @class */ (function (_super) {
    __extends(BMWX3, _super);
    function BMWX3(make, model, year, color, parkingAssist) {
        var _this = _super.call(this) || this;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.color = color;
        _this.parkingAssist = parkingAssist;
        return _this;
    }
    BMWX3.prototype.displayDetails = function () {
        console.log("BMW X3 Details:");
        console.log("Make: " + this.make);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
        console.log("Color: " + this.color);
        console.log("Parking Assist: " + this.parkingAssist);
    };
    return BMWX3;
}(BMW));
var bmwX5 = new BMWX5("BMW", "X5", 2021, "Black", true);
bmwX5.start();
bmwX5.displayDetails();
var bmwX3 = new BMWX3("BMW", "X3", 2022, "White", false);
bmwX3.start();
bmwX3.displayDetails();
