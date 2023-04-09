import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
    isLogin: boolean;
}

const initialState: LoginState = {
    isLogin: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsLogin: (state, action) => {
            state.isLogin = action.payload;
        },
    },
});

export const { setIsLogin } = loginSlice.actions;

export default loginSlice.reducer;
