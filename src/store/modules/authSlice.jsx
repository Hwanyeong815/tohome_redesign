import { createSlice } from '@reduxjs/toolkit';

const memberData = [
    {
        id: 1,
        name: '홍길동',
        email: '',
        password: 'a1234',
        tel: '010-0000-0000',
        userid: 'hong1234',
        addr: '서울시 관악구',
    },
];

const initialState = {
    members: memberData,
    authed: false,
    user: null,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {},
        logout: (state, action) => {},
        signup: (state, action) => {},
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
