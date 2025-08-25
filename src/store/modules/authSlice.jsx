// store/modules/authSlice.js
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

const persistedMembers = localStorage.getItem('members')
    ? JSON.parse(localStorage.getItem('members'))
    : memberData;

const initialState = {
    members: persistedMembers,
    // 현재 멤버들 중 가장 큰 id + 1 로 nextId 계산
    nextId: (persistedMembers.reduce((m, v) => Math.max(m, v.id || 0), 0) || 0) + 1,
    authed: localStorage.getItem('authed') ? JSON.parse(localStorage.getItem('authed')) : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { userid, password } = action.payload;
            const item = state.members.find((member) => member.userid === userid);
            if (item && item.password === password) {
                state.authed = true;
                state.user = item;
            }
            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        logout: (state) => {
            state.authed = false;
            state.user = null;
            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        signup: (state, action) => {
            const newMember = { ...action.payload, id: state.nextId++ };
            state.members.push(newMember);
            localStorage.setItem('members', JSON.stringify(state.members));
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
