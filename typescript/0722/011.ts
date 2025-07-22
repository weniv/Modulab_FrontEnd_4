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

const author: partialAuthor = {}

console.log(author);