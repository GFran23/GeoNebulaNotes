//  Basic Accumilator Pattern 
 
//  declare a function, that takes in a number, giving it a name, and value
//     function loopcounter(n){
// //declare a variable so we can hold the total value
//      var totalValue = 0;
//     //  declare a for loop
//     for(var i = 0; i < n; i++){
//         // add one to the total value;
//         totalValue = totalValue + 1;

//     }  
//     // return the total value
//     return totalValue;

//     }
//     console.log(loopCounter(1000));


    // Example 2;
    //  Create a function that takes in a array and counts every item in the array

        var fruits = ['apple', 'banana', 'orange', 'pineapple', 'kiwi'];
        var newFruits = ['lime', 'peach']
        //  declare a function that takes in a any array
       function arrayFruits(foods){
        // declare a variable called totalFruits
        var totalFruits = 0;
        // declare a for loop -> starting at the index of 0 index go the length of the entire array and increase by 1
       for(var i = 0; i < foods.length; i++){
        //    add one to the total count
            totalFruits = totalFruits + 1;

      }
    //   return totalFruits
        return totalFruits;

       }
    //    Invoke fruit counter 'FUNCTION' arrayFruits with our fruits array 'VARRIABLE NAME' fruits, and log it to the console
       console.log(arrayFruits(fruits)); 
    //    Invoke New varriable   
       console.log(arrayFruits(newFruits));


       