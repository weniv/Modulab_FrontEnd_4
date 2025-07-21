// type과 interface의 차이점은 무엇인가요?
// 1. 확장 스타일
type A = {
    name: string;
    age: number;
}

interface B {
    name: string;
    age: number;
}

type AA = A & {
    address: string;
}

interface BB extends B {
    address: string;
}

// 2. 선언 병합
// type은 재선언이 안됩니다.
// interface는 같은 이름으로 여러 번 선언할 수 있고, 이 경우 TypeScript는 이를 병합합니다.

// 3. 구현
// type: 변수로 사용하는 것을 주로 사용합니다.
// interface: 클래스의 형태를 정의할 때 주로 사용합니다.
