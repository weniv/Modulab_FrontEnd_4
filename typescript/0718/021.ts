// 함수는 지금 챕터에서 다루지 않습니다.
// void 타입을 알아보고 있는 상태입니다.
// void 타입은 함수가 아무것도 반환하지 않을 때 사용합니다.
// 실제로 console.log로 출력해보면 undefined가 출력됩니다.
function warnUser(): void {
    console.log('This is my warning message');
}

console.log(warnUser());