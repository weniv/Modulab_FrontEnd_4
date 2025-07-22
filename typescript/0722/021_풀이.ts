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

// 상품 데이터 형식 정의
interface Product {
    id: number;
    productName: string;
    price: number;
    stockCount: number;
    thumbnailImg: string;
    option: any[];
    discountRate: number;
    shippingFee: number;
    detailInfoImage: string[];
    viewCount: number;
    pubDate: string;
    modDate: string;
}

// 모든 상품 데이터를 가져오는 함수
async function fetchAllProducts(): Promise<Product[]> {
    const response = await fetch('https://dev.wenivops.co.kr/services/fastapi-crud/1/product');
    const data: Product[] = await response.json();
    return data;
}

// 모든 상품의 이름과 가격을 출력하는 함수
async function displayProducts(): Promise<void> {
    const products = await fetchAllProducts();
    
    products.forEach((product, index) => {
        console.log(`${index + 1}. 상품명: ${product.productName}, 가격: ${product.price}원`);
    });
}

// 특정 ID의 상품 이름과 가격을 출력하는 함수
async function displayProduct(productId: number): Promise<void> {
    const products = await fetchAllProducts();
    const product = products.find(p => p.id === productId);
    
    if (product) {
        console.log(`상품명: ${product.productName}`);
        console.log(`가격: ${product.price}원`);
    } else {
        console.log('상품을 찾을 수 없습니다.');
    }
}

// 사용 예시
displayProducts().then(() => {
    console.log('상품 목록 출력 완료');
});

displayProduct(1).then(() => {
    console.log('특정 상품 출력 완료');
});