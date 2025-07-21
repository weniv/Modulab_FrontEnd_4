// 같은 스코프 안에 동일한 이름의 인터페이스가 여러 번 선언되면
// TypeScript는 이를 병합하여 하나의 인터페이스로 만듭니다.
// 다만, 가독성을 위해 동일한 이름의 인터페이스를 여러 번 선언하는 것은 권장되지 않습니다.
interface A {
    name: string;
}

interface A {
    age: number;
}

interface A {
    address: string;
}

const person: A = {
    name: 'John',
    age: 30,
    address: '123 Main St'
};

console.log(person);