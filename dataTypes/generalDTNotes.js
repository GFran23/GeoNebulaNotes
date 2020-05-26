// This file is where I am creating my first GitHub Repo
// console.log() is used to print (AKA log) information to the Command Line Interface (CLI)
//     console.log("Hello World, I've updated this file!")  
    
// A variable is a symbol that stands for another value
// var x = 2;`
// console.log(1+x);

// JavaScript Data types

//     1. Strings
//     A set of characters surrounded by quotes " ", ' ', ` `
// var name = "Geo";
// console.log("My name is " + name);

// var singleQuote = 'single-quoted';
// var doubleQuote = "double-quoted";
// var backticks = `backticks`;

// back ticks can be used for more complicated stuff
// var multiplePeople = `Desmond
// Geo
// Nat
// `
// The following are template literals
// console.log(`My name is ${name}`)
// console.log(`${multiplePeople}`)

// We can reference a single letter by its index
// var str = "Highness";
// console.log('Index 2: ' + str[2] + '.'); //g
//Highness
//01234567 <- indices

// var str2 = "Sleepy";
// console.log(str2[1] + str2[2] + str2[3]);
//Sleepy
//012345 <- indices
// var alphabet = 'abcdefghijklmnopqrstuvwxyz';

// console.log(alphabet[13] + alphabet[8] + alphabet[2]);
// console.log("Hi," + name + ' welcome to FB!');
// console.log(`Hi ${name}, welcome to FB!`);


//a b c d e f g h i j k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
//0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 <- indices

// //Declare str1 and give it a value
// var  str1 = "Hello";
// //Goal is to change one letter of str1

// //We forget string are immutable and try to swap a letter, this doesnt work
// str1[0] = "J"; // Hello -> Jello; // DOESNT WORK

// //We create a new string (str2) and assign it a value by referencing indicies of str1
// var str2 =  `J${str1[1] + str1[2] + str1[3] + str1[4]}`;

// //We set str1 equal to str2
// // str1 = str2;

// //we check to see the value of str1
// console.log('str1: ' + str1 + ', ' + 'str2: ' + str2);
// // str[0] = "h"; // wont work

// console.log(str)
// //Strings are immutable, which means that they cannot be changed (however, the variable can)
// var str = "Hello";
// str = "Hello World!"; // we want new string to be "Hello World!"
// console.log(str)

//Getting string length & last character
    // var str = "Hello"; // length of 5, the o is at index 4
    // //Hello <- 5 characters = length of 5
    // var lengthOfStr = str.length; 
    // var lastStrChar = str[lengthOfStr - 1];
    // console.log(lastStrChar);




// //Get a specific substring, a substring is any small portion of a string
//     // Create our fullName variable 
//     // var fullName = 'Kaya;Chouprouta';
//     var fullName = 'Nic;Leask';
//     // Look for 'divider' index. AKA the index of ';'.
//     var divider = fullName.indexOf(';'); // a number
//     // Slice fullname into its first part starting from index 0 until the index of ';'. AKA the divider.
//     var first = fullName.slice(0, divider)
//     // Slice fullname into its last part starting the index of ';' until the end ';'. 
//     // +1 is to account for inclusiveness.
//     var last = fullName.slice(divider + 1, fullName.length)
//     // Show on the CLI. 
//     console.log(first);
//     console.log(last);

//Character doesn't exist 
    // Declare fullName and assign it a value.
    // var fullName = 'Nic Leask';
    // // Look for the index of ';'
    // var divider = fullName.indexOf(';'); // a number
    // // Show the result
    // console.log(divider); //Produces -1




// Making a string lower case
    // var meme = "tHiS is a MEmE";
    // var smallMeme = meme.toLowerCase();
    // var bigMeme = meme.toUpperCase();

    // console.log(meme)
    // console.log(smallMeme)
    // console.log(bigMeme);

    // // Example with no caps
    //     var fullName = 'leisser espana';
    //     var divider = fullName.indexOf(' ');
    //     var fixedFirst = 'L' + fullName.slice(1, divider); //'Leisser';
    //     var fixedLast = "E" + fullName.slice(divider + 2, fullName.length); //'Espana';
    //     var fixedName = fixedFirst + ' ' + fixedLast;
    //     console.log(fixedName);

    // //Variable naming conventions
    //     // camelCase
    //         var fullName = "Nic Leask";
    //     // snake_case
    //         var full_name = "Nic Leask";
    //     // PascalCase
    //         var FullName = "Nic Leask";
    
//str.replace('substring', 'newSubstring') 🔥IMMUTABILITY🔥
    // replace() is a method which searches for a specific string and replaces it with a new one.
    // Example:
        // Assign a variable to a string
        var str = "Hello World.";
        // Looking for a specific character and replacing it 
        // Setting our orignial variable to the new string
        str = str.replace('.', '!');
        // Logging it to the console
        console.log(str);

    'Hello World';
    "Don't";
    var secondWord = 'World';
    `Hello ${secondWord}`;

