// We havent used objects in functions yet so they are not going to be in function format

// level 1:
    // using dot notation create an object called plant with 3 key value pairs
    var plantObj = {

        seeds: 5,
        water: 'daily',
        environment: ['Outdoors', 'indoors' ],

 };
       
// // level 2:
//     // using dot notation add a name key-value pair to the object
         plantObj.origin = 'Central Asia';
//     // using dot notation remove a key-value pair from the object
        plantObj.environment = ['outdoors'];
//     // using dot notation change the value in one of your objects key-value pairs
         plantObj.seeds = plantObj.seeds + 5;
// // level 3:
//     // using dot notation add a key-value pair where the value is an array with 4 elements
          plantObj.plantTypes = ['haze', 'sour diesel', 'purple haze', 'northern lights'];
//     // using dot notation and indexing an array change the second element in the array
          plantObj.plantTypes = (['haze', 'blue dream', 'purple haze', 'northern lights']);
         
         console.log(plantObj);






