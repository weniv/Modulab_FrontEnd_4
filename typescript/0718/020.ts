// typescript에 tuple이 애러가 나는 경우

const tuple: [number, number, string] = [1, 2, 'three'];
console.log(tuple);
console.log(typeof tuple);

// 애러가 나는 경우 1
// tuple[1] = 'two'; // 두 번째 요소를 문자열로 변경
// console.log(tuple); // 타입 오류 발생, 두 번째 요소는 number여야 함

// 애러가 나는 경우 2
// tuple[3] = 4; // 네 번째 요소 추가
// console.log(tuple); // 타입 오류 발생, 튜플은 고정된 길이

////////////////////////

// tyscript의 튜플은 실제로는 배열로 취급을 하기 때문에 push가 됩니다. 때문에 만약 길이를 고정해야 하는 경우에는 아래와 같은 방법을 사용할 수 있습니다.
// // readonly 튜플 사용
// const readonlyTuple: readonly [number, number, string] = [1, 2, 'three'];
// // readonlyTuple.push('four'); // 에러 발생!

// // 또는 as const 사용
// const constTuple = [1, 2, 'three'] as const;
// // constTuple.push('four'); // 에러 발생!