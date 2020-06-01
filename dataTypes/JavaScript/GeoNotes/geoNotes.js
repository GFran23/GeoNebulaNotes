// A variable is a symbol that stands for another value // //
// Initializing a Variable 

let a = 5;
let b = 10;
let c = "I am a"; 

console.log(a + 1); // Output: 6
console.log(b + 5); // Output: 15
console.log(c + " String!"); // Output: I am a String!

// // Finding a Remainder // // 

console.log(11 % 3); // Only give us the remainder which is 2

// // Compound Assignment with Augmented Addition // //

let d = 3;
let e = 17;
let f = 12;

console.log(d += 12);  // Same for Subtraction -= 
console.log(e += 9);  // Same for Multiplication *=
console.log(f += 7); // Same for Divide /=

// // ESCAPING LITERAL QUOTES IN STRINGS // // 
// // \ <-- Escape Character = Will no longer be considered the end of the String/Last Character in the String.
// // \ <-- Not Used Often!

let myStr = "I am a \"double quoted\" string inside \"double quotes\"";

console.log(myStr); // Output: I am a "double quoted" string inside "double quotes"



// // QUOTING STRINGS WITH SINGLE QUOTES // // 
// // If We Use Backticks `` <-- Then We Can Use Both Double " " <-- and Single Quotes ' ' <--

let myStr2 = '<a href="http://www.example.com"target="_blank">Link</a>';

console.log(myStr2); // Output: <a href="http://www.example.com"target="_blank">Link</a>

// // Concatenating Strings with Plus Operator // //
// Concatenate = Link (things) together in a chain or series.

let ourStr = "I come first. " + "I come second.";

console.log(ourStr); // Output: I come first. I come second.

// // Concatenating Strings with Plus Equals Operator // //  

let ourStr2 = "I come first. ";
ourStr2 += "You come last.";

console.log(ourStr2); // Output: I come first. You come last.

// // Constructing Strings with Variables // //

let myName = "Geo";
let myStr3 = "My name is " + myName + " and I am well!";

console.log(myStr3) // Output: My name is Geo and I am well!

// // Appending Variables to Strings // // 

let someAdjective = "worthwhile";
let myStr4 = "Learning to code is ";
myStr4 += someAdjective;
console.log(myStr4); // Output: Learning to code is worthwhile

// // .length; --> Count Starts at 1 // // 
// // Finding Length of String
// // Gives us how many characters are in a string. --> Integers = Numbers 

let lastNameLength = 0; 
let lastName = "Washington";

lastNameLength = lastName.length; // Will count from 1 on up since its a String

console.log(lastNameLength); // Output: 10

// // Bracket Notation to Find First Character in a String // // 
// // A way to get a Character in a Specific Index in a String 
// // Index Count Starts at 0 which is called 0 based Indexing

let firstLetterOfLastName = " "; // Declaring an Empty String
let lastName2 = "Obama"; // Declaring a String with the Name "Obama"

firstLetterOfLastName = lastName2[0] // Empty " " = "Obama" and we want the 1st Index which is [0]

console.log(firstLetterOfLastName); // Output: The Letter 'O'

// // Bracket Notation to Find Last Character in String // // 

let firstName = "William"; // Declared a String with the name "William"
let lastLetterOfFirstName = firstName[firstName.length - 1]; // Length = 7 - 1 = Index of 6 

console.log(lastLetterOfFirstName); // Output: 'm' 

// //  .replace() // // 
// // Replaces the First Occurence of a Character with another Character
// // Data type--> STRING

let str2 = "Hello-World"; // Declare a Variable which is a Strin g
let replaceStr2 = str2.replace("-", " "); // Declare new Variable which Equals str4 and replace - with empty space

console.log(replaceStr2); // Output: Hello World 

// //  .split() // // 
// // Turn String Into Array on the Given Character

let str3 = "Hello-World"; // Declare String Variable 
let strToArr3 = str3.split("-"); // Declare new Variable and turn into Array

console.log(strToArr3); // Output: ['Hello', 'World']

