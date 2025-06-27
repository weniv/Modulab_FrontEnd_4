function Homepage({ setIsLogin }) {
    return (
        <>
            <h1>홈페이지 화면입니다!</h1>
            <button onClick={() => setIsLogin(false)}>로그아웃</button>
        </>
    )
}

export default Homepage;