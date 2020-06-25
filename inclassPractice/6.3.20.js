// loops or conditionals (level 0-2: focus on picking ONE or the other)

// level 0
// loop warmup
    // create a function which iterates over an array of strings 
    // the function returns a new array of captalized strings
    let newArr = ["new", "array", "strings"]
 
 function capitalize(arr){
 let capitalized = []; 
 for(let i = 0; i < arr.length; i++){
 capitalized.push(arr[i].toUpperCase()); 
 }
 return capitalized; 
 }
 
 console.log(capitalize(["hello", "world"])); 
 console.log(capitalize(["a","b","c","d"])); 
 console.log(capitalize(newArr));

// conditional warmup
    // create a function which takes in a number 
    // the function returns 'even' if the number is even and 'odd' if its odd

    function oddOrEven(num){
        if(num % 2 === 0){
        return 'even'; 
        }else{
        return 'odd'; 
        }
        }
        console.log(oddOrEven(12)); 
        console.log(oddOrEven(1)); 
        console.log(oddOrEven(3));
// level 1
    // Q1:
        // create a function which takes in a string 
        // the function returns even if the string has an even amount of elements
        // otherwise it returns odd
        // let str1 = "Its a Beautiful day in the neighborhood";

        // function evenOddStr(param) {
        //    if (param.length % 2 === 0) {
        //             return "even";

        //         } else (param.length % 2 !== 1) 
        //             return "odd";
                

        // }
        // console.log(evenOddStr(str1));
    // Q2: 
        // create a function which takes in an array
        // the function returns a new array with every other element in the array
        // let foods = ["pizza", "hamburger", "hot dog", "taco", "soup"];

        // function everyOtherEle(arr) {
        //     let newArr= [];

        //     for(let i = 0; i < arr.length; i++) {
        //         newArr.slice(0,1);

                
                
        //     }
        //     return newArr;
            
        // }
        // console.log(everyOtherEle(foods));

    // Q3:
        // create a function which takes in an array 
        // the function returns the first element with the character 'i'
        let names = ["hey", "now", "sink", "wow", "pink"];

        function firstEle(arr) {
            let iElement = [];

            for(let i = 0; i < arr.length; i++) {
                let element = arr[i];

                if(element.indexOf("i") > -1) {
                    iElement.push(element);
                }

            }
            return iElement[0];
        }
        console.log(firstEle(names));

// level 2:
    // Q1:
        // create a function which takes in two numbers
        // it returns 'That was divisible!' if the first number is divisble by the second
        // function twoNums(num1, num2) {

        //     if(num1 / num2){
        //         return 'That was divisible'
        //     }
        // }
        // console.log(twoNums(34,79));


    // Q2:
        // create a function which takes in an array and a string
        // it returns the index if the string exists within the array
        // it returns 'not here' if the array doesn't contain the string
        let arrOfStr = ['Blue', 'Yellow', 'Pink'];
 
        function doesExist(arrParam, strParam){
            if( arrParam.indexOf(strParam) > -1 ){
                return arrParam.indexOf(strParam);
        } else {
            return 'not here';
        }
 }
 
 console.log(doesExist(arrOfStr, 'Pink')); // 2
 console.log(doesExist(arrOfStr, 'Blue')); // 0
 console.log(doesExist(arrOfStr, 'White'));// 'not here'

// level 3:
    // Q1:
        // create a function which searches a string for any elements within an array
        // the function returns an array of elements that do exist
        // for example:
            // input ['abc', 'def', 'llo', ' ', 'o'] & "Hello World" returns ['llo', ' ', 'o']

    // Q2: 
        // create a function which takes in two arrays
        // the function will return a new array of any common elements