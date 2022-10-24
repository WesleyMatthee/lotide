const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


//test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 4, 3, 5], [1, 4, 3]), true);
assertEqual(eqArrays([4, 2, 3], [4, 2, 3]), true);
assertEqual(eqArrays([3, 2, 3], [3, 2, 3]), true);