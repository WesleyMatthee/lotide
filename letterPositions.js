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

const letterPositions = function(sentence) { //function 
  const results = {};//making an empty object
  // logic to update results here
  for (char in sentence) { //A for in loop to loop over an object
    letter = sentence[char]; //declaring letter as the keys
    if (letter === " ") {
      continue; //ingoring empty spaces

    }

    if (results[letter] == undefined) { //if the object key is undefined
      results[letter] = [];// Give the key an arrat for a value
    }
    results[letter].push(Number(char));//object key push array key and make them a number

  };
  return results; // the result

};



console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("Howzit")["H"], [0]);