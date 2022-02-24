const getQuad = (array, Ts) => {
  let n = array.length;
  let arr = array.sort((a, b) => a - b);
  let quad = {};
  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      for (let k = j + 1; k < n - 1; k++) {
        for (let l = k + 1; l < n; l++) {
          if (arr[i] + arr[j] + arr[k] + arr[l] == Ts) {
            let newSum = [arr[i], arr[j], arr[k], arr[l]];
            quad[newSum.join("")] = newSum;
          }
        }
      }
    }
  }
  return Object.values(quad);
};

module.exports = getQuad;
