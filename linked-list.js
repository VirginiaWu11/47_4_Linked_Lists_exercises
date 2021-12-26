/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    const popVal = this.tail.val;

    while (currentNode) {
      if (currentNode.next === this.tail) {
        this.tail = currentNode;
      }
      currentNode = currentNode.next;
    }

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return popVal;
  }

  /** shift(): return & remove first item. */

  shift() {
    let popVal = this.head.val;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else this.head = this.head.next;
    return popVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let i = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (i === idx) {
        return currentNode.val;
      }
      currentNode = currentNode.next;
      i++;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let i = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (i === idx) {
        currentNode.val = val;
      }
      currentNode = currentNode.next;
      i++;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
