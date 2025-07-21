// 제네릭을 통한 간단한 계산기 만들기
function add<T extends number | string>(a: T, b: T): number {
    if (typeof a === 'string' || typeof b === 'string') {
        return parseFloat(a.toString()) + parseFloat(b.toString());
    }
    return Number(a) + Number(b);
}

// 사용 예시
console.log(add(10, 20));     // 30
console.log(add("10", "20")); // 30

console.log(add<number>(10, 20));     // 30
console.log(add<string>("10", "20")); // 30
