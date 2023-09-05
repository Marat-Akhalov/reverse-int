module.exports = function reverse(n) {
  const reversedStr = [...String(Math.abs(n))].reverse().join('');

  return +reversedStr;
};
