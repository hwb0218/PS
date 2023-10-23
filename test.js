/* class Queue {
  aStack = [];
  bStack = [];

  enqueue(el) {
    this.aStack.push(el);
  }

  dequeue() {
    if (!this.bStack.length) {
      while (this.aStack.length) {
        this.bStack.push(this.aStack.pop());
      }
    }
    return this.bStack.pop();
  }
}

const run = new Queue();
run.enqueue(1);
run.enqueue(2);
run.enqueue(3);
run.enqueue(4);
console.log(run.dequeue());
 */
class Stack {
  q1 = [];
  q2 = [];

  push(el) {
    this.q1.push(el);
  }

  pop() {
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    const temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return this.q2.shift();
  }
}

const run = new Stack();
run.push(1);
run.push(2);
run.push(3);

console.log(run.pop());
console.log(run.pop());
console.log(run.pop());
