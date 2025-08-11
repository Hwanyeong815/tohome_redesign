import { createSlice } from '@reduxjs/toolkit';
//import 참조변수 from '../../assets/api/데이터';

const initialState = {
    pageData: [], // 전체 데이터
    totalCount: 0, // 전체 데이터 수
    perPage: 10, // 페이지당 개수
    currentPage: 1, // 현재 페이지
    totalPages: 1, // 전체 페이지 수
};

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        // setData(state, action) {},
        // if문은 필수는 아니지만 안전장치
        setData: (state, action) => {
            state.pageData = action.payload;
            // state.pageData = [...action.payload].sort((a, b) => b.id - a.id);
            state.totalCount = state.pageData.length;
            state.totalPages = Math.ceil(state.totalCount / state.perPage);
            state.currentPage = 1;
        },
        nextPage: (state) => {
            if (state.currentPage < state.totalPages) {
                state.currentPage++;
            }
        },
        prevPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage--;
            }
        },
        goToPage: (state, action) => {
            const num = action.payload;
            if (num >= 1 && num <= state.totalPages) state.currentPage = num;
        },
        goToFirstPage: (state) => {
            state.currentPage = 1;
        },
        goToLastPage: (state) => {
            state.currentPage = state.totalPages;
        },
    },
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice.reducer;
