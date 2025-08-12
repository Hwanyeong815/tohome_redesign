import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/data/productData.js';
import sideDishData from '../../assets/data/sideDishData.js';

const initialState = {
    products: productData,
    sideDishes: sideDishData,
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
