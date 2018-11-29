'use strict'

const {
  N,
  S,
  W,
  E,
  L,
  R
} = require('./constants.js');

const {
  extractPosition,
  isValidPosition,
  moveForwardUpward,
  moveBackwardDownward
} = require('./utility.js');


class Robot {
  constructor(x, y, direction, placed) {
    this.setPosition(x, y, direction, placed);
  }

  report() {
    if (this.isPlaced) {
      let {
        x,
        y,
        direction
      } = this.getCurrentPosition();
      console.log(`${x}, ${y}, ${direction}`);
    }
  }

  getCurrentPosition() {
    return {
      x: this.x,
      y: this.y,
      direction: this.direction
    }
  }

  place(data) {
    let { x, y, dir } = extractPosition(data);
    if (!isNaN(x) && !isNaN(y) && dir) {
      if (isValidPosition(x, y)) {
        this.setPosition(x, y, dir, true);
      }
    }
  }

  setPosition(x, y, dir, placed) {
    this.x = x;
    this.y = y;
    this.direction = dir.toUpperCase();
    this.isPlaced = placed;
  }

  move() {
    if (this.isPlaced) {
      let dir = this.direction.toUpperCase(),
                movesByDirection = {};

      movesByDirection[E] = () => this.x = moveForwardUpward(this.x, this.y);
      movesByDirection[W] = () => this.x = moveBackwardDownward(this.x, this.y);
      movesByDirection[N] = () => this.y = moveForwardUpward(this.y, this.x);
      movesByDirection[S] = () => this.y = moveBackwardDownward(this.y, this.x);

      movesByDirection[dir]();
    }
  }

  rotate(dir) {
    if (this.isPlaced) {
      const directions = [E, N, W, S],
        len = directions.length;

      let index = directions.findIndex(d => d === this.direction.toUpperCase());
      
      const movablePositions = new Map()
      .set(L, directions[(index + 1) % len])
      .set(R, directions[(index + len - 1) % len]);

      this.direction = movablePositions.get(dir.toUpperCase());
    }
  }

}

module.exports = Robot;