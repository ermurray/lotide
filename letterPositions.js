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

const letterPositions = function(str) {
  const results = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (results[str[i]]) {
        results[str[i]].push(i);
      } else {
        results[str[i]] = [i];
      }
    }
  }
  return results;
};







const actualResults =  letterPositions('hello');


assertArraysEqual(actualResults['h'], [0]);
assertArraysEqual(actualResults['e'], [1]);
assertArraysEqual(actualResults['l'], [2, 3]);
assertArraysEqual(actualResults['o'], [4]);
