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



module.exports = assertArraysEqual;