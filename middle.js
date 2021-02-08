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

module.exports = middle;