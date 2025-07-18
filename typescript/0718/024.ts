// 오버라이딩: 부모 클래스의 메서드를 자식 클래스에서 재정의하는 것
// 오버로딩: 같은 이름의 메서드를 여러 번 정의하는 것(매개변수의 타입이나 개수가 다를 때 사용)

// function greet(name: string): string{
//     return '난 스트링으로 입력받음!';
// }
// function greet(age: number): string{
//     return '난 넘버로 입력받음!';
// }

// console.log(greet("TypeScript"));

function greet(name: string): string;
function greet(age: number): string;
function greet(value: string | number): string {
    if (typeof value === "string") {
        return `Hello, ${value}!`;
    } else {
        return `You are ${value} years old!`;
    }
}
 
console.log(greet("TypeScript")); // "Hello, TypeScript!"
console.log(greet(25));          // "You are 25 years old!"
