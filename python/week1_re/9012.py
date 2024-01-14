from sys import stdin

tc = int(stdin.readline())

# 풀이1
for i in range(tc):
    s = stdin.readline().rstrip()
    stack = []
    flag = False
    for char in s:
        if char == '(':
            stack.append(char)
        if char == ')':
            if stack:
                stack.pop()
            else:
                flag = True
                break
    if flag or stack:
        print('NO')
    elif not flag and not stack:
        print('YES')

# 풀이2
for i in range(tc):
    s = stdin.readline().rstrip()
    stack = []

    for char in s:
        if stack and stack[-1] == '(' and char == ')':
            stack.pop()
            continue
        stack.append(char)

    if stack:
        print('NO')
    else:
        print('YES')