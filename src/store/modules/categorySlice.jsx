import { createSlice } from '@reduxjs/toolkit';
import fruit from '../../assets/data/menu01Data.js';
import grain from '../../assets/data/menu02Data.js';
import seafood from '../../assets/data/menu03Data.js';
import meat from '../../assets/data/menu04Data.js';
import rice from '../../assets/data/menu05Data.js';
import side from '../../assets/data/menu06Data.js';
import seasoning from '../../assets/data/menu07Data.js';
import bakery from '../../assets/data/menu08Data.js';
import snack from '../../assets/data/menu09Data.js';
import liquid from '../../assets/data/menu10Data.js';

const initialState = {
    currentCategory: null,
    categories: {
        fruit: { title: '과일·채소', products: fruit },
        grain: { title: '곡물·견과', products: grain },
        seafood: { title: '생선·해산물·건어물', products: seafood },
        meat: { title: '육류·달걀', products: meat },
        rice: { title: '밥·국·면', products: rice },
        side: { title: '밑반찬·간식', products: side },
        seasoning: { title: '양념·오일·통조림', products: seasoning },
        bakery: { title: '베이커리·치즈', products: bakery },
        snack: { title: '과자·초콜릿·캔디', products: snack },
        liquid: { title: '물·우유·커피·음료', products: liquid },
    },
};
export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCurrentCategory(state, action) {
            state.currentCategory = action.payload;
        },
    },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
