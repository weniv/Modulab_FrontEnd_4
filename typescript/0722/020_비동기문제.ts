// 비동기 프로그래밍 출력 문제: 아래 API를 사용하여 쇼핑몰 데이터를 가져오고 출력하는 TypeScript 코드를 작성하세요. 예시 코드를 참고하세요.

// API URL: https://dev.wenivops.co.kr/services/fastapi-crud/1/product
// 데이터 형식
// [
// {
// "id": 1,
// "productName": "Developer Gary's bug-catching metal keyring",
// "price": 12500,
// "stockCount": 100,
// "thumbnailImg": "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/img/1/thumbnailImg.jpg",
// "option": [],
// "discountRate": 0,
// "shippingFee": 1500,
// "detailInfoImage": [
// "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/detail/2/detail1.png",
// "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/detail/2/detail2.png"
// ],
// "viewCount": 0,
// "pubDate": "2022-02-28",
// "modDate": "2022-02-28"
// }
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