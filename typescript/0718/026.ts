// 추론 결과 key는 string
// const obj = {
//   key: 'test',
// };

// 명시적 타입 지정
// const obj: { key: string } = {
//   key: 'test',
// };

const obj: {
    one: string,
    two: number,
    three: boolean
} = {
    one: 'test',
    two: 123,
    three: true
};

// 자바스크립트라면 아래와 같이 정의했겠죠.
// const obj = {
//   one: 'test',
//   two: 123,
//   three: true
// };

console.log(obj)
console.log(obj.one)  // 'test'