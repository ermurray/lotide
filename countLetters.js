const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};
  for (const letter of str) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

const teststr = 'hello world';
const result = countLetters(teststr);
assertEqual(result['h'], 1);
assertEqual(result['l'], 3);
assertEqual(result['g'], undefined);
assertEqual(result['o'], 2);
assertEqual(result['h'], 1);
