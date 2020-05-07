// This is how we declare strings
// var str = 'Hello World';

// Setting a variable equal to an Array, Arrays are defined with []
//      - Example: var arr = []

// Indexing:
//      - Grabbing an item from an array is called indexing an array
//      - For example arr[1] would give us the value at index 1

// Adding items
//      - to the end of an array using push() 
//      - to the beginning of an array using unshift()
//      - to the middle using splice()
//      - Note: Arrays AREN'T immutable, they can be changed!

// Array Methods: 
//      - length gives us the length of the array
//          - Example: ['Sam', 'Jess', 'Sid'].length === 3;
//      - push adds an item to the end of an array
//          - Example: ['Sam', 'Jess', 'Sid'].push('Mic') === ['Sam', 'Jess', 'Sid', 'Mic'];
//      - unshift adds an item to the front of an array
//          - Example: ['Sam', 'Jess', 'Sid'].unshift('Mic') === [Mic, 'Sam', 'Jess', 'Sid'];
//      - shift removes the first item from array
//          - Example: ['Sam', 'Jess'; 'Sid'].shift === ['Jess', 'Sid'];
//      - pop deletes the last item in array
//          - Example: ['Sam', 'Jess', 'Sid'].pop() === ['Sam', 'Jess'];
//      - join converts an array into a string 
//          - Example: ['Sam', 'Jess', 'Sid'].join(',') === 'Sam, Jess, Sid';


// Class Work:
// (Comment in each section by itself, remember you may need to console.log what you want to see in the CLI)
    //Section 1 examples:
    //   var arr = ['Desmond', 'Mitsie', 'Kaya']
    //   arr[1] // 'Mitsie';
    //   console.log(arr); // gives us ['Desmond', 'Mitsie', 'Kaya']

    //Section 2 examples:
    //  var arr = ['Desmond', 'Mitsie', 'Kaya', 'Geo'];
    //  arr.splice(1, 2, 'Mitsie', 'Spencer'); // [ 'Desmond', 'Mitsie', 'Spencer', 'Geo' ]
    //  arr.push('Debbie'); // [ 'Desmond', 'Mitsie', 'Spencer', 'Geo', 'Debbie' ]
    //  arr.unshift('Solomon'); // [ 'Solomon', 'Desmond', 'Mitsie', 'Spencer', 'Geo', 'Debbie' ]
    //  arr.splice(1, 0, 'Nat') // [ 'Solomon', 'Nat', 'Desmond', 'Mitsie', 'Spencer', 'Geo', 'Debbie' ];
     

    //Section 3 example:
    // GOAL: Turn a string into an array and add a value, then change it back to a string
    // var str = '4444-5555-3333-2222-1111';
    //  var arr = str.split('-');
    //  str = arr.join('');
    // console.log(str);



   //           0      1      2       3
// var arr = ['Geo', 'Nat', 'Debb', 'Kaya'];

//  console.log(arr);
//  var str = arr.join('')
//  console.log(str)
//  console.log(str.split(','));

// arr.splice(2, 1,  'Mitsie');

// arr.push('Mitsie');
// arr.unshift('Spencer');
// arr.splice(1, 0, 'Solomon');

// console.log('Log 2: ', arr);


//  Goal: Turn a string into an array and add a value, then change it back to a string
//  var str = 'Hello World';
//  var arr = str.split('');
// arr. splice(5, 1, '-')
// str = arr.join('');
// console.log(str);


// var arr = [];
// var str = '';
// var obj ={};

// null  
// The absence of anything


// var thing = null;

// Undefined 
// Not the same as undefined

// 12345678

// 9 10 11 12 13 14 15 16

// 17 18 19 20 21 22 23 24 -> Null

// var name = 'Kaya,Solomon,Spencer, Mitsie';
// if( name.indexOf(',')){
    // console.log(name.split(','))
// } else {
// console.log(name.indexOf(','))
// }

// var fullName = 'Desmond Hosham-Brathwaite'

// if(fullName.length > 20){
//     fullName = fullName.slice(0, 20)
//     console.log(fullName)
// }


// if(1 == '1'){
//     console.log('hit')
// } else {
//     console.log('miss');
// }
// = is used for assigning values
// == is a "soft check" 
// === is a perfect or "hard check"




// Homework

// Strings Q1:
    // var str1 = 'Amerigo Vespucci';
    // var lengthOfStr1 = str1.length;
    // console.log(lengthOfStr1)

// Strings Q1
//    var str2 = 'Sean Carter';
//    var lengthOfStr2 = str2.length;
//    console.log(lengthOfStr2)

// Strings Q2
//    var str1 = 'Amerigo Vespucci';
//    var str2 = 'Sean Carter';
//    var lower = str1.toLowerCase();
//    var upper = str2.toUpperCase();

//    console.log(str1)
//    console.log(str2)
//    console.log(lower)
//    console.log(upper);

// Strings Q3
//   var str = 'My home town';
//   var strArr = (str.split(' ')[1]);
//   console.log(strArr); 

//   var str ='Lets eat Grandpa!';
//   var strArr(str.split(' ') [1]);
//   console.log(strArr);



// Strings Q4:
    // var str = "I'm very happy";
    // var arr = str.split(" ");
    // arr[1] = arr[1].toUpperCase();
    // console.log(arr.join(' '));


// Array Q1:
//   var arr = ['Red', 'Green', 'Yellow', 'Purple'];
//   console.log(arr [2]);


// Array Q2: 
    //  var arr = ["Red", "Green", "Yellow", "Purple"];
    //    arr.shift();
    //    arr.push("Pink");
    //   arr.splice(2, 0, "Blue");
    //   console.log(arr);
    

    // The first argument is the index of insertion.
    // The second argument is the number of the deletions.
    // The third argument is going to be what your inserting. 

