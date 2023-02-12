var items = []; // 私有变量

class Queue {
  enqueue(element) {
    items.push(element);
  }
  dequeue() {
    return items.shift();
  }
  front() {
    return items[0];
  }
  isEmpty() {
    return items.length === 0;
  }
  size() {
    return items.length;
  }
}

// 优先队列
function PriorityQueue() {
  var items = [];
  var priorityQueueItem = new QueueItem(element, proirity);
  this.enqueue(priorityQueueItem)  = function () {
    var added = false
    for(let i = 0; i < items.length; i ++) {
      if(items[i].p < priorityQueueItem.p) {
        // 将当前元素插入到对应元素前边
        items.splice(i, 0, 1)
        added = true
        break
      }
    }
    if(!added) {
      // 没插入成功，说明优先级最大
      items.push(priorityQueueItem)
    }
  }
}
// 辅助类
class QueueItem {
  constructor(n, q) {
    this.n = n;
    this.q = q;
  }
}

var Q = new Queue();

module.exports = {
  Queue
}