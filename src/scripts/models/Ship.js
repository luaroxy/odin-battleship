export function Ship(length) {
  let hits = 0;
  let sunk = false;

  function hit() {
    this.hits = this.hits + 1;
  }

  function isSunk() {
    if (this.hits === this.length) this.sunk = true;
  }

  return { length, hits, sunk, hit, isSunk };
}
