function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = 0; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
  }
  // swap
  let temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
}

// TODO: 기억 잘 안날때 작성 순서
// let temp = arr[i]; 3
// arr[i] = arr[minIndex]; 1
// arr[minIndex] = temp; 2