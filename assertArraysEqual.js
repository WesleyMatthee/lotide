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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(([1, 4, 3, 5], [1, 4, 3]), true);
// assertArraysEqual(([4, 2, 3], [4, 2, 3]), true); 
// assertArraysEqual(([3, 2, 3], [3, 2, 3]), true); 
