let user: { name: string; age: number } = {
    name: "licat",
    age: 20
};

// 아래 문법으로 ts-node로 실행하면 애러가 발생합니다.
// 위와 같이 내부 데이터의 형태를 지정해주어야 애러가 발생하지 않습니다.
// let user: object = {
//     name: "licat",
//     age: 20
// };

console.log(user); // Outputs: { name: 'licat', age: 20 }
console.log(typeof user); // Outputs: object
// console.log(user.name); // Error: Property 'name' does not exist on type 'object'.
console.log(user["name"]); // Outputs: licat, but not type-safe
// 만약 구체적인 타입을 지정하지 않으면 아래 애러가 발생합니다.
// Element implicitly has an 'any' type because expression of type '"name"' can't be used to index type '{}'