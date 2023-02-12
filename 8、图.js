const { Stack } = require("./1、栈");
const { Queue } = require("./2、队列");

class Graph {
  // 存储顶点
  vertices = [];
  // 存储边，就是点与点的连接关系
  adjList = {};

  // 添加顶点
  addVertex(v) {
    this.vertices.push(v);
    this.adjList[v] = [];
  }
  // 添加边
  addEdge(a, b) {
    this.adjList[a].push(b);
    this.adjList[b].push(a);
  }

  print() {
    var s = "\n";
    for (var i = 0; i < this.vertices.length; i++) {
      var d = this.vertices[i];
      s += d + "=>";
      var b = this.adjList[d];
      for (var j = 0; j < b.length; j++) {
        s += b[j];
      }
      s += "\n";
    }
    console.log(s);
  }

  //广度优先遍历
  /**
   * white: 未发现
   * grey: 已发现未探索
   * black: 已探索
   */

  /**
   * d 距离
   * pred 回溯点
   */
  BFS(v, callback) {
    function initClolor(vertices) {
      var color = {};
      for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = "white";
      }
      return color;
    }
    var color = initClolor(this.vertices);
    var queue = new Queue();

    // 最短路径初始化
    var d = {};
    var pred = {};
    for (var i = 0; i < this.vertices.length; i++) {
      d[this.vertices[i]] = 0;
      pred[this.vertices[i]] = null;
    }

    queue.enqueue(v);
    while (!queue.isEmpty()) {
      var now = queue.dequeue();
      var bian = this.adjList[now];
      for (let i = 0; i < bian.length; i++) {
        var w = bian[i];
        if (color[w] === "white") {
          // 未发现的全部入列，并且标志为已发现
          color[w] = "grey";
          // 设置回溯点
          pred[w] = now;
          d[w] = d[now] + 1;
          queue.enqueue(w);
        }
      }
      color[now] = "black";
      if (callback) callback(now);
    }
    return {
      pred,
      d,
    };
  }

  /**
   * 深度优先算法
   *
   * white: 未发现
   * grey: 已发现未探索
   * black: 已探索
   */
  DFS(v, callback) {
    let _this = this;
    var color = {};
    function initClolor(vertices) {
      for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = "white";
      }
      return color;
    }
    initClolor(_this.vertices); // 初始化颜色
    function dfsVisite(v, callback) {
      color[v] = "grey";
      var n = _this.adjList[v];
      for (let i = 0; i < n.length; i++) {
        var w = n[i];
        if (color[w] === "white") {
          dfsVisite(w, callback);
        }
      }
      color[v] = "black";
      callback && callback(v);
    }
    dfsVisite(v, callback);
  }
}

var g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("B", "E");
g.addEdge("B", "F");
// g.addEdge("D", "F");
g.print();
// let a = g.BFS("A", (a) => {
//   console.log(a);
// });
// console.log(a);

// var s = g.BFS("A");
var s = g.DFS("A", (a) => {
  console.log(a);
});

function zuiduan(from, to) {
  var v = to; // 设置当前点
  var path = new Stack();
  while (v !== from) {
    path.push(v);
    v = s.pred[v]; // 回溯点中寻找自己
  }
  path.push(v);

  var str = "";
  while (!path.isEmpty()) {
    str += path.pop() + "-";
  }
  return (str = str.slice(0, str.length - 1));
}
// console.log(zuiduan("A", "F"));
