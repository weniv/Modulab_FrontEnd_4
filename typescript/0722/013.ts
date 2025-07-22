// 앞서 본 Partial 타입에 문제를 해결하기 위해
// Pick이라는 유틸리티 타입을 사용합니다.
// Pick은 타입에서 특정 프로퍼티만 선택할 수 있게 해줍니다.

type Author = {
    id: number;
    name: string;
    age: number;
    password: string;
    birth: string;
    phone: string;
    email: string;
}

type PickedAuthor = Pick<Author, 'id' | 'name'>;

const author: PickedAuthor = {
    id: 1,
    name: '홍길동'
}

const author2: PickedAuthor = {
    id: 2,
    name: '이순신',
    // age: 40 // error! 'age'는 선택된 프로퍼티가 아닙니다.
}

console.log(author);
console.log(author2);