import { useSelector, useDispatch } from 'react-redux';
import Login from './components/Login';
import IconSet from './components/IconSet';
import Footer from './components/Footer';
import './App.css';
import { setIsLogin } from './store/loginSlice';
import { RootState } from './store/store'; // RootState import

export default function App() {
    const isLogin = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    const handleLogin = (loggedIn: boolean) => {
        dispatch(setIsLogin(loggedIn));
    };

    return (
        <>
            {isLogin ? <IconSet /> : <Login setIsLogin={handleLogin} />}
            <Footer />
        </>
    );
}
