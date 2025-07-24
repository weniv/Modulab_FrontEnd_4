import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Header from './components/Header';
import { useContext } from 'react';
import { useAuthContext } from './hooks/useAuthContext';


function App() {

    const { user, isAuthReady } = useAuthContext();

    return (
        <div className='App'>
            {isAuthReady ?
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={user ? <Home /> : <Navigate replace={true} to={'/login'} />}></Route>
                        <Route path='/login' element={!user ? <Login /> : <Navigate to={'/'} replace={true} />}></Route>
                        <Route path='/signup' element={!user ? <Signup /> : <Navigate to={'/'} replace={true} />}></Route>
                    </Routes>
                </BrowserRouter>
                : 'loading...'}
        </div>
    )
}

export default App
