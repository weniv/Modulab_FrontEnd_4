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
    id: number;
    name: string;
    email: string;
}

async function fetchUserData(userId: number): Promise<User> {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const data = await response.json();
    return data;
}

async function displayUser(userId: number): Promise<void> {
    try {
        const user = await fetchUserData(userId);
        console.log(`User ID: ${user.id}`);
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// 사용 예시
displayUser(1).then(() => {
    console.log('User data displayed successfully.');
}).catch((error) => {
    console.error('Error in displaying user data:', error);
});