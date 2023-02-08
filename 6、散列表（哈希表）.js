const { LinkedList } = require("./3、链表");

// 辅助类
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

// 分离连接法
class HashTable {
  item = [];
  // 散列函数
  loseloseHashCode(key) {
    // key => number => item[number]
    // 通过Ascii码转换的一种形式
    var hash = 0; // 散列值
    for (var i = 0; i < key.length; i++) {
      // 将key的每一项，转换成ascii码
      hash += key[i].charCodeAt();
    }
    return hash % 37;
  }
  // 散列函数2.0
  djb2HashCode(key) {
    // 用它来解决冲突问题
    var hash = 5381;
    for (var i = 0; i < key.length; i++) {
      hash = hash * 33 + key[i].charCodeAt();
    }
    return hash % 1013;
  }
  put(key, value) {
    var position = this.loseloseHashCode(key);
    if (!this.item[position]) {
      // 如果没有，则直创建链表
      var l = new LinkedList();
      this.item[position] = l;
    }
    this.item[position].append(new Node(key, value));
  }
  getItems(key) {
    // 定位到某一链表，在链表中进行一个一个查找
    var position = this.loseloseHashCode(key);
    if (this.item[position]) {
      // 链表线性查找
      let current = this.item[position].getHead();
      while (current) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    } else {
      return undefined;
    }
  }
  getTable() {
    return this.item;
  }
  remove(key) {
    var position = this.loseloseHashCode(key);
    // 将链表的上一项指向当前项目的下一项
    if (this.item[position]) {
      let current = this.item[position].getHead();
      while (current) {
        if (current.element.key === key) {
          this.item[position].remove(current.element);
          if (this.item[position].isEmpty()) this.item[position] = undefined;
          return true;
        }
        current = current.next;
      }
      return false;
    }
    return false;
  }
}

let a = new HashTable();

a.put("Donnie", "163@qq.com");
a.put("Ana", "Bob@qq.com");
console.log(a.getItems("Ana"));

console.log(a.remove("Ana"));
console.log(a.getItems("Ana"));

// 线性探查法

class HashTableLine {
  table = [];
  // 散列函数
  loseloseHashCode(key) {
    // key => number => item[number]
    // 通过Ascii码转换的一种形式
    var hash = 0; // 散列值
    for (var i = 0; i < key.length; i++) {
      // 将key的每一项，转换成ascii码
      hash += key[i].charCodeAt();
    }
    return hash % 37;
  }
  put(key, value) {
    // 如果被占用，则向下移位，直到undefined，则存进去
    var position = this.loseloseHashCode(key);
    if (this.table[position] === undefined) {
      // 直接存储
      this.table[position] = new Node(key, value);
    } else {
      // 当前位置被占据，则不断的查找，直到遇到空的为止
      position += 1;
      while (this.table[position] !== undefined) {
        position += 1;
      }
      this.table[position] = new Node(key, value);
    }
  }
  get(key) {
    var position = this.loseloseHashCode(key);
    if (this.table[position].key === undefined) return undefined;
    if (this.table[position].key === key) {
      return this.table[position].value;
    } else {
      position += 1;
      while (this.table[position].key === key) {
        position += 1;
      }
      return this.table[position].value;
    }
  }
  remove(key) {
    var position = this.loseloseHashCode(key);
    if (this.table[position].key === undefined) return undefined;
    if (this.table[position].key === key) {
      this.table[position] = undefined;
      return true;
    } else {
      position += 1;
      while (this.table[position].key === key) {
        position += 1;
      }
      this.table[position] = undefined;
      return true;
    }
  }
}
