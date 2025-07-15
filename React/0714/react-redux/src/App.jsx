import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react"

const UserContext = createContext();

const initUserData = {
    name: '한재현',
    email: 'test@test.com',
    themeData: {
        theme: 'light',
        fontSize: 16,
    },
    cart: {
        items: [],
        totalPrice: 0
    }
};


export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState(initUserData);

    const updateCartTotal = (newTotal) => {
        setUserData((prev) => {
            return {
                ...prev,
                cart: {
                    ...prev.cart,
                    totalPrice: newTotal
                }
            }
        })
    }

    return (
        <UserContext value={{ userData, updateCartTotal }}>
            {children}
        </UserContext>
    );
}


const CartTotal = () => {
    console.log('CartTotal 랜더링');

    const { userData } = useContext(UserContext);
    return <div>총액 : {userData.cart.totalPrice}</div>
}

const UserName = () => {
    console.log('UserName 랜더링');


    const { userData } = useContext(UserContext);

    return <div>사용자: {userData.name}</div>
}

const UpdateCart = () => {
    console.log('UpdateCart 랜더링');

    const { updateCartTotal } = useContext(UserContext);

    return (
        <button onClick={() => updateCartTotal(Math.random() * 1000)}>장바구니 업데이트</button>
    )
}


function App() {

    return (
        <UserProvider>
            <CartTotal />
            <UserName />
            <UpdateCart />
        </UserProvider>
    )
}

export default App
