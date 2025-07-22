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

// 사용자 데이터 형식 정의
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

// 모든 사용자 데이터를 가져오는 함수
async function fetchAllUsers(): Promise<User[]> {
    const response = await fetch('https://dev.wenivops.co.kr/services/fastapi-crud/1/user');
    const data: User[] = await response.json();
    return data;
}

// 모든 사용자의 이름과 이메일을 출력하는 함수
async function displayUsers(): Promise<void> {
    const users = await fetchAllUsers();
    users.forEach((user, index) => {
        console.log(`${index + 1}. 이름: ${user.name}, 이메일: ${user.email}`);
    });
}

// 특정 인덱스의 사용자 이름과 이메일을 출력하는 함수
async function displayUser(userIndex: string): Promise<void> {
    const users = await fetchAllUsers();
    const user = users.find(u => u.index === userIndex);
    
    if (user) {
        console.log(`이름: ${user.name}`);
        console.log(`이메일: ${user.email}`);
    } else {
        console.log('사용자를 찾을 수 없습니다.');
    }
}

// 사용 예시
displayUsers().then(() => {
    console.log('사용자 목록 출력 완료');
});

displayUser('1').then(() => {
    console.log('특정 사용자 출력 완료');
});