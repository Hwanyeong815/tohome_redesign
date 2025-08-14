import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/data/productData.js';
import sideDishData from '../../assets/data/sideDishData.js';
import giftData from '../../assets/data/giftData.js';
import menu01Data from '../../assets/data/menu01Data.js';
import menu02Data from '../../assets/data/menu02Data.js';
import menu03Data from '../../assets/data/menu03Data.js';
import menu04Data from '../../assets/data/menu04Data.js';
import menu05Data from '../../assets/data/menu05Data.js';
import menu06Data from '../../assets/data/menu06Data.js';
import menu07Data from '../../assets/data/menu07Data.js';
import menu08Data from '../../assets/data/menu08Data.js';
import menu09Data from '../../assets/data/menu09Data.js';
import menu10Data from '../../assets/data/menu10Data.js';
import specialBrandData from '../../assets/data/specialBrandData.js';

const initialState = {
    carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [],
    products: productData,
    sideDishes: sideDishData,
    gifts: giftData,
    menus: [
        ...menu01Data,
        ...menu02Data,
        ...menu03Data,
        ...menu04Data,
        ...menu05Data,
        ...menu06Data,
        ...menu07Data,
        ...menu08Data,
        ...menu09Data,
        ...menu10Data,
    ],
    specials: specialBrandData,
};
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.carts.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.carts = state.carts.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.carts = [];
        },
        addMultipleToCart: (state, action) => {
            // action.payload: 합쳐서 넣고 싶은 배열
            state.carts.push(...action.payload);
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
