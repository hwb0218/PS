t = int(input())

for i in range(t):
    s = list(input())
    stack = []
    flag = False

    for char in s:
        if char == "(":
            stack.append("(")
        if char == ")":
            if stack:
                stack.pop()
            else:
                flag = True
                break

    if flag or stack:
        print("NO")
    elif not flag and not stack:
        print("YES")
