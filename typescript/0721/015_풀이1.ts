// https://dev.wenivops.co.kr/services/fastapi-crud/1/product
// 아래 데이터를 처리할 수 있는 변수, 클래스 메서드를 만들어 주세요.
// type과 interface를 사용해주세요.


// Q: 그냥 interface안에 id를 number | string로 해주면 안되나요?
// A: 물론 그렇게 하셔도 됩니다. 
// 유니온 타입으로 여러개 묶이는 경우, 복잡한 객체 타입이면 type으로 별도로 빼기도 합니다.
type ProductId = number | string;

interface Product {
  id: ProductId;
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

interface ProductInfo {
  getAllProducts(): Product[];
  getProductById(id: ProductId): Product | undefined;
}

const productInfo: ProductInfo = {
  getAllProducts: () => products,
  getProductById: (id) => products.find(product => product.id === id)
};

const products: Product[] = [
  {
    "id": 1,
    "productName": "Developer Gary's bug-catching metal keyring",
    "price": 12500,
    "stockCount": 100,
    "thumbnailImg": "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/img/1/thumbnailImg.jpg",
    "option": [],
    "discountRate": 0,
    "shippingFee": 1500,
    "detailInfoImage": [
      "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/detail/2/detail1.png",
      "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/detail/2/detail2.png"
    ],
    "viewCount": 0,
    "pubDate": "2022-02-28",
    "modDate": "2022-02-28"
  },
  {
    "id": 2,
    "productName": "U-dangtangtang licat's Laboratory Sticker Pack",
    "price": 3500,
    "stockCount": 1000,
    "thumbnailImg": "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/img/2/thumbnailImg.jpg",
    "option": [],
    "discountRate": 0,
    "shippingFee": 1500,
    "detailInfoImage": [
      "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/detail/2/detail1.png",
      "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/detail/2/detail2.png"
    ],
    "viewCount": 0,
    "pubDate": "2022-02-28",
    "modDate": "2022-02-28"
  },
  {
    "id": 3,
    "productName": "Deep Learning Developer Lap Blanket",
    "price": 17500,
    "stockCount": 0,
    "thumbnailImg": "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/img/3/thumbnailImg.jpg",
    "option": [],
    "discountRate": 0,
    "shippingFee": 1500,
    "detailInfoImage": [
      "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/detail/3/detail1.png",
      "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/detail/3/detail2.png",
      "https://dev.wenivops.co.kr/services/fastapi-crud/asset/products/detail/3/detail3.png"
    ],
    "viewCount": 0,
    "pubDate": "2022-02-28",
    "modDate": "2022-02-28"
  }
];

console.log(productInfo.getAllProducts())
console.log(productInfo.getProductById(1));