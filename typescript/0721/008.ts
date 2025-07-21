// 다른 언어에도 inerface가 있습니다.
// 다른 언어에서도 interface는 구조를 정의하는데 사용합니다.
// 앞에 type하고 유사합니다. 다만 차이는 제가 뒤에서 설명 드리도록 하겠습니다.

interface Human {
    name: string;
    age: number;
    address?: string;
}

const person: Human = {
    name: 'jun',
    age: 30
    // address는 선택적 속성입니다.
};