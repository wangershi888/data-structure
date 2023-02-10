// 辅助类
class Node {
  constructor(value) {
    // 当前节点的值
    this.value = value;
    // 左侧子节点
    this.left = null;
    // 右侧子节点
    this.right = null;
  }
}

class Tree {
  root = null;

  // 私有方法
  #insertNode(node, newNode) {
    if (newNode.value > node.value) {
      // 往右走
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.#insertNode(node.right, newNode);
      }
    } else if (newNode.value < node.value) {
      // 往左走
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.#insertNode(node.left, newNode);
      }
    }
  }
  #print(value) {
    console.log("value -- ", value);
  }
  #traverse(node, cb) {
    if (node === null) return;
    // 先序遍历、中序遍历、后序遍历的区别就是中间节点打印的时机
    cb(node.value); // 先序遍历 8、2、3、9
    this.#traverse(node.left, cb);
    // cb(node.value); // 中序遍历 2、3、8、9
    this.#traverse(node.right, cb);
    // cb(node.value); // 后序遍历 3、2、9、8
  }
  #min(node) {
    if (node === null) return null;
    while (node && node.left) {
      node = node.left;
    }
    return node.value;
  }
  #max(node) {
    if (node === null) return null;
    while (node && node.right) {
      node = node.right;
    }
    return node.value;
  }
  #findMindNode(node) {
    if (node === null) return null;
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }
  #removeNode(node, value) {
    if (node === null) return null;
    if (node.value < value) {
      // 继续向右查找
      node.right = this.#removeNode(node.right, value);
      return node;
    } else if (node.value > value) {
      // 继续向左查找
      node.left = this.#removeNode(node.left, value);
      return node;
    } else {
      // 叶节点的情况
      // value === node.value
      // 执行删除过程
      if (node.left === null && node.right === null) {
        // 说明是叶节点，进行删除
        node = node.right;
        return node;
      }
      // 只有一个子节点的情况
      if (node.left === null && node.right) {
        // 右侧树的最小值
        node = node.right;
        return node;
      } else if (node.right === null && node.left) {
        node = node.left;
        return node;
      }
      // 有两个子节点的情况
      // 获取最小子节点
      var aux = this.#findMindNode(node.right);
      node.value = aux.value; // 将当前要删除的节点替换为最小节点，然后将对应的最小节点删除即可

      node.right = this.#removeNode(node.right, aux.value);
      return node;
    }
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.#insertNode(this.root, newNode);
    }
  }
  // 查找某个节点
  search(value) {
    let node = this.root;
    while (node !== null && node.value !== value) {
      if (node === null) return null;
      if (node.value < value) {
        // 往右查找
        node = node.right;
      } else if (node.value > value) {
        // 往左查找
        node = node.left;
      }
    }
    return node;
  }
  // 遍历
  traverse(cb) {
    this.#traverse(this.root, this.#print);
  }
  // 获取最小值的方法，其实就是找最左边的节点
  min() {
    return this.#min(this.root);
  }
  // 获取最大值的方法，就是找最右边的节点
  max() {
    return this.#max(this.root);
  }
  remove(value) {
    // 移除叶节点
    this.root = this.#removeNode(this.root, value);
    // 移除只有一个子节点的节点，只需要将唯一的这个子节点将其替换即可
    // 移除有两个子节点的情况
  }
  getRoot() {
    return this.root;
  }
}

var n = new Tree();
n.insert(11);
n.insert(8);
n.insert(4);
n.insert(9);
n.insert(10);
n.insert(3);
n.insert(5);
console.log(n.search(8));
// console.log(n.getRoot());
