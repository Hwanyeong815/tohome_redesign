import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    키: 값,
};
export const 이름Slice = createSlice({
    name: '이름',
    initialState,
    reducers: {
        함수: (state, action) => {
            // 실행문
            //state.키 : initialState 값
            //action.payload - 디자인에서 넘어오는 값은 무조건
        },
    },
});

export const 이름Actions = 이름Slice.actions;
export default 이름Slice.reducer;
