import { useCart } from "./CartProvider";

function Cart() {

    const { cart, removeFromCart } = useCart();


    return (
        <div>
            <h2>장바구니</h2>

            {
                cart.length === 0 ?
                    <p>장바구니가 비었습니다.</p> :
                    <ul>
                        {cart.map(item => <li key={item.id}>{item.name} - 수량: {item.count} <button onClick={() => removeFromCart(item.id)}>제거</button></li>)}
                    </ul>
            }

        </div>
    );
}

export default Cart;