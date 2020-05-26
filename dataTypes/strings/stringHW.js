// String Homework

    // Write code to convert the following into something for the computer and something for the human;

    var fullText2 = "MAN67584758;Manchester Piccadilly"    // -> Expected Solution: Computer: MAN67584758, Human: Manchester Piccadilly
    var fullText1 = "GNF5767465;Greenfield"                // -> Expected Solution: Computer: GNF5767465, Human: Greenfield
    var fullText3 = "LIV5hg65hd7374;Liverpool Lime Street" // -> Expected Solution: Computer: LIV5hg65hd7374, Human: Liverpool Lime Street
    var fullText4 = "SYB4f;Stalybridge"                    // -> Expected Solution: Computer: SYB4f, Human: Stalybridge
    var fullText5 = "HUD5767ghtyfyr45;Huddersfield"        // -> Expected Solution: Computer: HUD5767ghtyfyr45, Human: Huddersfield

    //Figure out where divider is
    var divider = fullText1.indexOf(';');
    //Slice it on the semicolon to get the first half
    var computerText = fullText1.slice(0, divider);
    //Slice on the semicolon to get the second half
    var humanText = fullText1.slice(divider + 1, fullText1.length);
    //Create a string of everything.
    var finalText = `Text for computer: ${computerText}. Text for human: ${humanText}.`;
    //Show on CLI
    console.log(finalText)


    // String Homework Continued

// Example:
    // Write some code that will split up a string into a clear string names. 
    // For example 'Kaya,Solomon' gets converted into 'Kaya, Solomon'.
    // For example 'Nic,Laurie' gets converted into 'Nic, Laurie'.
    // Solution: console.log('Kaya,Solomon'.split(',').join(', '));

//Strings:
    //Q1: 
        // Write some code that gives us the length of a given string.
        // For example 'Peter Parker' gives us 12.
        // For example 'Michelle Obama' gives us 14.
        // var str = 'Peter Parker';
        // var n = str.length;
        // console.log(n);       

    //Q2: 
        // a: Write some code that converts a string into all capitals
        //      For example: 'Peter Parker' changes to 'PETER PARKER'.
        // b: Write some code that converts a string into all lowercase.
        //      For example: 'Michelle Obama' converts 'michelle obama'.
        // var str = 'Peter Parker';
        // var caps = str.toUpperCase();
        // // console.log(caps);
        // var lower = str.toLowerCase();
        // // console.log(lower);

    //Q3: 
        // a: Write some code that extrapolates the second word from the string: "My home town.".
        //      The result should be: 'home'
        // b: Write some code that extrapolates the second word from the string: "Lets eat, Grandpa!".
        //      The result should be: 'eat'
        // var miPueblo = "Longer worlds town.";
        // var casa = miPueblo.indexOf('t');
        // var soloCasa = miPueblo.slice(3, casa);
        // console.log(soloCasa);

        // var str = "Longer worlds town";
        // var strArr = str.split(' ')[1];
        // console.log(strArr);

    //Q4: 
        // Write some code that capitalizes a portion of a given string.
        // For example: "I'm very happy!" becomes, "I'm VERY happy!".

        // var allegre = "I'm very happy";
        // var jo = allegre.replace('happy', 'HAPPY');
        // // console.log(jo);

        // var str = "I'm very happy";
        // var arr = str.split(' ');
        // var capitalized = arr[1].toUpperCase();
        // arr[1] = capitalized;
        // console.log(arr.join(' '));
        

