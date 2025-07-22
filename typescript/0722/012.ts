// 이렇게 하면 좀 불편한데요!?
// 왜냐하면 author에서 몇 개를 선택적으로 넣는지 알 수가 없기 때문에
// 견고한 코드같지 않습니다.

type Author = {
    id: number;
    name: string;
    age: number;
    password: string;
    birth: string;
    phone: string;
    email: string;
}

type partialAuthor = Partial<Author>;

const author: partialAuthor = {
    id: 1,
    names: '홍길동' // error!
}

console.log(author);