// // .toUpperCase() // // 
// // Converts a String to Uppercase Letters

let str4 = "Hello World";
let upStr4 = str4.toUpperCase();

console.log(upStr4);

// // .tolowercase() // // 
// // Converts a String to lowercase letters

let str5 = "Hello World";
let lowerStr5 = str5.toLowerCase();

console.log(lowerStr5);

// // Word Blanks // // 

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) { // Calling a Function named wordBlanks

let result = ""; // Declaring a Variable named result which is an empty string
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
//         // ^^ Adding to our string 
    return result; // return our Variable named result
}
console.log(wordBlanks("dog", "big", "ran", "quickly")); // Output: The big dog ran to the store quickly

// // 🇯🇲🇯🇲🇯🇲🇯🇲ARRAYS🇯🇲🇯🇲🇯🇲🇯🇲 // //

// // Store Multiple Values with Arrays // /
// // Array[] --> JavaScript Array is a Single Variable that Stores Multiple Elements, Elements can be any Datatype
// // EXAMPLE --> let myArr = ["John", "Joe", "James", 23] 

// // Nested Arrays --> When One of the Elements in an Array is another Array its called a Nested Array 
// // EXAMPLE  --> let myArray = [["Bulls", 23], ["White Sox", 45]];

// // Access Array Data with Indexes Using Bracket Notation // // 

let myArray = [50, 60, 70, 3, 6, 1000]; // Declared a Variable which is an Array with Numbers

let myData = myArray[5]; // Declared a Variable named myData which is Equal to myArray Index[5] --> 1000 

console.log(myData); // Output: 1000

// // Modify Array Data with Indexes // // 

let myArr1 = [23,65, 66,61]; // Declared a Variable which is an Array with Numbers
    myArr1[0] = 60; // Changing the Data of the First Index[0] to 60

console.log(myArr1); // Output: [60, 65, 66, 61]

// // Access Nested Arrays With Indexes // // 
            //   [0]        [1]        [2]          ⇣----[3]----⇣ 10,11,12 have a 0 Index, 13 Index of 1, 14 Index of 2
let myArr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]]; // Declared 3 Layer Deep Array
             //0, 1, 2    0, 1, 2    0, 1, 2     0,   0,  0    1,  2
let myData1 = myArr2[3][1]; // Indexing the Array

console.log(myData1); // Output: 13 

// // Manipulate Arrays with .Push() // // 
// // Adds a New Element to the End of an Array

let ourArr1 = ["Stimpy", "the", "cat"]; // Declaring a Variable which is An Array
    ourArr1.push("happy", "happy", "joy"); // using .push() to add the new Elements to the End of Array

let myArr3 = [["Geo", 23], ["King", 12]]; // Declaring a Variable which is a Nested Array
    myArr3.push(["dog", 3]); // using .push([]) to add new Elements to the End of Array -->([]) using [] inside () since its a Nested Array

console.log(ourArr1); // Output: [ 'Stimpy', 'the', 'cat', [ 'happy', 'happy', 'joy' ] 
console.log(myArr3); //  Output: [ [ 'Geo', 23 ], [ 'King', 12 ], [ 'dog', 3 ] ]

// // Manipulate Arrays with .pop() // // 
// // Deletes the last Element from Array
            // 0  1  2  3  4
let ourArr2 = [1, 2 ,3, 4 ,5]; //  Declaring a Variable which is An Array
    ourArr2.pop(); // Using .pop() to Remove Last Element From Array
            //    0              1
let myArr4 = [["John", 45], ["cat", 5]]; // Declaring a Variable which is a Nested Array
    myArr4.pop(); // Using .pop() to Remove Last Element From Array 

console.log(ourArr2); // Output: [ 1, 2, 3, 4 ]
console.log(myArr4);  // Output: [ [ 'John', 45 ] ]

// // Manipulate Arrays with .shift() // // 
// // Removes the First Element from an Array
            //   0       1        2        3        4
let ourArr3 = ["lake", "bake", "shake", "blake", "rake"]; //  Declaring a Variable which is An Array
    ourArr3.shift() // Using .shift() to Remove the First Element From Array = "lake"
                //        0                     1
