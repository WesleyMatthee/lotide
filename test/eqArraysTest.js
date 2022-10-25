const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


//test code
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 4, 3, 5], [1, 4, 3]), true);
// assertEqual(eqArrays([4, 2, 3], [4, 2, 3]), true);
// assertEqual(eqArrays([3, 2, 3], [3, 2, 3]), true);

describe("#eqArrays", () => {
  it("should checks if two given arrays are equal", () => {


    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});
