// 사용자 정보를 처리하는 함수
function processUser(user: { name: string, age: number, email: string }) {
  // 타입이 명확하므로 IDE에서 자동완성 제공
  console.log(`이름: ${user.name}`);
  console.log(`나이: ${user.age}`);
  console.log(`이메일: ${user.email}`);
  
  // 타입 오류 - 존재하지 않는 속성
  // console.log(user.phone); // 오류 발생
}

// 올바른 사용
processUser({
  name: "김개발",
  age: 30,
  email: "dev@example.com"
});
 
// 잘못된 사용 - 타입 오류 발생
processUser({
  name: "김개발",
  age: "서른", // 오류: string은 number에 할당할 수 없음
  email: "dev@example.com"
});