// Q1: Create a loop that greets us 5 times!
//      - After running your console should look like:
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!

// We are creating a loop. First we are declaring a variable which is called 'i'. 
// Then we are setting the maximum value of 'i' which is 0.
//  Then we are saying what we'd like 'i' to increase by.
for (let i = 0; i < 5; i++) {
// Run Console.log for our output in the terminal we will get 'Hi!' 5 times because the statement 5 
// is greater than 0 is a true statement 
console.log('Hi!');
// } Defines the end of the function    
}

// Q2: Create a loop which tells us what loop number it is on
//      - The CLI should look as follows:
//          - Loop Count: 1
//          - Loop Count: 2
//          - Loop Count: 3
//          - Etc.. based on the max value parameter

// Declare a loop with a variable 'j' that equals to index of 0, 10 is greater than 'j' which is 0
for (let j = 0; j < 10; j++) {
// I then added interpolation so the loop tells us what number loop count it is on in the terminal
    console.log(`Loop Count: ${j + 1}`);
// } Defines end of function        
}


// Q3: Loop over the following array and console.log the current index value
//      - ['Zeus', 'Hades', 'Hermies', 'Poseidon']
//          -   Zeus
//          -   Hades
//          -   Hermies
//          -   Poseidon

// declare a variable called greekGods. Set the variable greekGods equal to an Array filled with 4 
// strings which are, 'Zeus', 'Hades', 'Hermies', 'Poseidon'.
var greekGods = ['Zeus', 'Hades', 'Hermies', 'Poseidon'];
// declare a loop with a variable 'k' that equals to index of 0, our variable 'greekgods' length is
// greater than our variable 'k' 
for(var k = 0; k < greekGods.length; k++){
// I then created an Array Using [k] that give us a value at index 0
    var currentGod = greekGods[k];
// output will give me the variable which i turned into an Array
    console.log(currentGod);
// End of function
}


// Q4: Hard:
    // Loop over the following array and log to the CLI an array that has each word without any vowels
    //      - ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    //      - Output: ['ppl', 'Bnn', 'rng', 'Pch', 'Strwbrry', 'Plm']; 


    //I want to loop over the array
        // I want to figure out if a word has a vowel in it
        // If a word has a vowel remove said vowel
        // Do the same thing for capital voewls
        // Add these words into a new array

    // var fruit = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    // var fruitNoVowels = [];

    // Original solution
    // for(var i = 0; i < fruit.length; i++){
    //     var currentFruit = fruit[i];
    //     if(currentFruit.indexOf('a') > -1 || currentFruit.indexOf('A') > -1){
    //         currentFruit = currentFruit.split('A').join('');
    //         currentFruit = currentFruit.split('a').join('');
    //     }
    //     if (currentFruit.indexOf('e') > -1 || currentFruit.indexOf('E') > -1){
    //         currentFruit = currentFruit.split('E').join('');
    //         currentFruit = currentFruit.split('e').join('');
    //     }
    //     if (currentFruit.indexOf('i') > -1 || currentFruit.indexOf('I') > -1){
    //         currentFruit = currentFruit.split('I').join('');
    //         currentFruit = currentFruit.split('i').join('');
    //     }
    //     if (currentFruit.indexOf('o') > -1 || currentFruit.indexOf('O') > -1){
    //         currentFruit = currentFruit.split('O').join('');
    //         currentFruit = currentFruit.split('o').join('');
    //     }
    //     if (currentFruit.indexOf('u') > -1 || currentFruit.indexOf('U') > -1){
    //         currentFruit = currentFruit.split('U').join('');
    //         currentFruit = currentFruit.split('u').join('');
    //     }
    //     fruitNoVowels.push(currentFruit)
    // }

    // // Solution 2
    // for(var i = 0; i < fruit.length; i++){
    //     var currentFruit = fruit[i];
    //     // One if
    //     if(currentFruit.indexOf('a') > -1 || currentFruit.indexOf('A') > -1 ||
    //     currentFruit.indexOf('e') > -1 || currentFruit.indexOf('E') > -1 ||
    //     currentFruit.indexOf('i') > -1 || currentFruit.indexOf('I') > -1 ||
    //     currentFruit.indexOf('o') > -1 || currentFruit.indexOf('O') > -1 ||
    //     currentFruit.indexOf('u') > -1 || currentFruit.indexOf('U') > -1
    //     ){
    //         currentFruit = currentFruit.split('A').join('');
    //         currentFruit = currentFruit.split('a').join('');
    //         currentFruit = currentFruit.split('E').join('');
    //         currentFruit = currentFruit.split('e').join('');
    //         currentFruit = currentFruit.split('I').join('');
    //         currentFruit = currentFruit.split('i').join('');
    //         currentFruit = currentFruit.split('O').join('');
    //         currentFruit = currentFruit.split('o').join('');
    //         currentFruit = currentFruit.split('U').join('');
    //         currentFruit = currentFruit.split('u').join('');
    //     }
    //     fruitNoVowels.push(currentFruit)
    // }

    // // Solution 3
    // for(var i = 0; i < fruit.length; i++){
    //     var currentFruit = fruit[i].toLowerCase();
    //     // One if
    //     if(currentFruit.indexOf('a') > -1 || currentFruit.indexOf('A') > -1 ||
    //     currentFruit.indexOf('e') > -1 || currentFruit.indexOf('E') > -1 ||
    //     currentFruit.indexOf('i') > -1 || currentFruit.indexOf('I') > -1 ||
    //     currentFruit.indexOf('o') > -1 || currentFruit.indexOf('O') > -1 ||
    //     currentFruit.indexOf('u') > -1 || currentFruit.indexOf('U') > -1){
    //         currentFruit = currentFruit.split('A').join('').split('a').join('').split('E').join('').split('e').join('').split('I').join('').split('i').join('').split('O').join('').split('o').join('').split('U').join('').split('u').join('');
    //     }
    //     fruitNoVowels.push(currentFruit);
    // }

