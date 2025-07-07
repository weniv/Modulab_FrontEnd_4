import { useState, useEffect, useMemo } from "react";
import './products.css';

const App = () => {
    // 서버로 부터 받아오는 데이터를 관리
    const [products, setProducts] = useState([]);

    // 카테고리 선택 데이터 관리
    const [selectedCategory, setSelectedCategory] = useState('all');

    // 정렬의 선택 여부를 관리
    const [sortByRating, setSortByRating] = useState(false);

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


    // 카테고리의 선택 결과를 저장하는 useMemo
    const filteredByCategory = useMemo(() => {
        console.log('카테고리 선택!');
        if (selectedCategory === 'all') {
            return products
        }

        return products.filter((product) => product.category === selectedCategory);
    }, [products, selectedCategory]);


    // 카테고리 결과를 정렬
    const sortedProducts = useMemo(() => {
        // 원본 배열의 변경을 방지
        const productToSort = [...filteredByCategory];

        // 정렬을 선택했습니다.
        if (sortByRating) {
            return productToSort.sort((a, b) => {
                return b.rating - a.rating;
            });
        }

        return productToSort

    }, [filteredByCategory, sortByRating]);


    return (
        <section className="product-container">
            <h1>상품 목록</h1>
            <div className="product-controls">
                <select
                    className="product-select"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    value={selectedCategory}
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
                        checked={sortByRating}
                        onChange={(e) => setSortByRating(e.target.checked)}
                    />
                    평점순 정렬
                </label>
            </div>

            <ul className="product-list">
                {sortedProducts.map(product => (
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
        </section >
    )
}

export default App;