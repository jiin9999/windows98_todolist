import { useSelector, useDispatch } from 'react-redux';
import Login from './components/Login';
import IconSet from './components/IconSet';
import Footer from './components/Footer';
import './App.css';
import { setIsLogin } from './store/loginSlice';

type LoginState = { login: { isLogin: boolean } }

function App(): JSX.Element {
    const isLogin = useSelector((state: LoginState) => state.login.isLogin);
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
