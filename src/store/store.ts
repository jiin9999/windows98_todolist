import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import loginReducer from './loginSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
