const assertArraysEqual = function(arr1, arr2) {

  //create a loop to iterate through the arrays
  for (let i = 0; i < arr1.length; i++) {

    if (arr1 !== arr2) {

      console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`);
    } else {

      console.log(`🛑🛑🛑Assertion Failed: [${arr1}] !== [${arr2}]`);
    }
  }
};

//

const eqArrays = function(arr1, arr2) {

  //create a loop to iterate through the arrays
  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {

      return false;
    }
  } return true;
};

//create a function to check if the array is nested
//loop through the array
//check the array
//if nested arrays are found
const flatten = function(array) {
  for (arr of array) {

  }

}