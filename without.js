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

const without = function(source, itemsToRemove) {
  let editedArray = source.slice();
  for (let i = 0; i < editedArray.length; i++) {
    // console.log('first for', source);
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (editedArray[i] === itemsToRemove[j]) {
        editedArray.splice(i, 1);
        //console.log('after splice', source);
      }
    }
  }
  return editedArray;
};

assertArraysEqual(without([1, 2, 3, 4, 5, 6], [1, 2, 3]), [4, 5, 6]);
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
console.log(words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
