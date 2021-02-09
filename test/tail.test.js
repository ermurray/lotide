const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('should return ["lighthouse", "labs"] for ["this is", "lighthouse", "labs"]', () => {
    assert.deepEqual(tail(['this is', "lighthouse", "labs"]), ["lighthouse", "labs"]);
  });
  it('should return [0, 99] for [1, 0, 99]', () => {
    assert.deepEqual(tail([1, 0, 99]), [0, 99]);
  });
  it('should return ["lighthouse", "labs"] for [99, "lighthouse", "labs"]', () => {
    assert.deepEqual(tail([99, "lighthouse", "labs"]), ["lighthouse", "labs"]);
  });
  it('should return [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
  

});

