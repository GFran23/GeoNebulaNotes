// level 0
    // Q 0.1
        // If a variable has a length greater than 3 return "lenght greater than 3"
        //  function GreaterThan(param) {

        //      if (param.length > 3) {
        //          return "Length Greater Than 3";

        //      } else {
        //          return "Less than 3";
        //      }
        //  }
        //  console.log(GreaterThan("Hello World"));

// level 1
    // Q 1.1
        // Comparing two arrays, return the longest of the two.
        //  let word1 = ['Hello', 'World', 'Hi', 'Bye', 'Why'];
        //  let word2 = ['Hello', 'World', 'Hi', 'Bye', 'Why', 'Tie'];

        //  function compare(arr1, arr2) {

        //      if (arr1.length > arr2.length) {
        //          return arr1;

        //      } else {
        //          return arr2;
        //      }
        //  } 
        //  console.log(compare(word1, word2));

// // level 2
//     // Q2.1
//         // In an array of strings, check for the letter j
//             // return an array of strings that all contain the letter j
            //  let names = ['Jason', 'Mike', 'John', 'Will', 'Nat', 'Jojo', 'Jorge'];

            //  function jStrings(arr) {
            //      let namesWithJ = [];

            //      for (let i = 0; i < arr.length; i++) {
            //          if (arr[i].indexOf('J') > -1) {
            //            namesWithJ.push(arr[i]);
                             
            //         }
            //     }

            //     return namesWithJ;
            // }     
            // console.log(jStrings(names));
    // Or:
//     let names = ['Jason', 'Mike', 'John', 'Will', 'Nat', 'Jojo', 'Jorge'];

//     function jStrings(arr) {
//         let namesWithJ = [];

//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].indexOf('J') > -1 || arr[i].indexOf('j') > -1 ) {
//               namesWithJ.push(arr[i]);
                    
//            }
//        }

//        return namesWithJ;
//    }     
//    console.log(jStrings(names));
   // OR:
//    let names = ['Jason', 'Mike', 'John', 'Will', 'Nat', 'Jojo', 'Jorge'];

//     function jStrings(arr) {
//         let namesWithJ = [];

//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].toUpperCase().indexOf('J') > -1) {
//               namesWithJ.push(arr[i]);
                    
//            }
//        }

//        return namesWithJ;
//    }     
//    console.log(jStrings(names));


// level 3:
    // Q3.1
        // Check an array of strings for the longest string 
        let pets = ['dog', 'cat', 'tiger', 'mountain lion', 'bear', 'lion', 'monkey'];

    function longest(arr) {
        let longEle  = '';

        for (let i = 0; i < arr.length; i++) {
           let element = arr[i];

           if (element.length > longEle.length) {

            longEle = element;
           }
           
                    
           }
           return longEle;
       }
       console.log(longest(pets));

     
        
  
    
