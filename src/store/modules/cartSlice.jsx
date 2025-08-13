import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/data/productData.js';
import sideDishData from '../../assets/data/sideDishData.js';
import giftData from '../../assets/data/giftData.js';

const initialState = {
    products: productData,
    sideDishes: sideDishData,
    gifts: giftData,
};
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        xxx: (state, action) => {},
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
