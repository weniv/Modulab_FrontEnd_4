interface Cat<T> {
    name: T;
    age: number;
}
 
interface Licat<U> extends Cat<string> {
    hp: number;
    mp: U;
}
 
// mp를 number 타입으로 지정
const licat: Licat<number> = {
    name: "licat",
    age: 3,
    hp: 100,
    mp: 50
};
 
// mp를 string 타입으로 지정
const licat_bot: Licat<string> = {
    name: "licat_bot",
    age: 3,
    hp: 100,
    mp: "high"
};