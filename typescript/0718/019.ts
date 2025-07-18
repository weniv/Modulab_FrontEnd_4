// TypeScript에서 튜플(Tuple) 타입을 사용하여 고정된 길이와 타입의 배열을 정의할 수 있습니다.

const tuple: [number, number, string] = [1, 2, 'three'];
console.log(tuple);
console.log(typeof tuple);

tuple[0] = 10; // 첫 번째 요소 변경
console.log(tuple);

tuple.push('four'); // 새로운 요소 추가
console.log(tuple);

// tuple[1] = 'two'; // 두 번째 요소를 문자열로 변경
// console.log(tuple); // 타입 오류 발생, 두 번째 요소는 number여야 함