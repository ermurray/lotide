const tail = function(data) {
  const arrayTail = data.slice(1, data.length);
  return arrayTail;
};

module.exports = tail;