// 다음 요구사항에 맞는 제네릭 함수를 작성해보세요.

// 1. 배열을 입력받아 첫 번째 요소를 반환하는 함수 getFirstElement<T>를 만드세요.
// 2. 배열이 비어있으면 undefined 반환해야 합니다.
// 3. 모든 타입의 배열에 대해 동작해야 합니다.

function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

// 타입 추론
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(['a', 'b', 'c'])); // 'a'

// 명시적 타입 지정
console.log(getFirstElement<number>([1, 2, 3])); // 1
console.log(getFirstElement<string>(['a', 'b', 'c'])); // 'a'