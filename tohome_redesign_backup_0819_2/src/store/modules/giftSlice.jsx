import { createSlice } from '@reduxjs/toolkit';
import giftData from '../../assets/data/giftData.js';

const giftSlice = createSlice({
    name: 'gift',
    initialState: {
        gifts: giftData,
    },
    reducers: {},
});

export const selectBest10 = (state) =>
    state.gift.gifts
        .filter((gift) => gift.tags.some((tag) => tag.name === '베스트10'))
        .sort((a, b) => {
            const ranka = a.tags.find((tag) => tag.name === '베스트10').rank;
            const rankb = b.tags.find((tag) => tag.name === '베스트10').rank;
            return ranka - rankb;
        });

export const selectPremium = (state) =>
    state.gift.gifts
        .filter((gift) => gift.tags.some((tag) => tag.name === '프리미엄'))
        .sort((a, b) => {
            const ranka = a.tags.find((tag) => tag.name === '프리미엄').rank;
            const rankb = b.tags.find((tag) => tag.name === '프리미엄').rank;
            return ranka - rankb;
        });

export const selectRes = (state) =>
    state.gift.gifts
        .filter((gift) => gift.tags.some((tag) => tag.name === '맛집'))
        .sort((a, b) => {
            const ranka = a.tags.find((tag) => tag.name === '맛집').rank;
            const rankb = b.tags.find((tag) => tag.name === '맛집').rank;
            return ranka - rankb;
        });

export const selectSnack = (state) =>
    state.gift.gifts
        .filter((gift) => gift.tags.some((tag) => tag.name === '간식'))
        .sort((a, b) => {
            const ranka = a.tags.find((tag) => tag.name === '간식').rank;
            const rankb = b.tags.find((tag) => tag.name === '간식').rank;
            return ranka - rankb;
        });

export default giftSlice.reducer;
