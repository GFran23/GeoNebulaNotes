// Use bracket or dot notation to answer the questions below.  
// Some questions will involve writing functions

let stringArr = ["first", "second", "middle", "last"]; 

//1) console.log the first element of the 'stringArr' array
console.log(stringArr[0]);
//2) console.log the last element of the 'stringArr' array
console.log(stringArr.length - 1);
//3) add a new element to the end of the 'stringArr' array called "new last"
console.log(stringArr.push('new last'));
//4) console.log the last element of the 'stringArr' array. 
// note: your solution should work for both questions 2 & 4. 
console.log(stringArr.length - 1);
//5) console.log the middle element of the 'stringArr' array
// note: extra points if you use a dynamic solution (hint: Math.floor) 
// your console should read "middle" 
 console.log(stringArr[Math.floor(stringArr.length / 2)]); 
//6) add a new element to the beginning of the 'stringArr' array called "new first"
console.log(stringArr.unshift('new first'));
//7) console.log the 2nd index of the 'stringArr' array 
console.log(stringArr[2]);
//8) console.log the 0 index of the 'stringArr' array
console.log(stringArr[0]);
//9) console.log the length of the 'stringArr' array
console.log(stringArr.length);
//10) console.log the length of every string within the 'stringArr' array.  
//note: use only one console.log to achieve this... you will need to write a function. 
let lengthOfEvStr = stringArr.map(val => val.length);  

console.log(lengthOfEvStr);
  
// 🇯🇲    🇯🇲    🇯🇲    🇯🇲    🇯🇲    🇯🇲     🇯🇲     🇯🇲     🇯🇲     🇯🇲    🇯🇲     🇯🇲     🇯🇲     //
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let newNumArr = [];

//11) within a console.log, add the first and last index values of 'numArr' array
//ex. console.log(firstIndex + lastIndex); 
console.log(numArr[0] + numArr[9]);
console.log(numArr[0] + numArr[numArr.length - 1]);
//12) remove the last index value of the 'numArr' array 
console.log(numArr.pop());
//13) add the number 0 to the beginning of the 'numArr' array
//result: numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numArr.unshift(0));
//14) remove the last index value from the 'numArr' array
//result: numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(numArr.pop());
//15) console.log the middle index dynamically.  
//hint(Math.floor) 
 console.log(numArr[Math.floor(numArr.length/2)]);

// 💥    💥     💥      💥      💥      💥      💥      💥      💥      💥    💥    // 
let arrOfArr = [['this', 'is', 'an', 'array'], [1, 2, 3, 4, 5], ['another', 'array', 'of', 'strings'],[6, 7, 8, 9, 0] ];

//16) console.log the numbers 1 & 6 from the 'arrOfArr' array. 
//note: do NOT console.log(1, 6) <- this is not the answer. 
console.log(arrOfArr[1][0], arrOfArr[3][0]);
//17) console.log both 'array' strings from the 'arrOfArr' array
console.log(arrOfArr[0][3], arrOfArr[2][1]);
//18) console.log the two arrays that contain only numbers
//note: your console should contain 2 arrays 
console.log(arrOfArr[1], arrOfArr[3]);
//19) console.log the two arrays that contain only strings
//note: your console should contain 2 arrays 
console.log(arrOfArr[0], arrOfArr[2]);
//20) console.log the word "strings" from the 'arrOfArr' array
console.log(arrOfArr[2][3]);
//21) console.log the number 0 from the 'arrOfArr' array
console.log(arrOfArr[3][4]);
//22) console.log the word "is" from the 'arrOfArr' array
console.log(arrOfArr[0][1]);
//23) console.log the number 3 from the 'arrOfArr' array
console.log(arrOfArr[1][2]);
//24) console.log only the strings that begin with consonants from the 'arrOfArr' array
console.log(arrOfArr[0][0], arrOfArr[2][3]);
//25) console.log the number 8 from the 'arrOfArr' array
console.log(arrOfArr[3][2]);
//26) console.log the word 'of' from the 'arrOfArr' array
console.log(arrOfArr[2][2]);
//27) console.log the 1st occurence of the word 'array' from the 'arrOfArr' array
console.log(arrOfArr[0][3]);
//28) console.log the 2nd occurence of the word 'array' from the 'arrOfArr' array
console.log(arrOfArr[2][1]);
//29) write a function that returns the first elements of EACH array from the 'arrOfArr' array
//result: (['this', 1, 'another', 6])
let firstEle = arrOfArr.map(str => str[0]);
console.log(firstEle);
//30) write a function that returns the last elements of EACH array from the 'arrOfArr' array 
//result: (['array', 5, 'strings', 0])
let lastEle = arrOfArr.map(str => str[str.length - 1]);
console.log(lastEle);





