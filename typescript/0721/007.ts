// 인터섹션 예제
type A = {
    name: string;
    age: number;
}

type B = {
    address: string;
    phone: string;
};

type C = A | B;

///////////////////////////////

let person: C = {
    name: 'John',
    age: 30,
    address: '123 Main St',
    phone: '123-456-7890'
};

console.log(person);

///////////////////////////////

// let person2: C = {
//     name: 'John',
//     age: 30,
//     hello: 'world'
// };

// console.log(person2);

///////////////////////////////

let person3: C = {
    name: 'John',
    age: 30
};

console.log(person3);

///////////////////////////////
// error!

// let person4: C = {
//     name: 'John'
// };

// console.log(person4);