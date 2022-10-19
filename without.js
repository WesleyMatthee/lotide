

const eqArrays = function(arr1, arr2) {
  
  //create a loop to iterate through the arrays
  for (let eq = 0; eq < arr1.length; eq++) {
    
    if (arr1[eq] !== arr2[eq]) {
      
      return false;
    }
  } return true;
};


const assertArraysEqual = function(arr1, arr2) {
  //create a loop to iterate through the arrays
 

  if (arr1 === arr2) {
      
    console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {

    console.log(`🛑🛑🛑Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
   
};

const without = function(arr1, arr2) {
  //Make a new array
  //let newArr = []; Splice will create a new array!
  //loop through the arrays
  
  for (let x = 0; x < arr2.length; x++) {
    for (let w = 0; w < arr1.length; w++) {
      if (arr1[w] === arr2[x]) {

        arr1.splice(w, 1);
      }
    //condition to remove the unwanted index
    }
  } return arr1;
};
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);