// Final Solution
   // declare a variable called fruit. Set the variable fruit equal to an Array filled with 5
   // strings which are, 'Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'
    var fruit = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
   // Set variable to an Array using []
    var fruitNoVowels = [];
   // Declare a loop with a variable 'i' that equals to index of 0, fruit.length is greater than 'i' which is 0
    for(var i = 0; i < fruit.length; i++){
   // 
        var currentFruit = fruit[i].toLowerCase();
        var vowels = ['a','e','i','o','u'];
        for (var index = 0; index < vowels.length; index++) {
            const currentVowel = vowels[index];
            if(currentFruit.indexOf( currentVowel ) > 0){
                currentFruit = currentFruit.split(currentVowel).join('');
            }
        }
        fruitNoVowels.push(currentFruit);
    }
    console.log(fruitNoVowels);
    
// Q5: Very Hard:
    //Optional 
    // Loop over the following array and log to the CLI each word without any vowels UNLESS the vowel is the first letter of the word
    //      - ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    //      - Output: ['Appl', 'Bnn', 'Orng', 'Pch', 'Strwbrry', 'Plm'];
// var fruit = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
// var fruitNoVowels = [];

    // Solution
    for(var i = 0; i < fruit.length; i++){
        var currentFruit = fruit[i].toLowerCase();
        var vowels = ['a','e','i','o','u'];
        for (var index = 0; index < vowels.length; index++) {
            const currentVowel = vowels[index];
            // NEXT LINE IS THE DIFFERENCE FOR THE TWO PROBLEMS
            // Start changing vowels after the first letter, 0, not at -1
            if(currentFruit.indexOf( currentVowel ) > 0){
                currentFruit = currentFruit.split(currentVowel).join('');
            }
        }    
        fruitNoVowels.push(currentFruit);
    }
    console.log(fruitNoVowels);



// What is incramentation
 //   var num = 1
    //   num = num + 1 
    //   num += 1;
    //   num++; // This means add 1
    //  Big Difference is (n +1) vs (n = n + 1)
    // num++;
    // num++;
    // num++;
    // num++;

    // How and why is this variable changing?

    // var str = 'Hello';
    // An example of returning the index value 
    // Thius is how a loop thinks 
    // str(0) //H
    // str(1) //E
    // str(2) //L
    // str(3) //L
    // str(4) //O
    // str(5) //break 

    // Look uo to the number !00, incfreasing by 1

  //   for(var i = 0; i < 5; i+=1){

 //   console.log(i);
// }

// What is Syntax:
    // Similar to grammer 
    // Lets eat, Grandpa! // This means lets eat with grandpa
    // Lets eat Grandpa!  // This means lets eat grandpa

    
    // var variableName1;// declare variable syntax 
    // var variableName2 = 'Test'; // assign vartiable a value
    // if(condition){
    //     execution;
    //  }; // if statement syntax
    // for (let index = 0; index < array.length; index++) {
    //    'do something here'
    // } // for loop syntaz
    // console.log(variableName);
