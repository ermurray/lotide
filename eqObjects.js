const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  let result = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    result = false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      result = eqArrays(object1[key], object2[key]);
    } else if (!Array.isArray(object1[key]) && typeof object1[key] === 'object') {
      result = eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      result = false;
    }
  }
  return result;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { z: {y:1 }}, b: 2 }, { a: { z:{y: 1}}, b: 2 }), true);
const objA = { b: [1], a: { y: 1, z: 2 }, d: 1};
const objB = { b: [1], a: { y: 1, z: 1 }, d: 1 };
const objC = { a: { z: {y:1 }}, b: 2 };
const objD = { a: { z:{y: 1}}, b: 2 };
const objE = { a: { z:{y: 1}}, b: {k:2} };
const objF = { b: [1], a: { y: 1, z: [1] }, d: 1 };
const objJ = { b: [1, {m: 1}], a: { y: 1, z: 1 }, d: 1 };
const objK = { b: [1, {m: 1}], a: { y: 1, z: 1 }, d: 1 };
assertEqual(eqObjects(objA, objB), false);
assertEqual(eqObjects(objA, objF), false);
assertEqual(eqObjects(objJ, objK), true);
