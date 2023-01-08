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
  insert(element, position) {}
  append(element) {
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
  }
  indexOf(element) {}
  remove(element) {
    return this.removeAt(this.indexOf(element));
  }
  removeAt(position) {}
  getHead() {
    return head;
  }
}

let l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
console.log(l.getHead());
