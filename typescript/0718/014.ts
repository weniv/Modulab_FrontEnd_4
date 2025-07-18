// 객체 형태로된 모든 타입을 할당 가능합니다. 이러한 이유로 특정한 대상을 가르키지는 못하기 때문에 타입의 안정성을 보장하지 못합니다. 때문에 사용이 권장되지 않는 타입입니다.

function logFunc(obj: object) {
    console.log(obj);
}

logFunc({ name: "licat", age: 20 });    // 객체 전달
logFunc([1, 2, 3]);                    // 배열 전달
logFunc(() => console.log("Hello"));   // 함수 전달
// logFunc(null);   // null 전달, error 발생

// javascript의 null은 typeof로 확인하면 "object"로 나옵니다. 그래서 TypeScript에서도 null이 object로 취급이 되는줄 아시는 분이 있으신데, TypeScript에서는 null은 object로 취급이 되진 않습니다. null로 취급이 됩니다. 앞서 배운 것처럼 `:null`로 null 타입을 지정할 수 있습니다.

let unll: null = null; // null 타입
console.log(typeof unll); // Outputs: object이지만 null 타입으로 취급됩니다.