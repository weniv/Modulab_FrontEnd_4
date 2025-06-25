import ProductItem from './ProductItem';



function Main() {

    const products = [
        {
            "id": 5,
            "name": "개발자 금속 키링(버그를 Java라)",
            "info": "버그를 Java라 버그잡는 개리씨 키링",
            "image": "http://api.wenivops.co.kr/services/open-market/media/products/2025/05/08/img_4.png",
            "price": 90000,
            "shipping_method": "PARCEL",
            "shipping_fee": 3000,
            "stock": 1
        },
        {
            "id": 4,
            "name": "개발자 스티커 팩",
            "info": "우당탕탕 라이캣의 실험실 스티커 팩",
            "image": "http://api.wenivops.co.kr/services/open-market/media/products/2025/05/08/img_3.png",
            "price": 8000,
            "shipping_method": "DELIVERY",
            "shipping_fee": 1500,
            "stock": 30
        },
        {
            "id": 3,
            "name": "딥러닝 무릎 담요",
            "info": "딥러닝 개발자 무릎 담요",
            "image": "http://api.wenivops.co.kr/services/open-market/media/products/2025/05/08/img_2.png",
            "price": 180000,
            "shipping_method": "PARCEL",
            "shipping_fee": 2000,
            "stock": 199
        },
        {
            "id": 2,
            "name": "개발자 금속 키링(커피)",
            "info": "네 개발잡니다 개발자 금속 키링",
            "image": "http://api.wenivops.co.kr/services/open-market/media/products/2025/05/08/img_1.png",
            "price": 250000,
            "shipping_method": "PARCEL",
            "shipping_fee": 2500,
            "stock": 100
        },
        {
            "id": 1,
            "name": "개발자 노트북 파우치",
            "info": "Hack Your Life 개발자 노트북 파우치",
            "image": "http://api.wenivops.co.kr/services/open-market/media/products/2025/05/08/img.png",
            "price": 1200000,
            "shipping_method": "PARCEL",
            "shipping_fee": 50000,
            "stock": 50
        }
    ];
    
  return (
    <main>
      <h2>상품 목록</h2>
      <div>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div>
        {[
          <p>hello1</p>,
          <p>hello2</p>,
          <p>hello3</p>,
          <p>hello4</p>,
          <p>hello5</p>,
          <p>hello6</p>,
          ]}
      </div>
    </main>
  );
}

export default Main;