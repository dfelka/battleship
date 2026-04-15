function Ship(length) {
  let hits = 0;

  return {
    hit() {
      hits++;
    },
    isSunk() {
      return hits >= length;
    },
    getLength() {
      return length;
    },
    getHits() {
      return hits;
    }
  };
}

module.exports = Ship;