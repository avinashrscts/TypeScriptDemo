console.log("Interface Example");
//Interface is a way to define the structure of an object in TypeScript
interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    displayInfo: () => void;
}

var product1: IProduct = {
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

// functional interface
interface Add {
    (a: number, b: number): void;
}

interface Subtract {
    (a: number, b: number): number;
}

var add: Add = function (a: number, b: number): void {
    console.log("Sum: " + (a + b));
};

var subtract: Subtract = function (a: number, b: number): number {
    return a - b;
};

console.log("Functional Interface Example:");
add(5, 10);
console.log("Difference: " + subtract(10, 5));

// number index interface

interface StudentNames {
    [index: number]: string;
}

var studentList: StudentNames = ["Alice", "Bob", "Charlie"];
console.log("Student List:");
for (var i = 0; i < 3; i++) {
    console.log(studentList[i]);
}  

interface StudentScores {
    [index: string]: number;
}

var studentScores: StudentScores = {
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
console

interface Exterior{
    color: string;
    numberOfDoors: string;
}

interface Interior {
   seat: number;
   auto: boolean;
}

interface Car extends Exterior, Interior {
    make: string;
    model: string;
    year: number;   
}

var myCar: Car = {
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
class Passenger {
    // Class is a blueprint for creating objects in TypeScript
    // It can have properties and methods
    // Properties are defined using public, private, or protected keywords
    firstName: string;
    lastName: string;
    frequentFlyerNumber?: number; // Optional property
    // constructor() {
    //     this.firstName = "";
    //     this.lastName = "";
    // }

    constructor(firstName: string, lastName: string, frequentFlyerNumber?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNumber = frequentFlyerNumber;
    }

    displayInfo(): void {
        console.log("Passenger Information:");
        console.log("Name: " + this.lastName + ", " + this.firstName);
        if (this.frequentFlyerNumber) {
            console.log("Frequent Flyer Number: " + this.frequentFlyerNumber);
        }   
    }
}

var passenger1 = new Passenger("John", "Doe", 12345);
passenger1.lastName = "Doe";
console.log("Passenger Details:");
passenger1.displayInfo();

const one ="🐼";
const obj ={
    ['one']: "🤡",
    [one]: "🐻",
}

console.log("Object with computed property names:");
console.log(obj.one); // Output: 🤡
console.log(obj[one]); // Output: 🐻
console.log(obj);


interface Iflight {
    flightNumber: string;
    departure: string;
    arrival: string;
    duration: number;
    displayFlightInfo: () => void;
}

class Flight implements Iflight {
    flightNumber: string;
    departure: string;
    arrival: string;
    duration: number;

    constructor(flightNumber: string, departure: string, arrival: string, duration: number) {
        this.flightNumber = flightNumber;
        this.departure = departure;
        this.arrival = arrival;
        this.duration = duration;
    }

    displayFlightInfo(): void {
        console.log("Flight Information:");
        console.log("Flight Number: " + this.flightNumber);
        console.log("Departure: " + this.departure);
        console.log("Arrival: " + this.arrival);
        console.log("Duration: " + this.duration + " hours");
    }
}  

var flight1 = new Flight("AA123", "New York", "Los Angeles", 6);
console.log("Flight Details:");
flight1.displayFlightInfo();

console.log("Class Example Completed Successfully");
console.log("Interface and Class Example END"); 

console.log("Inheritance Example START");

// Inheritance Example
class BMW{
    make: string;
    model: string;
    year: number;
    color: string;
    start(): void {
        console.log("Starting the BMW...");
    }
    stop(): void {
        console.log("Stopping the BMW...");
    }

}

class BMWX5 extends BMW {
    cruiseControl: boolean;

    constructor(make: string, model: string, year: number, color: string, cruiseControl: boolean) {
        super();
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.cruiseControl = cruiseControl;
    }

    displayDetails(): void {
        console.log("BMW X5 Details:");
        console.log("Make: " + this.make);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
        console.log("Color: " + this.color);
        console.log("Cruise Control: " + this.cruiseControl);
    }
}

class BMWX3 extends BMW {
    parkingAssist: boolean;

    constructor(make: string, model: string, year: number, color: string, parkingAssist: boolean) {
        super();
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.parkingAssist = parkingAssist;
    }

    displayDetails(): void {
        console.log("BMW X3 Details:");
        console.log("Make: " + this.make);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
        console.log("Color: " + this.color);
        console.log("Parking Assist: " + this.parkingAssist);
    }
}

var bmwX5 = new BMWX5("BMW", "X5", 2021, "Black", true);
bmwX5.start();
bmwX5.displayDetails();

var bmwX3 = new BMWX3("BMW", "X3", 2022, "White", false);
bmwX3.start();
bmwX3.displayDetails();

class Student{
    private _name: string;
    static school: string = "ABC High School";

    display(){
        console.log("Student Name: " + this._name);
        console.log("School: " + Student.school);
    }
    get GetName(): string {
        return this._name;
    }
    set SetName(value: string) {
        this._name = value;
    }
}

var student1 = new Student();
student1.SetName = "Alice";
student1.display();
console.log(student1.GetName); // Accessing the name property using getter
console.log(Student.school); // Accessing the static property
