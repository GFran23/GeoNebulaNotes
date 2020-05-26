// Describe 
    // what the following methods do 
    // what data type they can act on 
    // what their syntax looks like 

    // push()
        // Adds a new element to the end of an array
        // Data type it works on: array
        // Syntax: [1, 2, 3].push(4) // --> [1, 2, 3, 4]
          // Push Ex:
                 var arr = [1, 2, 3];
                 arr.push(4);
                 console.log(arr); 

    // indexOf() 
        // Gives you the specific location of a character.
        // Data type it works on: strings and arrays
            // Syntax: ('Hello-World').indexOf('o'); // -> 4 // ['Hello', 'World'](arr.indexOf('World)); // -> 1
            // String Ex:
                 str = 'Hello-World'.indexOf('o');
                 console.log(str);
            // Array Ex:
                 var arr = ['Hello', 'World']
                 console.log(arr.indexOf('World'));

            // slice()
              // gives us specific characters inbetween two indicies. Inclusive at the start and exlusive at the end. 
              // Data types it works on: strings and arrays
              // Syntax: ('Hello-World').slice(0,2); // --> 'He'
            // String Ex:
                  str = ('Hello-World').slice(0,2); 
                  console.log(str);   
            // Array Ex: 
                  var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
                  var citrus = fruits.slice(1, 3);
                  console.log(citrus);     

    // length
        // Gives us how many characters are in the string
        // Gives us how many elements are in the array
        // Data type it works on: strings and arrays
        // Syntax: 'Hello World'.length; //-> 11 // ['Hello World'].length //-> 1
        // String Ex:  
               str = 'Hello World';
               console.log(str.length);

               str = 'Hello World'.length;
               console.log(str);
        // Array Ex;
               var arr = ['Hello', 'World'];
              console.log(arr.length);

               var arr = ['Hello', 'World'].length;
               console.log(arr);

    // replace()
        // Replaces the first occurrence of a character with another character.
        // Data type works on: string
        // Syntax: ('Hello-World').replace('-', ' ') // --> 'Hello World'
                // ('Hello-World').replace('l', ' ') // --> 'He lo-World' 
        //  Ex:
            str1 = ('Hello-World').replace('-', ' ') 
            str2 = ('Hello-World').replace('l', ' ') 
            console.log(str1);
            console.log(str2);
    
    // unshift()
        // Adds an element to the beginning of an array.
        // Data type works on: array
        // Syntax: 'below'
                 var arr1 = ['Hello', 'World']
                 arr1.unshift('Great')
                 console.log(arr1); // --> ['Great', 'Hello', 'World']

    // shift()
        // Removes the first element from an array.
        // Data Types works on: array
        // Syntax: 'below'
                 var arr2 = ['Hello', 'World']
                 arr2.shift()
                 console.log(arr2) // --> ['World']

    // pop()
        // Deletes the last element from an array.
        // Data types works on: array
        // Syntax: 'below'
                 var arr3 = ['Hello', 'World']
                 arr3.pop()
                 console.log(arr3) // --> ['Hello']

    // join()
        // Converts an array into a string by concatenating all elements together on a given character.
        // Data types works on: array
        // Syntax: 'below'
                 var arr4 = ['Hello', 'World'];
                 var stringFromArr4 =  
                 console.log(stringFromArr4);

    // splice()
        // Adds and removes elements.
        // Data Types works on: array
        // Syntax: 'below'
                var arr = ["Hello", "World"];
                arr.splice(0,0,'Greetings', 'Hi');
                console.log(arr);

    // toUpperCase()
        // Converts a string to uppercase letters
        // Data type works on: string
        // Syntax: 'Hello World'.toUpperCase(); //equals 'HELLO WORLD'
           //Ex:
                str4 = 'Hello World'.toUpperCase();
                console.log(str4);

    // toLowerCase()
        // Converts a string to lowercase letters
        // Data type works on: string
        // Syntax: 'Hello World'.toLowerCase(); //equals 'hello world'
           //Ex:
           str5 = 'Hello World'.toLowerCase(); 
           console.log(str5);




