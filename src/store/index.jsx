import { configureStore } from '@reduxjs/toolkit';
import cart from './modules/cartSlice';
import support from './modules/supportSlice';
import pagination from './modules/paginationSlice';
import category from './modules/categorySlice';
import gift from './modules/giftSlice';

const store = configureStore({
    reducer: {
        cart,
        support,
        pagination,
        category,
        gift,
    },
});

export default store;
