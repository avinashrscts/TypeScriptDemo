var n1: number = 10;
console.log(n1);
var s1: string = "Hello";
console.log(s1);
var s2: string = 'World';
console.log(s2);
var s3: string = `Hello World`;
console.log(s3);
var b1: boolean = true;
console.log(b1);
var b2: boolean = false;
console.log(b2);
var a1: any = 10;
console.log(a1);
var a1: any = "Hello any";
console.log(a1);
/*alert("Hello World");
confirm("Are you sure?");
var data1 = prompt("Enter your name:");
console.log(data1);*/
//homogeneous array
var a2: number[] = [10, 20, 30];
var a3: Array<string> = ["Hello", "World"];
console.log(a3);
//heterogeneous array
var a4: any[] = [10, "Hello", true];
console.log(a4);
/* enums example */
enum Color { Red, Green, Blue };
var c1: Color = Color.Red;
console.log(c1); // 0
var c2: Color = Color.Green;
console.log(c2); // 1
console.log(Color[0]); // Red
console.log(Color[1]); // Green

enum weekend { Saturday = 6, Sunday = 7 };
console.log(weekend.Saturday); // 6
console.log(weekend.Sunday); // 7
console.log(weekend[6]); // Saturday
console.log(weekend[7]); // Sunday

//stringtype demo
var s4: string = "<a href='https://www.google.com'>my \\ Google</a>";
console.log(s4); // <a href='https://www.google.com'>Google</a>
var Google: string = "Google";
var s5: string = `<a href='https://www.google.com'>${Google}</a>`;
console.log(s5); // <a href='https://www.google.com'>Google</a>
console.log(s5.length); // 43
console.log(s5.toUpperCase()); // <A HREF='HTTPS://WWW.GOOGLE.COM'>GOOGLE</A>
console.log(s5.toLowerCase()); // <a href='https://www.google.com'>google</a>
console.log(s5.indexOf("Google")); // 22        
console.log(s5.lastIndexOf("Google")); // 22
//console.log(s5.includes("Google")); // true 
//console.log(s5.startsWith("<a")); // true
//console.log(s5.endsWith("</a>")); // true
console.log(s5.replace("Google", "Microsoft")); // <a href='https://www.google.com'>Microsoft</a>
console.log(s5.split(" ")); // [ '<a', "href='https://www.google.com'>", 'Google</a>' ]
console.log(s5.trim()); // <a href='https://www.google.com'>Google</a>
console.log(s5.slice(0, 10)); // <a href='https://
console.log(s5.substring(0, 10)); // <a href='https://  
console.log(s5.charAt(0)); // <
console.log(s5.charCodeAt(0)); // 60

//union type demo
var u1: number | string = 10;
console.log(u1); // 10
u1 = "Hello";
console.log(u1); // Hello

//Assigment demo
var a5: number = 10;
var a6: number = 20;
var a7: number = a5;// a7 is assigned the value of a5;
console.log(a7); // 10
a7 += a6; // a7 is incremented by a6;
console.log(a7); // 30

a7 -= a6; // a7 is decremented by a6;
console.log(a7); // 10  
a7 *= a6; // a7 is multiplied by a6;
console.log(a7); // 200
a7 /= a6; // a7 is divided by a6;
console.log(a7); // 10
a7 %= a6; // a7 is modulo by a6;
console.log(a7); // 10
a7 **= a6; // a7 is exponentiated by a6;    
console.log(a7); // 100
a7 &= a6; // a7 is bitwise ANDed with a6;
console.log(a7); // 0

a7 |= a6; // a7 is bitwise ORed with a6;
console.log(a7); // 20  
a7 ^= a6; // a7 is bitwise XORed with a6;
console.log(a7); // 10
a7 <<= 2; // a7 is left shifted by 2;
console.log(a7); // 40
a7 >>= 2; // a7 is right shifted by 2;
console.log(a7); // 10

//comparison demo
var c4: number = 10;
console.log(c4 == 10); // true
console.log(c4 != 20); // true
console.log(c4 > 5); // true
console.log(c4 < 15); // true   
console.log(c4 >= 10); // true
console.log(c4 <= 10); // true
console.log(c4 === 10); // true
console.log(c4 !== 20); // true     
var c5: any = "20";
console.log(c5 == 20); // true (type coercion)
console.log(c5 === 20); // false (strict equality)

console.log((c4 == 12) && (c5 === "20")); // false
console.log((c4 == 10) && (c5 === "20")); // false      
console.log((c4 == 10) || (c5 === "10")); // true          

console.log(10 > 20 ? "10 is greater than 20" : "20 is greater than 10"); // 20 is greater than 10
console.log(10 < 20 ? "10 is less than 20" : "20 is less than 10"); // 10 is less than 20

//switch case demo
var day: number = 3;            
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//while loop demo
var i: number = 0;  
while (i < 5) {
    console.log(i);
    i++;
}

//for loop demo
var email: string = "test@test.com";