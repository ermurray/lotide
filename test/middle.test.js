const assert = require('chai').assert;
const middle = require('../middle.js');

describe('#middle', () => {

  it('expect a return of [2] when input is [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('expect a return of [3] when input is [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('expect a return of [] when input is [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  
  it('expect a return of [] when input is [\'a\']', () => {
    assert.deepEqual(middle(['a']), []);
  });
  
  it('expect a return of [] when input is [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('expect a return of [] when input is [\'b\',\'a\']', () => {
    assert.deepEqual(middle(['b', 'a']), []);
  });

});
