const words = ["ground", "control", "to", "major", "tom", "loving", "LHL"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const eqArrays = function(arrayOne, arrayTwo) {
  let pass = true;
  if (arrayOne.length !== arrayTwo.length) {
    pass = false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      pass = false;
    }
  }
  return pass;
};

// eslint-disable-next-line no-unused-vars
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅  Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌ Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};
const wordsUppercase =["GROUND", "CONTROL", "TO", "MAJOR", "TOM", "LOVING", "LHL"];
assertArraysEqual(map(words, word => word.toUpperCase()), wordsUppercase);