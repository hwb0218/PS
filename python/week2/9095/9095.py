from sys import stdin

stdin = open('/Users/hanwoo/Documents/ps/python/week2/9095/input.txt', 'r')
read = stdin.readline

def func(n):
  if n == 1:
    return 1
  if n == 2:
    return 2
  if n == 3:
    return 4
  
  return func(n - 1) + func(n - 2) + func(n - 3)

for _ in range(int(read())):
  n = int(read())
  print(func(n))