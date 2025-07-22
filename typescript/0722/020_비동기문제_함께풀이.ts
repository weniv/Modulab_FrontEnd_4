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
interface Product {
    id: number;
    productName: string;
    price: number;
    stockCount: number;
    thumbnailImg: string;
    option: string[];
    discountRate: number;
    shippingFee: number;
    detailInfoImage: string[];
    viewCount: number;
    pubDate: string;
    modDate: string;
}

async function fetchAllProducts(): Promise<Product[]> {
    const res = await fetch('https://dev.wenivops.co.kr/services/fastapi-crud/1/product');
    const data: Product[] = await res.json();
    return data;
}

async function print(){
    const products = await fetchAllProducts();
    console.log(products);
}

print()


