/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let result = 0;

  let jewelsStones = new Set(); // {"a", "A"}

  for (let i = 0; i < jewels.length; i++) {
    jewelsStones.add(jewels[i]);
  }

  for (let j = 0; j < stones.length; j++) {
    if (jewelsStones.has(stones[j])) {
      result += 1;
    }
  }

  return result;
};