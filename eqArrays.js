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

module.exports = eqArrays;