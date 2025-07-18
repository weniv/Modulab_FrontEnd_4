// npm install -g typescript tsx ts-node
// node 002.ts로 실행
// tsx 002.ts로 실행
// 수업에서는 ts-node를 사용하겠습니다.
// ts-node 002.ts로 실행

function greet(name: string): string {
    return `안녕하세요, ${name}님!`;
}

const message = greet("타입스크립트");
console.log(message);