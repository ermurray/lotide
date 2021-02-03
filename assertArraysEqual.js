const eqArrays = function(arrayOne, arrayTwo) {
  let pass = false;
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] === arrayTwo[i]) {
        pass = true;
      } else {
        pass = false;
      }
    }
  }
  return pass;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅  Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌ Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

// assertArraysEqual([1,2,3], [1,2,3]);
// assertArraysEqual([1,2,3],[3,2,1]);