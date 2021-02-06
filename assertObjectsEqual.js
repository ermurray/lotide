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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (!Array.isArray(object1[key])) {
      return eqObjects(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line no-unused-vars
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅  Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};
//tests
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba); //pass

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc); //fail

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); //pass

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); //fail
// assertObjectsEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

// assertObjectsEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// assertObjectsEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false