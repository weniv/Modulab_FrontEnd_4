interface A {
    name: string;
    age: number;
}

interface B {
    address: string;
}

interface Human extends A, B {
    height: number;
    weight?: number; // 선택적 속성
}

const person: Human = {
    name: 'jun',
    age: 30,
    address: 'Seoul',
    height: 175
    // weight는 선택적 속성입니다.
};

console.log(person);