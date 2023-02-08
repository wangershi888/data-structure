/**
 * 辅助类
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

var head = null; // 链表头
var length = 0; //链表长度

class LinkedList {
  insert(element, position) {
    var node = new Node(element);
    // 越界问题,position一定有一个限定的值
    if (position > -1 && position < length) {
      // 如果要插入的链表节点为第一个节点，则直接添加
      if (position === 0) {
        var current = head;
        head = node;
        head.next = current;
      } else {
        // 进行循环，找到对应的position
        var index = 0;
        var current = head;
        var pervious = null;
        while (index < position) {
          pervious = current;
          current = current.next;
          index++;
        }
        // 将对应的节点插入
        pervious.next = node;
        node.next = current;
      }
    }
  }
  append(element) {
    console.log("element", element);
    var node = new Node(element);
    if (head == null) {
      head = node;
    } else {
      var current = head; // 空链表
      // 从头开始查找
      while (current.next) {
        current = current.next;
      }
      // 循环执行完之后，current 一定是链表的最后一个
      current.next = node;
    }
    length++;
  }
  indexOf(element) {
    var index = 0;
    var current = head;
    while (current) {
      if (current.element === element) return index;
      current = current.next;
      index++;
    }
    return -1;
  }
  remove(element) {
    return this.removeAt(this.indexOf(element));
  }
  removeAt(position) {
    if (position > -1 && position < length) {
      if (position === 0) {
        head.pervious = null;
        head = head.next;
      } else {
        var index = 0;
        var current = head;
        var pervious = null;
        while (index < position) {
          pervious = current;
          current = current.next;
          index++;
        }
        // 进行删除操作
        pervious.next = current.next;
      }
      length--;
    }
  }
  getHead() {
    return head;
  }
  isEmpty() {
    return length === 0;
  }
  size() {
    return length;
  }
}

// let l = new LinkedList();
// l.append(1);
// l.append(2);
// l.append(3);
// l.remove(2);
// l.insert(123121, 1);
// console.log(l.getHead());
// console.log(l.getHead());
module.exports = {
  LinkedList,
};
