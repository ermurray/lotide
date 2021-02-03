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

// eslint-disable-next-line no-unused-vars
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅  Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌ Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const flatten = function(arrayOfThings) {
  const newArray= [];
  for (const elm of arrayOfThings) {
    if (!Array.isArray(elm)) {
      newArray.push(elm);
    } else {
      for (const element of elm) {
        newArray.push(element);
      }
    }
  }
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);


