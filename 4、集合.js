class Skipper {
  item = {};

  has(value) {
    return this.hasOwnProperty(value);
  }
  add(value) {
    if (this.has(value)) return false;
    this.item[value] = value;
  }
  remove(value) {
    if (this.has(value)) delete this.item[value];
  }
  getItems() {
    return this.item;
  }
  clear() {
    this.item = {};
  }
  size() {
    return Object.keys(this.item).length;
  }
  value() {
    return Object.keys(this.item);
  }
  // 并集
  union(otherSet = {}) {
    var resultSet = new Skipper();
    // 1、将自己的值提取出来
    var arr = Object.values(this.item);
    var arr1 = Object.values(otherSet);
    arr.forEach((item) => {
      resultSet.add(item);
    });
    arr1.forEach((item) => {
      resultSet.add(item);
    });
    return resultSet.getItems();
  }
  // 交集
  intersection(otherSet) {
    var resultSet = new Skipper();
    var arr = Object.values(this.item);
    var arr1 = Object.values(otherSet.getItems());
    arr1.forEach((item) => {
      if (arr.includes(item)) {
        resultSet.add(item);
      }
    });
    return resultSet.getItems();
  }
  // 差集
  difference(otherSet) {
    var resultSet = new Skipper();
    var arr = Object.keys(this.item);
    var arr1 = Object.keys(otherSet.getItems());
    arr.forEach((item) => {
      if (!arr1.includes(item)) resultSet.add(item);
    });
    arr1.forEach((item) => {
      if (!arr.includes(item)) resultSet.add(item);
    });
    return resultSet.getItems();
  }

  //   // 并集
  //   union = new Set([...a, ...b])
  //   // 交集
  //   intersect = new Set([...a].filter((x) => b.has(x)))
  //   // 差集
  //   different = new Set([...a].filter((x) => !b.has(x)))
}

let s = new Skipper();
s.add(1);
s.add(2);
let b = new Skipper();
b.add(2);
b.add(3);
console.log("result", s.difference(b));
