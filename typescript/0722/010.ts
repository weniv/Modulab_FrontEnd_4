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
    name: '홍길동'
}

console.log(author);