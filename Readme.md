# 常用数据结构

## 栈

### 概念

    栈是一种后进先出的数据结构

### 栈的操作

- push: 入栈
- pop: 出栈
- peek: 检查栈顶元素
- isEmpty: 是否为空
- clear: 清空栈
- size: 栈中元素个数

## 队列

### 概念

    队列是一种先进先出的数据结构

### 队列的操作

- enqueue: 入队
- dequeue: 出队
- front: 查看队列头
- isEmpty: 是否为空
- size: 队列长度

### 循环队列

### 优先队列

    需要考虑优先级，相当于入列的时候，根据优先级插入道合适的位置

## 链表

    一个元素存在指向自身前一个元素以及指向自身后一个元素的地址的结构

### 操作

- insert: 插入元素，指定位置，以及元素
- append: 尾部添加元素，指定元素
- indexOf: 获取元素索引，指定元素
- remove: 移除元素，指定元素
- removeAt: 从特定位置移除某一项，指定位置

### 双向列表

    每个链表会同时记录下一个和上一个(previous)的位置

### 双向循环列表

    不仅仅同时存储previous、next,最后一个节点的next指向自己的head

## 集合

    1、集合中不能有重复元素
    2、空集：没有任何元素的集合叫空集
    3、子集：A中所有的元素再B中都有，则可以称 A 是 B 的子集

    Set :
    方法：
    + add： 添加元素
    + clear: 清空集合
    + delete: 删除元素
    + entire: 迭代器
    + forEach: 遍历方法
    + has: 检查元素是否存在
    + size: 获取集合大小
    + values: 获取全部值

    weakSet:

    + add: 添加元素
    + delete: 删除元素
    + has: 检查元素

    Set 和 weakSet的区别：
    1、weakSet方法较少、set方法丰富
    2、weakSet只能添加Object类型的数值
    3、Set是强引用、weakSet为弱引用（JS内存回收机制）
        ```
        let obj = {a: 'a'}
        obj = null
        // 之前的 {a: 'a'}失去引用后，会被CG内存回收掉

        强引用：
        let obj = {a: 'a'}
        let a = new Set(obj)
        obj = null
        // 此时 {a: 'a'} 的值仍然会存在（强引用）如果使用weakSet的话会被清理掉
        ```

## 字典
