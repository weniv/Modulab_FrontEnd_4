// typescript에서 unknown 타입은 모든 타입의 상위 타입으로, 어떤 값이든 할당할 수 있지만, typescript가 탄생하게 된 배경에 비추어 보았을 때 명확하게 타입을 지정하려는 의도에 반하는 타입입니다.

let value: unknown = 123;

console.log(value); // 123이 출력됩니다.
value = '안녕하세요';
console.log(value); // '안녕하세요'가 출력됩니다.
value = true;
console.log(value); // true가 출력됩니다;