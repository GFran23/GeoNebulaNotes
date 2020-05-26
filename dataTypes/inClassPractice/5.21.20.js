// LOOPING OVER STRINGS

// Log greet into the console using a loop 5 times

// function greet(){

//     for(var i = 0; i < 5; i++){
//         console.log('hi!')
//     }
// }
// greet();

//  Log each letter into the console using as loop

// let str = "Hello World!"

// function letterLogger(str){
//     for( let i = 0; i < str.length; i++){
//         console.log(str[i]);
//     }
// }
// letterLogger(str);

// Loop through every other letter in String

// let str = "Hello World"

// function otherLetter(str){
//     for( let i = 0; i < str.length; i+=2){
//          console.log(str[i]);
//     }
// }
// otherLetter(str);


// Reverse String Using a for loop
// let str = "Hello World"

// function reverseLetter(str){
//     for( let i = str.length - 1; i >= 0; i--){
//          console.log(str[i]);
//     }
// }
// reverseLetter(str);


// LOOPING OVER ARRAYS

// iterate over array and log current element

// let arrOfName = ['Patrick', 'Debbie', 'Geo', 'Nat'];

// function iterateArr(arrParam){
//     for( let i = 0; i < arrParam.length; i++){
    
//         console.log(arrParam[i]);
//     }
// }
// iterateArr(arrOfName);

//  iterate over an array and log every other item

// var arrColors = ['Red', 'Blue', 'Pink', 'Silver', 'Orange'];

// function everyOtherEle(arrParam){
//     for( let i = 0; i < arrParam.length; i += 2){
//        console.log(arrParam[i]);
//     }
// }
// everyOtherEle(arrColors);

//  log first letter of each element 

// var arrCars = ['BMW', 'Mercedes', 'Nissan', 'Honda', 'Ford'];

// function firstLetterEle(arrParam){
//     for(let i = 0; i < arrParam.length; i++){
//          let currentCar = arrParam[i]; //BMW, then Mercedes etc etc 
//          // Next tweo console.logs do same thing
//         console.log(currentCar.slice(0,1));
//         // console.log(currentCar[0]);

//     }
// }
// firstLetterEle(arrCars)

//  create a function which logs the last letter of every other item starting from the back of the array
//  declare a variable 
//  give your variable a value of an array
//     let bFastFoods = ['eggs', 'bacon', 'potato', 'milk', 'tea']
// create a function 
    // with a name 
    // it takes in one parameter 
//   function lastLetter(param){
        //  iterate over our parameter
           // starting from the back
           // until the front
          // look at every other element
//        for(let i = param.length - 1; i >= 0; i -=2){
            //grab specific element
//            let currentEle = param[i];
          // grab the last letter of the element 
            // next two lines do the same thing
        //  let letter = currentEle.slice(currentEle.length - 1, currentEle.length);
//          let letter = currentEle.slice(-1);
            // log the last letter of the element
//              console.log(letter);


//        }
//    }
//    lastLetter(bFastFoods);
    // LONGHAND:
    // i = i + 1
    // SHORTHAND:
    // i++ // increase i by 1
    // i-- // decrease i by 1
    // i+=1 // increase i by 1
    // i-=1 // decrease i by 1
    // i+=2 // increase i by 2 etc...
    // i-=2 // decrease i by 2 etc...


    // starting from the back
    // until the front
    // look at every other element
        // log the last letter of the element


        // Basic accumilator pattern example:
        // function which iterates over an array and fills a new array with the middle letter of each element

        //define a variable
        // set it equal to an array of strings
         let cartoons = ['Tom-&-Jerry', 'X-Men', 'Gundam-Wing', 'Hey-Arnold', 'Boondoks', 'Happy-Tree-Friends'];

         // define a function
         // give it a parameter 
        function midEleLet(paramArr){
            // declare a new variable
            // set it equal to an empty array
             let allMidLet = [];

            // declare a form loop where:
               // the index starts at 0
               // we end when ther index reaches the param.length
               // it increases by 1
             for(let i = 0; i < paramArr.length; i++){
               
                let currentEle = paramArr[i];// setting a variable equal to our current element based on the current index
                let middleLetterIndex = currentEle.length/2;// declare a variable and dynamically set it equal to the middle letter
                let middleLetter = currentEle.slice(middleLetterIndex, middleLetterIndex+1);

                 allMidLet.push(middleLetter);
             }
             return allMidLet;
         }
         console.log(midEleLet(cartoons));

         // Create a function which takes in an array which only contains strings. 
// The function will iterate over a given array and return the last character of every element. 
    //   let seasons = ['Winter', 'Autumn', 'Spring', 'Summer'];

    //   function lastLetters(arrParam){
    //     let newArr = [];
    //       for(let i = 0; i < arrParam.length; i++){
    //          let currentEle = arrParam[i];// looking at each element by itself 
    //           newArr.push(currentEle.slice(-1)); 
           
    //       }
    //       console.log(newArr);

    //   }
    //   lastLetters(seasons);
    // output: ['r', 'n', 'g', 'r'];

// Create a function which takes in an array which only contains strings. 
// The function will iterate over a given array and return the last character of every element. One element will be an empty string.
// let seasons = ['Winter', 'Autumn', 'Spring', 'Summer', ''];

// function lastLetters(arrParam){
//   let newArr = [];
//     for(let i = 0; i < arrParam.length; i++){
//        let currentEle = arrParam[i];// looking at each element by itself 
//         newArr.push(currentEle.slice(-1)); 
     
//     }
//     console.log(newArr);

// }
// lastLetters(seasons);


 //create a function which logs the first letter of each element in an array
   let sports = ['Football', 'Baseball', 'Basketball', 'Golf', 'Curling', 'Soccer', 'Hockey'];

   function firstLetter(arrParam){
       let newArr = [];
       for(let i = 0; i < arrParam.length; i++){
           let currentSport = arrParam[i];
           newArr.push(currentSport.slice(0,1));
         

       }
       console.log(newArr);
   }
   firstLetter(sports);
         