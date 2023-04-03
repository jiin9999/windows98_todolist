import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface UserState {
    userName: string;
}

const initialState: UserState = {
    userName: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
    },
});

export const { setUserName } = userSlice.actions;
export const selectUserName = (state: RootState) => state.user.userName;
export default userSlice.reducer;
