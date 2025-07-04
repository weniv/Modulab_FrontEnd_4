import { useState } from "react";
import { useEffect } from "react";
import './products.css';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');

                if (!response.ok) {
                    throw new Error('네트워크 응답에 문제가 있습니다!');
                }

                const result = await response.json();
                setProducts(result);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);


    return (
        <section className="product-container">
            <h1>상품 목록</h1>
            <div className="product-controls">
                <select
                    className="product-select"
                >
                    <option value="all">전체 카테고리</option>
                    <option value="전자기기">전자기기</option>
                    <option value="의류">의류</option>
                    <option value="식품">식품</option>
                    <option value="도서">도서</option>
                </select>
                <label className="rating-toggle">
                    <input
                        type="checkbox"
                    />
                    평점순 정렬
                </label>
            </div>

            <ul className="product-list">
                {products.map(product => (
                    <li key={product.id} className="product-item">
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.category}</p>
                        </div>
                        <div className="product-price">
                            <p>{product.price.toLocaleString()}원</p>
                            <p className="product-rating">★ {product.rating}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default App;