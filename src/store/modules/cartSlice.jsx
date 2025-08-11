import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/data/productData.js';

const initialState = {
    products: productData,
};
export const cartSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        xxx: (state, action) => {},
    },
});

export const productActions = cartSlice.actions;
export default cartSlice.reducer;
