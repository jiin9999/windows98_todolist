import React, { useState } from 'react';
import Login from './components/Login';
import IconSet from './components/IconSet';
import Footer from './components/Footer';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';

function App(): JSX.Element {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    return (
        <Provider store={store}>
            {isLogin ? <IconSet /> : <Login setIsLogin={setIsLogin} />}
            <Footer />
        </Provider>
    );
}

export default App;
