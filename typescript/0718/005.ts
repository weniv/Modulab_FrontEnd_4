// TypeScript - 정적 타입
// tsx 004.ts로 실행하면 제대로 실행이 됩니다.
// 분명 경고가 뜨고 있는데 왜 실행이 된 것일까요?
// 이러한 경고가 발생했을 때 실행이 되지 않게 하는 옵션이 있고
// 경고가 발생해도 실행을 허용하는 옵션이 있습니다.

let userName: string = "김개발";
let userAge: number = 25;
let isActive: boolean = true;

// 다른 타입 할당 시도 - 모두 오류 발생
userName = 123; // 오류
userAge = "25"; // 오류
isActive = "yes"; // 오류

console.log(`사용자 이름: ${userName}, 나이: ${userAge}, 활성 상태: ${isActive}`);