let myArr5 = [["hello", "world"], ["goodbye", "world"]]; // Declaring a Variable which is A Nested Array
    myArr5.shift() // Using .shift() to Remove the First Element From Array = ["hello", "world"]

console.log(ourArr3); // Output: [ 'bake', 'shake', 'blake', 'rake' ]
console.log(myArr5); // Output: [ [ 'goodbye', 'world' ] ]

// // Manipulate Arrays with .unshift() // // 
// // Adds an Element to the Beginning of an Array

let ourArr4 = ["hello", "world"]; // Declaring a Variable which is An Array
    ourArr4.unshift("Say"); // Using .unshift() to Add an Element to the Beginning 

let myArr6 = [["Hey", "Johnny"], ["Johnny", "Bravo"]]; // Declaring a Variable which is A Nested Array
    myArr6.unshift(["Wow"]); // Using .unshift() to Add an Element to the Beginning 

console.log(ourArr4); // Output: [ 'Say', 'hello', 'world' ]
console.log(myArr6); // Output: [ [ 'Wow' ], [ 'Hey', 'Johnny' ], [ 'Johnny', 'Bravo' ] ]

// // Manipulate Arrays using .splice(a, b, " ") // // 
// // Adds and Removes Elements From an Array

let ourArr5 = ["Hello World", "Girl"]; // Declaring a Variable which is An Array
    ourArr5.splice(0,1, "Its", "a"); // Start at Index of 0 -->A, Stop at Index 1-->B, Add/Remove " "  

console.log(ourArr5); // Output: [ 'Its', 'a', 'Girl' ] 


// // .slice(a, b) // // 
// // Getting Specific Characters Inbetween Two Indicies. Inclusive at the Start, Exclusive at the End

let str = "George of The Jungle"; // Declare a Variable which is a String
let newStr = str.slice(0,6); // Declare new Variable which is Equal to Str and Slice Characters after Index 0 and Index 6

console.log(newStr); // Output: George

// // .join() // // 
// // Converts Array into String

let myArr7 = ["Leave", "Me", "Alone"]; // Declare a Variable which is an Array 
let strFromArr7 = myArr7.join("-"); // Assign a new Variable which is Equal to myArr7 and Join into a String 

console.log(strFromArr7); // Output: Leave-Me-Alone

// // .length // //
// // How many Elements are in the Array

let arr8 = ["Hello World", "boy", "girl", "pearl"]; // Declare a Variable which is an Array

console.log(arr8.length); // Output: 4 --> 4 Elements

//  //  ITERATE AN ARRAY WITH FOR LOOPS  //  //

let itArr = []; // Declare a Variable which is an Empty Array

for (let i = 0; i < 5; i++) {  // For Index = 0; i < 5; i++ = 1; // { = Opening Curly Bracket

    itArr.push(i); // Iterate 5x starting from 0 and each time we Pushed a New Digit On To The Array
}
console.log(itArr); // Output: [ 0, 1, 2, 3, 4 ]

//  // ITERATE EVEN NUMBERS WITH A FOR LOOP //  //

let evenNum = []; // Declare a Variable which is an Empty Array

for (let i = 0; i < 10; i += 2) { // For Index = 0; i < 10; i += 2; // { = Opening Curly Bracket

    evenNum.push(i); // Iterate 10x starting from 0, counting by 2

} // Closing Curly Bracket
console.log(evenNum); // Output: [ 0, 2, 4, 6, 8 ]

//  // ITERATE ODD NUMBERS WITH A FOR LOOP //  //

let oddNum = []; // Declare a Variable which is an Empty Array

for (let i = 1; i < 10; i += 2) { // For Index = 1; i < 10; i += 2; // { = Opening Curly Bracket

    oddNum.push(i); // Iterate 10x starting from 1, counting by 2
}
console.log(oddNum); // Output: [ 1, 3, 5, 7, 9 ]

// // COUNT BACKWARDS WITH A FOR LOOP // //

