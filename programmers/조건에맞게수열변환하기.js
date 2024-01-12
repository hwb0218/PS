function solution(arr) {
  let answer = 0;
  let temp = arr;

  while (true) {
    const mappedArr = temp.map((el) => {
      if (el >= 50 && el & 1 === 0) {
          return el / 2; 
      } else if(el < 50 && el & 1 === 1) {
          return el * 2 + 1;
      }
      return el;
    });
    
    const isDifferentValue = temp.some((el, i) => el !== mappedArr[i]);
    
    console.log(isDifferentValue);

    if (!isDifferentValue) {
      break;
    }

    answer++;
    temp = mappedArr;
  }

  return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98]));