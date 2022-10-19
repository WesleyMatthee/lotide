const assertEqual = function(actual, expected) {
  //loop through the arrays

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//implement a function eqArrays
const eqArrays = function(arr1, arr2) {

  //create a loop to iterate through the arrays
  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {

      return false;
    }
  } return true;
};
// check to see if the arrays are ===
// return true if they are ===

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(3, 1);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 4, 3, 5], [1, 4, 3]), true);
assertEqual(eqArrays([4, 2, 3], [4, 2, 3]), true);
assertEqual(eqArrays([3, 2, 3], [3, 2, 3]), true);
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// if (array1[i] !== array2[i]) {
//   return false;