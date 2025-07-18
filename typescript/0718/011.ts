let vAny: any = 123;
let vUnknown: unknown = 123;

console.log(vAny); // 123이 출력됩니다.
console.log(vUnknown); // 123이 출력됩니다.

let s1: string = vAny; // any는 어떤 타입에도 할당할 수 있습니다.
console.log(s1); // 123이 출력됩니다.

// 아래 코드는 애러가 납니다!
// let s2: string = vUnknown; // unknown은 어떤 타입에도 할당할 수 있지만, 타입을 지정하지 않으면 오류가 발생합니다.
// console.log(s2); // 오류 발생: 'unknown' 타입은 'string' 타입에 할당할 수 없습니다.

// 아래 코드는 애러가 나지 않습니다!
let s3: unknown = vUnknown; // unknown은 어떤 타입에도 할당할 수 있습니다.
console.log(s3); // 123이 출력됩니다.