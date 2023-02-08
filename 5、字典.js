class Dictionary {
  items = {};
  has(key) {
    // return this.items.hasOwnProperty(key);
    return key in this.items;
  }
  set(key, value) {
    this.items[key] = value;
  }
  delete(key) {
    return this.items.has(key) ? delete this.items[key] : false;
  }
  get(key) {
    return this.items[key];
  }
  getItems() {
    return this.items;
  }
}

let a = new Dictionary();
a.set("a", "a");
a.set("b", "b");
console.log(a.getItems());
