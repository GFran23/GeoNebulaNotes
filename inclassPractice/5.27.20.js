// Conditionals

// level 0
    // Q0.1
        // Create a function which takes in a string. 
        // If the string length is greater than 0 return 'The string exists'. 
        // Else return, 'The string doesn't have characters'.
        // function strLength(param){
        //     if (param.length > 0){
        //         return 'The string exists';

        //     } else {
        //         return "The string doesn't have characters"; 
        //     }
        // }
        // console.log(strLength('Hello World'));
        // console.log(strLength(''));

// level 1
    // Q 1.1  
        // Create a function which takes in two numbers 
        // If number one is larger than number two return 'Number one is greater than number two.'
        // If number two is larger than number one return 'Number two is greater than number one.'
        // function twoNumbers(num1,num2){
        //     if (num1 > num2){
        //         return 'Number one is greater than number two';

        //     } else {
        //         return 'Number two is greater than number one';
        //     }
        // }
        // console.log(twoNumbers(50, 49));
        // console.log(twoNumbers(-1, 9));
        // console.log(twoNumbers(398, -398))
        

// level 2
    // Q 2.1
        // Create a function which takes the following array: [99, 'Long Island', 'Hello World']; 
        // If the array contains the string 'Hello World' the function returns 'Hello World!'.
        // If 'Hello World doesn't exist return 'Goodnight World'.  
            // Once you think you have the solution also try and invoke the function with a different array: ['red', 'green', 'periwinkle']; 
        // let arr = [99, 'Long Island', 'Hello World'];
        // let arr2 = ['red', 'green', 'periwinkle']; 

        // function hello(param){
        //     if (param.indexOf('Hello World') > -1 ){
        //         return 'Hello World';
        //     } else {
        //         return 'Goodnight World';
        //     }
        // }
        // console.log(hello(arr));
        // console.log(hello(arr2));

    // Q 2.2
        // Create a function which takes in a car object.
        // If the object contains a key of carName with a value of 'Ferrari'
        // and the object contains a key of color with a value of 'Red'.
        // return 'Whoa, a classic Ferrari!'.
        // else return 'Meh, it's just a car'.
        //  let car = {
        //      carName: 'Ferrari',
        //      cost: 300000,
        //      color: 'Red',
        //      transmission: 'automatic',
        //      countryOfOrigin: 'Italy', 
        //  }
        //  function carObj(param){
        //      if (param.carName === 'Ferrari' && param.color === 'Red'){
        //          return 'Whoa, a classic Ferrari';
        //      }else {
        //          return "Meh, it's just a car";
        //      }
        //  }
        //  console.log(carObj(car));
// level 3
    // Q 3.1
        // Create a function which takes in a car object.
        // If the object contains a key of carName with a value of 'Lamborghini'
        // and the object contains a key of color with a value of 'yellow'.
        // return 'Whoa, a classic Lamborghini!'.
        // If the carName is 'Lamborghini' and the color isn't 'yellow' then return, 'That's an interesting Lamborghini.'
        // else return 'Meh, it's just a car'.

        let car2 ={
            carName: 'Lamborghini',
            cost: 400000,
            color: 'Blue',
            transmission: 'automatic',
            countryOfOrigin: 'Italy', 
        }
        function lamborghiniObj(param){
            if (param.carName === 'Lamborghini' && param.color === 'Yellow'){
                return 'Whoa, a classic Lamborghini!';
                
            } else if (param.carName === 'Lamborghini' && param.color !== 'Yellow'){
                return "That's an interesting Lamborghini";
            } else {
                return "Meh, it's just a car";
            }
        }
        console.log(lamborghiniObj(car2));