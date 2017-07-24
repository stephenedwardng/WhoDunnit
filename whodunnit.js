// Episode 1
var name = 'Slim Shady';

var printName = function() {
  console.log('Hi! My name is', name);
};

printName();

// Output: Hi! My name is Slim Shady
// Global variable accessed by function and printed to console

// Episode 2
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
// Output: 3
// Local variable takes precidence over global

// Episode 3
var myAnimals = ['chickens', 'cats', 'rabbits'];

var listAnimals = function() {
  myAnimals = ['ducks', 'dogs', 'lions'];
  for(var i=0; i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();
// Output: ducks dogs lions
// Because myAnimals in function is overwriting the global 

// Episode 4
var suspectOne = 'Alan';
var suspectTwo = 'Steve';
var suspectThree = 'John';
var suspectFour = 'Ally';

var allSuspects = function() {
  var suspectThree = 'Adam'
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// John
// Because suspectThree declared in function remains in function

// Episode 5
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo()); 

// Poirot
// Flow is detectiveInfo is called and changes name to Poirot. The calls printName
// which takes in detective object and returns detective name, which was changed

// Episode 6
var murderer = 'John';

var outerFunction = function() {
  var murderer = 'Ally';

  var innerFunction = function() {
    murderer = 'Steve';
  }

  innerFunction();
}

outerFunction();
console.log('The murderer is', murderer);

// John
// Because the inner and outer functions declare new murderers within function scope

// Episode 7
var muncher = {
  name : 'Eddie',
  food : 'Pot Noodles'
};

var printName = function(muncher) {
  return muncher.name + " ate all the " + muncher.food;
};

var muncherDetails = function() {
  muncher['food'] = 'Jaffa Cakes'
  return printName(muncher);
};

console.log(muncherDetails()); 


