# 계수 정렬
def count_sort(arr, k):
  hashtable = [0] * (k + 1)

  for num in arr:
    if num <= k:
      hashtable[num] = 1
  return hashtable

def sol(arr, target):
  hashtable = count_sort(arr, target) 

  for num in arr:
    print(num)
    complement = target - num 
    # if)
    # 6 - 6 = 0 안됨 0으로는 조건에 해당하는 조합을 찾을 수 없음.
    print("complement", complement ,"hashtable[complement] >> ", hashtable[complement])
    if ( complement != num and complement > 0 and complement <= target and hashtable[complement] == 1 ):
      print(complement)
      return True
  return False

print(sol([1,2,3,4,8], 6));