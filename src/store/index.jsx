import { configureStore } from '@reduxjs/toolkit';
import cart from './modules/cartSlice';
import support from './modules/supportSlice';
import pagination from './modules/paginationSlice';

const store = configureStore({
    reducer: {
        cart,
        support,
        pagination,
    },
});

export default store;
