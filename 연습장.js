// https://www.acmicpc.net/problem/2512

const numberList = [120, 110, 140, 150];

const result = numberList.reduce((acc, cur) => {
  return acc + cur;
}, 0);
// 최대 값 130
console.log(result / 4);

// 최소 값 121.25
console.log(485 / 4);

110, 120, 140, 150;
