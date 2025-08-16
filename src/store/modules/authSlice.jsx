import { createSlice } from '@reduxjs/toolkit';

const memberData = [
    {
        id: 1,
        name: '이지은',
        email: 'rere0811@Google.com',
        password: 'rere0811@',
        tel: '010-0000-0000',
        userid: 'rere0811',
        addr: ['서울시 강남구 삼성동', '123-4번길 1층'],
        phone: [1234, 5678],
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
