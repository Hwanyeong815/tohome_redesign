import { createSlice, current } from '@reduxjs/toolkit';
import customerData from '../../assets/data/customerData';
import faqData from '../../assets/data/faqData';
import noticeData from '../../assets/data/noticeData';
import reviewData from '../../assets/data/reviewData';

const normalized = customerData.map((c) => ({
    ...c,
    id: c.id ?? c.customerId, // id가 없으면 customerId를 id로 세팅
}));

const initialState = {
    customers: normalized,
    faqs: faqData,
    openFaqIds: [],
    notices: noticeData,
    reviews: reviewData,
    current: null,
};
let no = initialState.customers.length + 1;
export const supportSlice = createSlice({
    name: 'support',
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            const nid = no++;
            action.payload.id = nid;
            action.payload.customerId = nid; // 호환 유지
            state.customers = [action.payload, ...state.customers];
        },
        setCurrentCustomer: (state, action) => {
            state.current = action.payload;
        },
        removeCustomer: (state, action) => {
            state.customers = state.customers.filter(
                (c) => c.id !== Number(action.payload)
            );
        },

        updateCustomer: (state, action) => {
            state.customers = state.customers.map((customer) =>
                customer.id === action.payload.id ? action.payload : customer
            );
        },

        faqToggle: (state, action) => {
            const id = action.payload;
            if (state.openFaqIds.includes(id)) {
                state.openFaqIds = state.openFaqIds.filter(
                    (faqId) => faqId !== id
                );
            } else {
                state.openFaqIds.push(id);
            }
        },
    },
});

export const supportActions = supportSlice.actions;
export default supportSlice.reducer;
