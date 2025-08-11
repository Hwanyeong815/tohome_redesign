import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/data/productData.js';

const initialState = {
    products: productData,
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
