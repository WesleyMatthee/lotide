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


//eqObjects------------------------------------


const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object2Keys.length !== object1Keys.length) {
    return false;
  }
  for (let key of object2Keys) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true


const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

















