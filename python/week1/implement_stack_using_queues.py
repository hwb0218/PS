from collections import deque

class MyStack:

    def __init__(self):
        self.q1 = deque()
        self.q2 = deque()

    def push(self, x: int) -> None:
        self.q1.append(x)

    def pop(self) -> int:
        while len(self.q1) > 1:
            self.q2.append(self.q1.popleft())

        popped_el = self.q1.popleft()

        self.q1, self.q2 = self.q2, self.q1

        return popped_el

    def top(self) -> int:
        if len(self.q1):
            return self.q1[len(self.q1) - 1]
        else:
            return 0

    def empty(self) -> bool:
        return len(self.q1) == 0

s = MyStack()
s.push(2)
s.push(3)
print(s.top())