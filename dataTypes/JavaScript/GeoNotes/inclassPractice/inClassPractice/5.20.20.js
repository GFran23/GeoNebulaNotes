// level 0
    // Q0.1 create a function that always greets us ( Hello World Function )
        // example:
            // no input
            output: "Hello!"

            function greeting(){
                 
                return 'Hello!';
                
            }
            console.log(greeting());

// // level 1:
//     // Q1.1 
//         // Create a function that takes in a string and returns the second character
             let message = "Hey i'm on my way home";

             function secondChar(str){

                 let secondLetter = str.slice(1, 2);
                 return secondLetter; 
                  
             }
             console.log(secondChar(message));   


//     // Q1.2
//         // Create a function that takes in an array and returns the second element
             let budTypes = ['haze', 'sour', 'gelato', 'lava cake', 'northern lights'];

             function budArr(arr){

                 let secondElement = arr.slice(2,3);
                 return secondElement;
                 //return arr[2];
             }
             console.log(budArr(budTypes));
    
    // Q1.3
        // Create a function that takes in an array of birds and adds three birds
            // the birds get added one to the front, one to the back, and one at the second index

        //    let initialBirds = ['Bald Eagle', 'Robin', 'Blue Jay'];
            // let bird1 = 'Quaker';
            // let bird2 = 'Cockatoo';
            // let bird3 = 'Kingfisher';

        //    function addBirds(arrBirds){

        //        arrBirds.unshift('Quaker');
        //        arrBirds.push('Cockatoo');
        //        arrBirdds.splice(2,2,'Kingfisher');
        //        return addBirds;
        //    }
        //    console.log(addBirds(arrBirds));

    // Q1.4
        // Create a function that takes in a string and gives us the first three letters

        //let note = 'What do you wanna do today?';
        //function firstThree(str){

        //   let threeLetters = str.slice(0,3);
        //   return threeLetters;
       //}
       //console.log(firstThree(note));

    // Q1.5
        // Create a function that takes in an array and combines the elements into a string
        //    let arr1 = ['Hey', 'how', 'are', 'you', 'doing?'];
        //    function arrToStr(arr){

        //        let newStr = arr1.join(' ');
        //        return newStr;
        //    }
        //    console.log(arrToStr(arr1));

// level 2:
    // Q2.1
        // Create a function that takes in a string and returns the last character
    //    let message1 = "Hey i'm on my way home";

    //    function lastChar(str){

    //        let lastLetter = str.slice(21, 22);
    //        return lastLetter; 
             
    //    }
    //    console.log(lastChar(message1));   

    // Q2.2
        // Create a function that takes in an array and returns the last element
    //       let musicTypes = ['rap', 'pop', 'gospel', 'country', 'rock', 'jazz']
    //       function musicArr(arr){

    //         let lastElement = arr.slice(5,6);
    //          return lastElement;
    //       }
    //       console.log(musicArr(musicTypes));

// level 3:
    // Q3.1
        // Create a function that takes in a string and returns the central character
    //    let feeling = "I'm so tired and have a headache";
    //    function centralChar(str){

    //       let centerChar = str.slice(12,16);
    //       return centerChar;
    //   }
    //   console.log(centralChar(feeling));

    // Q3.1
        // Create a function that takes in an array and returns the central element
    //       let cars = ['BMW', 'Mercedes', 'Nissan', 'Honda', 'Jaguar'];
    //       function carsArr(arr){

    //          let centerElement = arr.slice(2,3);
    //          return centerElement;
    //       }
     //      console.log(carsArr(cars));

// level 4:
    // Create a function that searches for all numbers inside strings in a given array and removes them 
        // input = ['B12', 'RTX3000', 'Hello World', 'H3110 W041D']
        // output = ['B', 'RTX', 'Hello World', 'HWD']

    //   let inputArr = ['B12', 'RTX3000', 'Hello World', 'H3110 W041D']
    //   function allNumbers(arr){

    //   }





        