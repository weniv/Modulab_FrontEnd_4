// 비동기 프로그래밍 출력 문제: 아래 API를 사용하여 사용자 데이터를 가져오고 출력하는 TypeScript 코드를 작성하세요. 예시 코드를 참고하세요.

// API URL: https://dev.wenivops.co.kr/services/fastapi-crud/1/user
// 데이터 형식
// [
//     {
//     "_id": "c1ef8c20-e32d-4999-A9e5-d4ae30f27c7f",
//     "index": "1",
//     "name": "allosa",
//     "email": "user-t513r6o@Sed.biz",
//     "phone": "010-55176-69215",
//     "country": "korea",
//     "address": "jeju Hallasan 44-6",
//     "job": "designer",
//     "int": "42"
//     }
// ]

// TypeScript 코드 예시
interface User {
    _id: string;
    index: string;
    name: string;
    email: string;
    phone: string;
    country: string;
    address: string;
    job: string;
    int: string;
}

async function fetchAllUsers(): Promise<User[]>{
    const res = await fetch('https://dev.wenivops.co.kr/services/fastapi-crud/1/user');
    const data: User[] = await res.json();
    return data;
}

async function print(): Promise<void> {
    const users = await fetchAllUsers();
    console.log(users);
}

print().then(() => {
    console.log('사용자 데이터 출력 완료');
}).catch((error) => {
    console.error('사용자 데이터 출력 중 오류 발생:', error);
});