let countBack = []; // Declare a Variable which is an Empty Array

for (let i = 10; i > 0; i -= 2) { // For Index = 10; i > 0 ; i -= 1; // { = Opening Curly Bracket

    countBack.push(i); // Decrement 10x starting from 10, counting by 2
}
console.log(countBack); // Output: [ 10, 8, 6, 4, 2 ]

// // ITERATE THROUGH AN ARRAY USING A FOR LOOP // // 

let geoArr = [ 9, 10, 11, 12]; // Declare a Variable which is an Array
let geoTotal = 0; // Declare a Variable which is the number 0 

for (let i = 0; i < geoArr.length; i++) { // For Index = 0; i < arr.length which is 4; i++ = 1; 

    geoTotal += geoArr[i]; // gonna add up all the numbers
}
console.log(geoTotal); // Output: 42

// //   PROFILE LOOKUP USING A FOR LOOP  // // 

let contacts = [ // Array of Objects with key value pairs
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "6317870954",
        "likes": ["Pizza", "Coding", "Dancing"]
    },
    {
        "firstName": "Carmelo",
        "lastName":  "Anthony",
        "number": "7182348765",
        "likes": ["Basketball", "Football", "Hagrid"]
    },
    {
        "firstName": "John",
        "lastName": "Wick",
        "number": "3059094567",
        "likes": ["Dogs", "Guns", "Violence"] 
    },
    {
        "firstName": "Clark",
        "lastName": "Kent",
        "number": "unknown",
        "likes": ["Lowis Lane", "Flying", "Fighting"]
    }
];
function lookUpProfile(name, prop) { // Create a function with the name lookUpProfile which takes in two Params

    for (let i = 0; i < contacts.length; i++) { // Iterate through each element in the contacts list using For Loop

        if (contacts[i].firstName === name) { // check to see if the firstName is strictly equal to name
            return contacts[i][prop] || "No such property" // If name is there return value of property or return no such property
        }
    } 
    return "No such contact"; // if contact doesn't exist return no such contact
    

}
console.log(lookUpProfile("Carmelo", "likes")); // Output: [ 'Dogs', 'Guns', 'Violence' ]

// // GENERATE RANDOM WHOLE NUMBERS // // 
// Math.floor rounds down to the nearest whole number
// Math.random creates a random number, can never be 1 can be 0  

let randomNumberBetween0and19 = Math.floor(Math.random() * 20); // 

function randomWholeNum() { // create function named randomWholeNum

    return Math.floor(Math.random() * 10); // gives a random number between 0 and 9 everytime you console.log
}
console.log(randomWholeNum()); // Output: different random number between 0 and 9

//  //  GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE //  //

function randomRange(myMin, myMax) { // Create function which take in two Parameters which takes a minimum number and a maximum  number

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // runs through calculation to run through random number to get min and max
}
console.log(randomRange(5, 15)); // Output: Different Random Number Between 5 and 15

// // USE THE parseInt FUNCTION // // 
// Takes a String and Returns an Integer

function convertToInteger(str6) {

    return parseInt(str6);
}
console.log(convertToInteger("56"));

// // USE MULTIPLE CONDITIONAL (TERNARY) OPERATORS //  // 
// Nested Conditional Operator

function checkSign(num) { // Create a function that takes in a Parameter

    return num > 0 ? "positive" : num < 0 ? "negative" : "zero" // If "True" num > 0 return Positive; If  ":" num < 0 ? If True Return Negative; If False ":" Return Zero
}
console.log(checkSign(10)); // Output: positive

// // "use strict"; // // 
// Enables Strict Mode Which Catches Common Coding Mistakes and Unsafe Actions
// Used at The Top Of a Full JavaScript File or in a Function  
    
// // OBJECT REFERENCE PRACTICE // //

let cars = {
    "Porche": {
        "steeringWheel": true,
        "AWD": true,
        "numberOfSeats": 2
    },
    "BMW": {
        "steeringWheel": true,
        "AWD": true,
        "numberOfSeats": 4
    },
    "Ford": {
        ""

    }
}

