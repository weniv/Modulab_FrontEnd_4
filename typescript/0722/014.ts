// Partial이든 Pick이든 만약 type이 너무 길어지면 어떤 것을 pick해야하는데 그게 새로운 타입을 정의하는 만큼 길어질 수도 있습니다.
// 예를 들어 Human이라는 타입이 100개의 속성을 가지고 있고, 그 중 98개 필요하다면, Pick을 통해서 98개를 정의하는 것이 맞을까요?
// 그래서 Omit이라고 하는 것이 있습니다.

type Author = {
    id: number;
    name: string;
    age: number;
    password: string;
    birth: string;
    phone: string;
    email: string;
}

type omitAuthor = Omit<Author, 'password' | 'birth'>;

const author: omitAuthor = {
    id: 1,
    name: '홍길동',
    age: 30,
    phone: '010-1234-5678',
    email: 'honggildong@example.com'
}

console.log(author);