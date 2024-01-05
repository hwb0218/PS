class MyQueue:

    def __init__(self):
        self.s1 = []
        self.s2 = []

    def pop(self) -> int:
        if not self.s2:
            for n in self.s1[::-1]:
                self.s2.append(n)
                self.s1.pop()
        return self.s2.pop()

    def peek(self) -> int:
        if not self.s2:
            for n in self.s1[::-1]:
                self.s2.append(n)
                self.s1.pop()
        return self.s2[-1]

    def empty(self) -> bool:
        return not self.s1 and not self.s2

    def push(self, x: int) -> None:
        self.s1.append(x)

obj = MyQueue()
obj.push(5)
obj.push(8) # [5, 8] => [8, 5]
param_2 = obj.pop()
param_3 = obj.peek()
param_4 = obj.empty()

print(param_2)
print(param_3)