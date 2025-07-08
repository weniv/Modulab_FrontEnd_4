import { useContext } from "react";
import { CartContext, useCart } from "./CartProvider";

function ProductList() {

    const { addToCart } = useCart();

    const products = [
        { id: 1, name: "노트북", price: 1000 },
        { id: 2, name: "스마트폰", price: 500 },
        { id: 3, name: "태블릿", price: 300 },
    ];


    return (
        <div>
            <h2>상품목록</h2>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        {item.name} - ₩{item.price} <button onClick={() => addToCart(item)}>카트에 추가</button>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default ProductList;