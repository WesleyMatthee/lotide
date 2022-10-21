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
//--------------------TEST ARRAYS ARE TRUE---------------------
const takeUntil = function(array, callback) {
  let newArray = [];
  // loop through the array
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) { // evaluates the item and searching for anything thats not the same
      newArray.push(array[i]);
    } else {
      return newArray; //stops the function once it matches the condition 
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);









assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(([1, 4, 3, 5], [1, 4, 3]), true);
// assertArraysEqual(([4, 2, 3], [4, 2, 3]), true); 
// assertArraysEqual(([3, 2, 3], [3, 2, 3]), true); 
