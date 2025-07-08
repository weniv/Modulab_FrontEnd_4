import { createContext, useState, useContext } from "react"

const CartContext = createContext();

// 컨텍스트에 접근 해주는 커스텀 훅
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    console.log(cart);

    // 데이터 추가하기
    const addToCart = (product) => {
        setCart((prevCart) => {

            // 카트에 동일한 이이템이 있는지 확인
            const exist = prevCart.find((item) => item.id === product.id);
            // 카트에 이미 동일한 아이템이 있다면 수량(count)을 1 증가 하기
            if (exist) {
                // 기존에 있던 데이터의 동일한 상품을 찾아서 count 값을 1 증가
                return prevCart.map((item) => item.id === exist.id ? { ...item, count: item.count + 1 } : item)
            }

            // 카트에 데이터 추가
            return [...prevCart, { ...product, count: 1 }];
        });
    }

    // 데이터 제거하기
    const removeFromCart = (productId) => {

        // 내가 제거할 아이템과 일치하지 않는 아이템 데이터만 모아서 반환해버리기
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }

    // 카운트의 총합을 구하는 함수
    const getTotalCount = () => {
        //  [{},{},{},{},{}]
        return cart.reduce((totalCount, item) => totalCount + item.count, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalCount }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext, useCart };