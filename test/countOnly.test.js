const assert = require('chai').assert;
const countOnly = require('../countOnly');


describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it('given an array and an  object return object of items that match {key:true}', () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }),{ "Jason": 1, "Fang": 2});
  
  });

});
