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



//IT must return the middle elements on an array
//make a middle function
//find the even array
//find the odd array
//return the middle
const middle = function(array) {
  if (array.length < 3) {

    return [];
  }
  if (array.length % 2 === 0) {
    console.log('Even');
    let evenA = array.length / 2;
    let evenB = evenA - 1;
    return [evenB, evenA];
  } else {
    console.log('Odd');
    return [Math.floor(array.length / 2)];
  }

};


//Test code
const testSmallArray = [1];
const testOddArray = [1, 2, 3];
const testEvenArray = [1, 2, 3, 4, 5, 6];
assertArraysEqual(middle(testSmallArray), []); //true
assertArraysEqual(middle(testOddArray), [1]); //true
assertArraysEqual(middle(testEvenArray), [2, 3]); //true
// const testOddArray = [1, 2, 3]