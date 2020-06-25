// We have previously utilized the "for loop", object utilize the "for in loop"
    // Arrays & strings syntax:
        // for(let i = 0; i < thing.length; i++){}
    // Object syntax:
        //  for(let item in object){}
        //  Example:
        //  let beach = {
        //      item: "wrong syntax",
        //      location: 'NE US',
        //      sand: true,
        //      name: "Jones Beach",
        //      area: '100,000 sqft',
        //  }
        
        //  for(let item in beach){
        //      console.log(beach[item]);
        //  }

// Practice 1:
    // Task 1: Creating an object
        // Create an object called car
            // Give it 5 key value pairs including; color, numberOfWheels, and brand.

        // Task 2: Changing Stuff
        // Using dot notation 
            // 2a: Change the color

    // Task 3: Adding Stuff
        // Add numberOfSeats
        // Add licensePlate

            // let car ={
            //     brand: "Lamborghini",
            //     color: "White Smoke",
            //     numberOfWheels: 4,
            //     seats: "Leather",
            //     body: "Carbon Fiber",

            // }
            // car.color = "Silver Pearl";
            // car.seats = 3;
            // car.licensePlate = "GeosLam"
            // console.log(car);

    
//Practice 2

    // Task 1:
        // Create 3 car objects with 3 properties; color, numberOfWheels, and brand. 
    // Task 2:
        // Iterate through the cars and do the following tasks
            // Change the color
            // Add numberOfSeats
            // Add licensePlate
        // (Difficult) Make each one unique

        // let car0 = {
        //     color: "White",
        //     brand: "BMW",
        //     numberOfWheels: 4,
        // }
        // let car1 = {
        //     color: "Black",
        //     brand: "Honda",
        //     numberOfWheels: 4,
        // }
        // let car2 = {
        //     color: "Blue",
        //     brand: "Cadillac",
        //     numberOfWheels: 4,
        // }
        // let cars = [car0, car1, car2];
        // for (let i = 0; i < cars.length; i++) {
        //     cars[i];
        // }
        // car0.color = "Red", car1.color = "Yellow", car2.color = "Pearl";
        // car0.seats = 4, car1.seats = 4, car2.seats = 4;
        // car0.licensePlate = "BackOff", car1.licensePlate = "LookUpp", car2.licensePlate = "SmknDrk"
        // console.log(cars);
        
        

//______________________________________________________________________________________________________________

// Object Loop practice
// level 0:
    // create an object (minimum 3 key-value pairs) & create a function which iterates over the object and logs all values to the console.
    //  let phone = {
    //      brand: "apple",
    //      model: "iphone",
    //      touchScreen: true,
    //  }
    //     function cell() {
    //        for (let item in phone) {
    //             console.log(phone[item]);
    //        }
           
    //     }
    //     cell(phone);
    


// level 1: 
    // create an object (minimum 3 key-value pairs) & create a function which iterates over the object and logs all the key & the value pairs to the console.

    //  let phone1 = {
    //      brand: "Samsung",
    //      model: "Galaxy",
    //      touchScreen: true,
    //  }
    //  function obj(param){
    //      for (let item in param){
    //          console.log(param[item]);
    //      }
    //  }
    //  obj(phone1);
          
     
            
     
     
     
    
    
// level 2: 
    // create an object & create a function which logs all string key-value pairs to the console 
    // let phone2 = {
    //     brand: "Samsung",
    //     model: "Galaxy",
    //     touchScreen: true,
    //     apps: ["maps", "Weather", "Instagram", "Facebook", "Calender"]
    // }
    // function string(param) {
    //     for (let item in param){
    //         if(typeof param[item] === 'string'){
    //           console.log(param[item]);
    //         }
          
    //     }
    // }
    // string(phone2);
    // create an object & create a function which logs all boolean key-value pairs to the console 
    // let phone4 = {
    //     brand: "Samsung",
    //     model: "Galaxy",
    //     touchScreen: true,
    //     apps: ["maps", "Weather", "Instagram", "Facebook", "Calender"]
    // }
    // function arr(param) {
    //     for (let item in phone4){
    //         if(param[item] === true || param[item] === false){
    //             console.log(item, param[item]);
    //         }
           
    //     }
    // }
    // arr(phone4)

    // create an object & create a function which logs all array key-value pairs to the console 
    // let phone3 = {
    //     brand: "Samsung",
    //     model: "Galaxy",
    //     touchScreen: true,
    //     apps: ["maps", "Weather", "Instagram", "Facebook", "Calender"]
    // }
    // function arr(param) {
    //     for (let item in phone3 ){
    //         if(Array.isArray(param[item])){
    //             console.log(item, param[item]);
    //         }
           
    //     }
    // }
    // arr(phone3)
      

