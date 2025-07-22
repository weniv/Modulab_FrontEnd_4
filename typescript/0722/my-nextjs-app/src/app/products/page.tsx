// 서버 컴포넌트 - 기본값
// 데이터 페칭을 서버에서 수행

interface Product {
  id: number;
  title: string;
  price: number;
}

async function getProducts(): Promise<Product[]> {
  // 실제 API 호출 시뮬레이션
  await new Promise(resolve => setTimeout(resolve, 1000));

  return [
    { id: 1, title: '노트북', price: 1200000 },
    { id: 2, title: '마우스', price: 50000 },
    { id: 3, title: '키보드', price: 120000 },
  ];
}

export default async function Products() {
  const products = await getProducts();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">서버 컴포넌트 예제</h1>
        <div className="grid gap-4">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-600">₩{product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}