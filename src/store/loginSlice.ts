import { createSlice } from '@reduxjs/toolkit';

type LoginState = boolean;

const initialState: LoginState = false;

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsLogin: (state, action) => action.payload,
    },
});

export const { setIsLogin } = loginSlice.actions;

export default loginSlice.reducer;
