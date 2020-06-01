// level 0
    // Q0.1
        // Create a function which takes in a number. 
         let number = 10;
         let number2 = 0;
         function numArray(param){
        // // If the number is greater than 0 return 'Bigger than zero'. 
             if( param > 0){
                 return 'Bigger than zero';
              } else {
                  return 'smaller than or equal to zero';
              }
                
             } 
             console.log(numArray(number));
             console.log(numArray(number2));
        // Else return, 'smaller than or equal to zero'.

// level 1
    // Q 1.1    
        // Create a function which takes any data. 
        // The function returns 'true' if the given parameter is a truthy.
        // If it is falsy, return 'false'. 
        // (This function can be invoked with almost anything. Start by trying strings and empty strings. Don't invoke with something undeclared.)
            // Input: '',           output: 'false'
            // Input: 'a',          output: 'true'
            // Input: undefined,    output: 'false'

             let str1 = '';
             let str2 = 'a';
             let str3 = undefined;

             function truthyFalsy(param){
                 if (param){
                     return true;
    
                 } else {
                     return false;
                 }
             }
             console.log(truthyFalsy(str1));
             console.log(truthyFalsy(str2));
             console.log(truthyFalsy(str3));


// level 2
    // Q 2.1
        // Create a function which returns 'big' if the given number is greater than or equal to 10.
        // If it is smaller, return 'small'. 
         let str4 = 11;
         let str5 = 4;

         function bigNum(param){
             if (param >= 10){
                 return 'big';

             } else {
                 return 'Small';
                
             }

         }
         console.log(bigNum(str4));
         console.log(bigNum(str5));

    // Q 2.1
        // Create a function which returns 'No such value' if an object doesn't have a value.
        // If it does, return that value. 
            let dirtBike1 = {
              brand: 'Yamaha',
              stroke: 2,
              brakes: ['foot', 'hand'],
              gas: 'unleaded',
              
            }
            let dirtBike2 = {
                brand: 'Honda',
                stroke: 2,
                brakes: ['foot', 'hand'],
                gas: 'unleaded',
                cylinder: 'single',
            }
            let dirtBike3 = {
                brand: 'Kawasaki',
                stroke: 2,
                brakes: ['foot', 'hand'],
                gas: 'unleaded',
            }
            function checkCylinder(param){
                if (param.cylinder === undefined){
                    return 'No such value';
                
                } else {
                   return param.cylinder; 
                }
            }
            console.log(checkCylinder(dirtBike1));
            console.log(checkCylinder(dirtBike2));
            console.log(checkCylinder(dirtBike3));
                
            
    // level 3
    // Q 3.1
        // Create a function which takes in two numbers and compares them. 
        // If the first number is bigger return the first number.
        // If the second number is bigger return the second number.
        function numCompare(num1,num2){
            if (num1 > num2){
                return num1;
                
            }else if (num1 < num2) {
                return num2;
            } else {
                return 'the numbers are equal';
            }
        }
        console.log(numCompare(12,93));