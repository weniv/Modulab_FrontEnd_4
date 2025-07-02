import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

function App() {
    return (
        <BrowserRouter>
            <Link to="/"> home </Link>
            <Link to="/one"> one </Link>
            <Link to="/two"> two </Link>
            <Link to="/three"> three </Link>
            // search 속성 사용
            <Link to={{ pathname: '/products', search: '?category=electronics&sort=price', hash: "#the-hash" }} state={{ productId: 1111, fromPage: 'main', lastScrollPosition: 1300 }}>

                전자제품 (가격순)
            </Link>
            {/* 라우트를 감싸줍니다. */}
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/one" element={<One name="licat" />} />
                <Route path="/two" element={<Two />} />
                <Route path="/three" element={<Three />} />
                <Route path="/products" element={<Products />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

function Index() {
    return (
        <>
            <h1>hello world0</h1>
            <a href="">링크입니다.</a>
        </>
    )
}

function One({ name }) {
    return <h1>{name} world1</h1>
}

function Two() {
    return <h1>hello world2</h1>
}

function Three() {
    return <h1>hello world3</h1>
}

function Products() {
    const location = useLocation();
    console.log('location: ', location);
    const { productId, fromPage, lastScrollPosition } = location.state;
    // const searchParams = new URLSearchParams(location.search);
    // console.log('searchParams: ', searchParams);
    // console.log(searchParams.get('category'));
    // console.log(searchParams.get('sort'));

    return (
        <>
            <ul style={{ height: '2000px', backgroundColor: 'pink' }}>
                <li>아이템1</li>
                <li>아이템2</li>
                <li>아이템3</li>
            </ul>
            <div id="the-hash">hash test</div>
        </>
    )
}

export default App;