const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function(words) {
  const result = {};

  for (let letter of words) {
    if (letter === " ") {
      continue;
    }
    //console.log(letter);
    if (!result[letter]) {
      result[letter] = 0;   //letter: 1
    }
    result[letter]++;
    //console.log(result["K"]);

  }
  return result;
};

const findKeyByValue = function(object, value) {








};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);