// create a function that adds two numbers together

    // Solution 1:
        // console.logging inside the function
        // function addNumbers(x, y){
        //     console.log(x + y);
        // }

        // addNumbers(3, 4);
    
    // Solution 2:

        // function addNumbers(x, y){
        //     return (x + y);
        // }

        // console.log(addNumbers(3,4));

// create a function which takes in 3 numbers and returns the product of all three
    // Solution 1:
        // function products(num1, num2, num3){
        //     var solution = num1 * num2 * num3;
        //     return solution;
        // }

        // console.log(products(2, 3, 4))

// create a function that takes in an array of names and says hello to each
    // Solution 1:
        // var people1 = ['Nat', 'Geo', 'Solomon', 'Patrick' ];
        // var people2 = ['Debbie', 'Mitsie', 'Kaya', 'Desmond' ];
        // var people3 = ['Ronald', 'Spencer' ]

        // function sayHello(arr){
            
        //     for(var i = 0; i < arr.length; i++){
        //         var person = arr[i];
        //         console.log("Hello " + person + "!");
        //     }
            
        // }

        // sayHello(people1);
        // sayHello(people2);
        // sayHello(people3);

    // CodeWars 5.11.20
        // Even or Odd       
        // solution 1

            // function even_or_odd(number) {
            //     if( number % 2 === 0 || number % 2 === -0 ){
            //         return 'Even';
            //     } else if( number % 2 === 1 || number % 2 === -1 ){
            //         return 'Odd';
            //     }
            //     return number;
            // }

        // solution 2
        //     function even_or_odd(number) {
        //         if( number % 2 == 0 ){
        //             return 'Even';
        //         } else {
        //             return 'Odd';
        //         }
        //     }


        // console.log(even_or_odd(-3));
        // console.log(even_or_odd(4));
        // console.log(even_or_odd(5));
        // console.log(even_or_odd(6));
        // console.log(even_or_odd(7));
//remove first and last char

//   function removeChar(str){
//     var strLength = str.length;
//     return str.slice(1,strLength-1);
// };
           
// console.log(removeChar('eloquent'));
// console.log(removeChar('country'));
// console.log(removeChar('person'));
// console.log(removeChar('place'));


// function opposite(n){
//     if (n > 0 ){
//     return -n
//     } else{
//     return n
//     }
    
//   };

//   console.log(opposite(1));


//  function boolToWord( bool ){
//      if ( bool === true) {
//        return 'Yes'
//      } else {
//         return 'No'
//      }
//    }
//    console.log(boolToWord(true));
//    console.log(boolToWord(false));


