더 따뜻한 온도를 얻기 위해 며칠을 기다려야 하는지 구하는 문제

def dailyTemperatures(t):
    stack = []
    answer = [0] * len(t)
    for i, cur_temp in enumerate(t):
        while stack and cur_temp > t[stack[-1]]:
            last = stack.pop()
            answer[last] = i - last
        stack.append(i)

    return answer
