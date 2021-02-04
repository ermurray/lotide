
const takeUntil = function(array, callback) {
  const results = [];
  for (const elm of array) {
    if (callback(elm)) {
      return results;
    } else {
      results.push(elm);
    }
  }
    
  return results;
};







// example uses
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

// expected results
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


//testing below
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

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
