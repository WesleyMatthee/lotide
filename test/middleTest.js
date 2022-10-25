const assert = require('chai').assert;
const middle = require('../middle');


//Test code
// const testOddArray = [1, 2, 3];
// const testEvenArray = [1, 2, 3, 4, 5, 6];
// assertArraysEqual(middle(testSmallArray), []); //true
// assertArraysEqual(middle(testOddArray), [1]); //true
// assertArraysEqual(middle(testEvenArray), [2, 3]); //true

describe("#middle", () => {
  //
  it("returns [] for (testSmallArray)", () => {
    
    const testSmallArray = [1];


    assert.deepEqual(middle([testSmallArray]), []);
  });
  //
});
