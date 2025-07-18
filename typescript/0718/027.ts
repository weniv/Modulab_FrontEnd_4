const obj1: {
    one: string,
    two: number,
    three: boolean
} = {
    one: 'test',
    two: 123,
    three: true
};

type Num = {
    one: string,
    two: number,
    three: boolean
}

const obj2: Num = {
    one: 'test',
    two: 123,
    three: true
};

console.log(obj1)
console.log(obj2)