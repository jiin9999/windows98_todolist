import { useSelector, useDispatch } from 'react-redux';
import Login from './components/Login';
import IconSet from './components/IconSet';
import Footer from './components/Footer';
import './App.css';
import { setIsLogin } from './store/loginSlice';

function App(): JSX.Element {
    const isLogin = useSelector((state: { login: { isLogin: boolean } }) => state.login.isLogin);
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

export default App;
