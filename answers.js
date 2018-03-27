//
// Jason Spiller
// 03.26.18
// https://github.com/jasonspiller/week-02-day-1-datatypes-objects.git
// Description:
// Answers to WDI7 week 2 day 1 homework.
//

// 1. A light switch that can be either on or off.
// Boolean
// 2. A user's email address.
// String
// 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// Object
// 4. A list of student names from our class.
// Array
// 5. A list of student names from our class, each with a location.
// Array of Objects
// 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// Array of objects


// 1. Make an array that holds all of the colors of the rainbow.
const rainbowColors = ['red','orange','yellow','green','blue','purple']
// 2. Write code that will access "blue" from the rainbow array.
rainbowColors[4];
// 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
let jasonSpiller = {
	favoriteFood: 'Chinese',
	hobby: 'toy collecting',
	town: 'Englewood',
	favDatatyple: 'string'
}
// 4. Write code that will access your hobby from the object that you just created.
jasonSpiller.hoddy;


const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}


// 1. "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);
// 2. "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
// 3. "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);
// 4. "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
// 5. The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);


const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

// Change the value of limbo to null.
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