//  level 3: 
    // given the following object create a function which logs the username & password length.
    //   let account = {
    //       username: "Snowman",
    //       password: "caRR0t"
    //   }
    //   function namePass(param){
        
    //     for (let item in account){
            
    //         console.log(item, param[item].length);
    //     }
    // }
    // namePass(account);      
          
      
      

// given the following object create a function which logs the house address & passcode as stars.
    // input: ring. Output: "Address: 1600 Pennsylvania Ave NW, Washington, DC 20500. Passcode: ****.""
    //  let ring = {
    //      homeAddress: "1600 Pennsylvania Ave NW, Washington, DC 20500",
    //      passCode: "2020"
    //  }
    //  function addressPass(param) {
    //      let address = param['homeAddress']
    //      let stars = '';

    //      for (let i = 0; i < param['passCode'].length; i++){
    //          stars += '*'
    //      }
    //      return address + '. passCode: ' + stars;
    //  }
    //  console.log(addressPass(ring));
// level 4: 
// create an object & create a function which increases the factor of any number by 10 (even if it is a string, or is concatinated with strings)





// Eloquent JavaScript Chap: 4. Data Structures: Objects and Arrays.. Ex: 4.1 The sum of a range //

function range (start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}
    function sum(array) {
        let total = 0;
        for (let value of array) {
            total += value;
        }
        return total; 
    }
    console.log(range(1, 10));
    // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(5, 2, -1));
    // → [5, 4, 3, 2]
    console.log(sum(range(1, 10)));
    // → 55

    
    // Reversing an Array using two functions //

    function reverseArray(array) {
        let output = [];
        for (let i = array.length - 1; i >= 0; i--) {
            output.push(array[i]);
        }
        return output;
    }

    function reverseArrayInPlace(array) {
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
            let old = array[i];
            array[i] = array[array.length -1 - i];
            array[array.length - 1 - i] = old;
        }
        return array;
    }
    console.log(reverseArray(["A", "B", "C"]));
    // → ["C", "B", "A"];
    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
    // → [5, 4, 3, 2, 1]

//  A list using Conditional Statements and For Loop //
    function arrayToList(array) {
        let list = null;
        for (let i = array.length - 1; i >= 0; i--) {
          list = {value: array[i], rest: list};
        }
        return list;
      }
      
      function listToArray(list) {
        let array = [];
        for (let node = list; node; node = node.rest) {
          array.push(node.value);
        }
        return array;
      }
      
      function prepend(value, list) {
        return {value, rest: list};
      }
      
      function nth(list, n) {
        if (!list) return undefined;
        else if (n == 0) return list.value;
        else return nth(list.rest, n - 1);
      }
      
      console.log(arrayToList([10, 20]));
      // → {value: 10, rest: {value: 20, rest: null}}
      console.log(listToArray(arrayToList([10, 20, 30])));
      // → [10, 20, 30]
      console.log(prepend(10, prepend(20, null)));
      // → {value: 10, rest: {value: 20, rest: null}}
      console.log(nth(arrayToList([10, 20, 30]), 1));
      // → 20

//  Deep Comparison using Conditionals and For in Loop  //
      function deepEqual(a, b) {
        if (a === b) return true;
        
        if (a == null || typeof a != "object" ||
            b == null || typeof b != "object") return false;
      
        let keysA = Object.keys(a), keysB = Object.keys(b);
      
        if (keysA.length != keysB.length) return false;
      
        for (let key of keysA) {
          if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
        }
      
        return true;
      }
      
      let obj = {here: {is: "an"}, object: 2};
      console.log(deepEqual(obj, obj));
      // → true
      console.log(deepEqual(obj, {here: 1, object: 2}));
      // → false
      console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
      // → true
        