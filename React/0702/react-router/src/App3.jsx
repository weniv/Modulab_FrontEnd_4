import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// - **Home Page :** /
// - **Product Detail Page** : /products/:id
//     - ex) /products/1 , /products/2, /products/3, /products/4
// - **Product Detail Notice Page :** /products/:id/notice
//     - ex) /products/1/notice , /products/2/notice…
// - **Cart Page :** /cart
// - **Coupon Page :** /users/coupon
// - **Question Page :** /users/question
// - **Notice Page :** /users/notice
// - **User Page :** /users

function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/products/1'>ProductDetail1</Link></li>
                    <li><Link to='/products/2'>ProductDetail2</Link></li>
                    <li><Link to='/products/3/notice'>ProductDetail3Notice</Link></li>
                    <li><Link to='/users'>Users</Link></li>
                    <li><Link to='/users/coupon'>Coupon</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route to='/' element={<Home />} />
                <Route to='/products/:id' element={<ProductDetailPage />} />
                <Route to='/products/:id/notice' element={<ProductDetailNoticePage />} />
                <Route to='/cart' element={<Cart />} />
                <Route to='/users' element={<Home />} >
                    <Route index element={<Notice />} />
                    <Route path="/coupon" element={<Coupon />} />
                    <Route path="/question" element={<Question />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}