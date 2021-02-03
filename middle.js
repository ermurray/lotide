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

const middle = function(array) {
  const midIndex = Math.floor(array.length / 2);
  let midArray = [];
  if (Array.isArray(array)) {
    if (array.length <= 2) {
      return midArray;
    } else if (array.length % 2 === 0) {
      midArray = array.slice(midIndex - 1, midIndex + 1);
    } else {
      midArray = array.slice(midIndex , midIndex + 1);
    }
  }
  return midArray;
};

//tests
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
