import { useCart } from "./CartProvider";


function Header() {

    const { getTotalCount } = useCart();

    return (
        <>
            <h1>쇼핑몰</h1>

            <strong>카트에 있는 상품 개수: {getTotalCount()}</strong>
        </>
    )
}

export default Header;