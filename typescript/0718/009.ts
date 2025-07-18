// 아래처럼 직접 undefined를 할당할 수 있습니다.
// 그렇지만 이렇게 하는 경우는 극히 드뭅니다.
let undefinedValue: undefined = undefined;
console.log(undefinedValue);

// 아래처럼 string에 아무 값도 넣지 않으면
// js처럼 undefined가 되지 않습니다.
let stringValue: string;
// console.log(stringValue); // 오류 발생: 변수가 초기화되지 않았습니다.
// 그래서 아래처럼 초기값을 넣어주거나
let stringValue2: string = '';
console.log(stringValue2); // 빈 문자열이 출력됩니다.

// 선언한 다음 나중에 값을 할당할 수도 있습니다.
stringValue = '안녕하세요';
console.log(stringValue); // '안녕하세요'가 출력됩니다.