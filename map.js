//create a map function
//the map fucntion will take two arguments
//  1: An array to map
//  2: a callback function
//the new map will return a new array
const assertArraysEqual = function(arr1, arr2) {


  if (eqArrays(arr1, arr2)) {

    console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {

    console.log(`🛑🛑🛑Assertion Failed: [${arr1}] !== [${arr2}]`);
  }

};

const eqArrays = function(arr1, arr2) {

  //create a loop to iterate through the arrays
  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {

      return false;
    }
  } return true;
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    //temp code:
    // console.log('item Before:', item)
    // console.log('item After:', callback(item))
    // console.log('---');
  }
  return results;
};
const result1 = map(words, word => word[0]);


assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]);
 //assertArraysEqual(map(words),);
// assertArraysEqual(([4, 2, 3], [4, 2, 3]), true); 
// assertArraysEqual(([3, 2, 3], [3, 2, 3]), true); 

//console.log(result1);

