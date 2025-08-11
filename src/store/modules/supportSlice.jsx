import { createSlice } from '@reduxjs/toolkit';
import customerData from '../../assets/data/customerData';
import faqData from '../../assets/data/faqData';
import noticeData from '../../assets/data/noticeData';

const initialState = {
    customers: customerData,
    faqs: faqData,
    openFaqIds: [],
    notices: noticeData,
};
export const supportSlice = createSlice({
    name: 'support',
    initialState,
    reducers: {
        addCustomer: (state, action) => {},
        setCurrentCustomer: (state, action) => {},
        removeCustomer: (state, action) => {},
        updateCustomer: (state, action) => {},
        //
        faqToggle: (state, action) => {
            const id = action.payload;
            if (state.openFaqIds.includes(id)) {
                state.openFaqIds = state.openFaqIds.filter((faqId) => faqId !== id);
            } else {
                state.openFaqIds.push(id);
            }
        },
    },
});

export const supportActions = supportSlice.actions;
export default supportSlice.reducer;
