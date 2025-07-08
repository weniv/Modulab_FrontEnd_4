import ProductList from "./ProductList"
import Cart from "./Cart"
import { CartProvider } from "./CartProvider"
import Header from "./Header"

function App() {

    return (
        <>
            <CartProvider>
                <Header />
                <ProductList />
                <Cart />
            </CartProvider>
        </>
    )
}

export default App
