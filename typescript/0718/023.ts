// 1. 가장 기본적인 방식
// function add(x: number, y: number): number {
//     return x + y;
// }
 
// 2. 화살표 함수 - 타입 추론 활용
// const add = (x: number, y: number) => x + y;
// 반환 타입을 명시하지 않아도 타입스크립트가 알아서 추론합니다
 
// 3. 타입 별칭을 사용할 때 (재사용이 필요한 경우)
type Calculator = (x: number, y: number) => number;
 
const add: Calculator = (x, y) => x + y;
const multiply: Calculator = (x, y) => x * y;

console.log(add(1, 2)); // 3
console.log(multiply(2, 3)); // 6