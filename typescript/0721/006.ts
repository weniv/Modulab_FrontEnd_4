// 인터섹션 예제
type A = {
    name: string;
    age: number;
}

type B = {
    address: string;
    phone: string;
};

type C = A & B; // C는 A와 B의 모든 속성을 가집니다.

// let person: C = {
//     name: 'John',
//     age: 30,
//     address: '123 Main St'
// };

// console.log(c);

let person: C = {
    name: 'John',
    age: 30,
    address: '123 Main St',
    phone: '123-456-7890'
};

console.log(person);