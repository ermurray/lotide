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

};







const actualResults =  letterPositions('')


const expectedResults = { 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

assertArraysEqual()