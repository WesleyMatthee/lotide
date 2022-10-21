const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//Implement the function findKey which takes in an object and a callback. 
//It should scan the object. Use a for in loop!!
//return the first key for which the callback returns a truthy value. If statement!!!
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};




findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"






// assertEqual(object[key], "noma");
// assertEqual(3, 1);
// assertEqual('THIS', 'THIS');
// assertEqual('this', 'that');