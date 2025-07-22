// 맵드 타입(Mapped Types)은 기존 타입의 모든 속성을 새로운 규칙에 따라 변환하여 새로운 타입을 만드는 방법입니다. 마치 배열의 map 함수처럼, 타입의 각 속성을 다른 형태로 변환할 수 있습니다.

interface User {
    name: string;
    age: number;
    email: string;
}

type Optional<T> = {
    [P in keyof T as `hello${string & P}`]: string;
}

type OptionalUser = Optional<User>;

// 이러한 형태가 된 것입니다.
// {
//     helloname: string;
//     helloage: string;
//     helloemail: string;
// }

const user1: OptionalUser = {
    helloname: '홍길동',
    helloage: '30',
    helloemail: 'honggildong@example.com'
};

console.log(user1);