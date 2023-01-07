let items = []; // 私有变量

class Stack {
  // 入栈
  push(element) {
    items.push(element);
  }
  // 出栈
  pop() {
    return items.pop();
  }
  // 检查栈顶
  peek() {
    return items[items.length - 1];
  }
  isEmpty() {
    return items.length === 0;
  }
  size() {
    return items.length;
  }
  clear() {
    items = [];
  }
}
