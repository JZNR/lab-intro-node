class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function(a, b){return a - b});
    }

  get(pos) {
    if(pos > this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    this.items.sort(function(a, b){return a - b});
    if(this.length <= 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];
  }

  min() {
    this.items.sort(function(a, b){return a - b});
    if(this.length <= 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
