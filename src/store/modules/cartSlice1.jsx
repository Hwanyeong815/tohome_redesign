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
import recipeProductData from '../../assets/data/recipeProductData.js';
import AllMergeData from '../../assets/data/AllMergeData.js';

const toNum = (v) => {
    const n = Number(String(v ?? '').replace(/[^\d.-]/g, ''));
    return Number.isFinite(n) ? n : 0;
};

const normalizeProductId = (raw) => {
    const id =
        raw.id ??
        raw.fruitId ??
        raw.brandId ??
        raw.grainId ??
        raw.seafoodId ??
        raw.meatId ??
        raw.riceId ??
        raw.sideId ??
        raw.seasoningId ??
        raw.bakeryId ??
        raw.snackId ??
        raw.recipeProductId ??
        raw.liquidId;

    const numId = Number(id);
    return {
        ...raw,
        id: Number.isFinite(numId) ? numId : undefined,
    };
};

const normalizeItem = (raw) => {
    const base = normalizeProductId(raw);

    const qty = Number(base?.quantity) || 1;
    const price = toNum(base?.price);
    const disc = base?.discountedPrice != null ? toNum(base.discountedPrice) : null;

    const unit = disc != null && disc !== 0 ? disc : price;

    return {
        ...base,
        price,
        discountedPrice: disc,
        quantity: qty,
        itemtotal: unit * qty,
    };
};

const loadCarts = () => {
    try {
        const parsed = JSON.parse(localStorage.getItem('carts') || '[]');
        return Array.isArray(parsed) ? parsed.map(normalizeItem) : [];
    } catch {
        return [];
    }
};

const save = (carts) => {
    localStorage.setItem('carts', JSON.stringify(carts));
};

const initialState = {
    priceTotal: 0,
    quantityTotal: 0,
    totalDiscount: 0,
    totalDiscounted: 0,
    totalDeliveryFee: 0,
    totalPayable: 0,
    carts: loadCarts(),

    sortType: '판매량순',

    currentCategory: null,
    ///
    products: productData.map(normalizeItem),
    sideDishes: sideDishData.map(normalizeItem),
    gifts: giftData.map(normalizeItem),
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
    specials: specialBrandData.map(normalizeItem),
    recipes: recipeProductData.map(normalizeItem),
    AllDataList: AllMergeData,
};

const DELIVERY_THRESHOLD = 10000;
const DELIVERY_FEE = 3000;

const getId = (p) => String(p?.id ?? p);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const incoming = normalizeItem(action.payload);

            const exist = state.carts.find((c) => String(c.id) === String(incoming.id));

            if (exist) {
                const newQty = (Number(exist.quantity) || 1) + (Number(incoming.quantity) || 1);
                const unit = exist.discountedPrice != null ? exist.discountedPrice : exist.price;

                exist.quantity = newQty;
                exist.itemtotal = unit * newQty;
            } else {
                state.carts.push(incoming);
            }

            save(JSON.parse(JSON.stringify(state.carts)));
        },

        removeFromCart: (state, action) => {
            const id = getId(action.payload);
            state.carts = state.carts.filter((item) => String(item.id) !== id);
            save(state.carts);
        },

        emptyCart: (state, action) => {
            if (action.payload) {
                state.carts = [];
            }
            save(state.carts);
        },

        setCurrentCategory(state, action) {
            state.currentCategory = action.payload;
        },

        setSortType(state, action) {
            state.sortType = action.payload;
        },

        increaseQuantity(state, action) {
            const id = getId(action.payload);
            const item = state.carts.find((cart) => String(cart.id) === id);
            if (item) {
                const q = Number(item.quantity) || 1;
                const unit = item.discountedPrice != null ? item.discountedPrice : item.price;
                item.quantity = q + 1;
                item.itemtotal = unit * item.quantity;
                save(state.carts);
            } else {
                state.carts.push({
                    id,
                    quantity: 1,
                    price: 0,
                    discountedPrice: null,
                    itemtotal: 0,
                });
                save(state.carts);
            }
        },

        decreaseQuantity(state, action) {
            const id = getId(action.payload);
            const item = state.carts.find((cart) => String(cart.id) === id);
            if (item) {
                const q = Number(item.quantity) || 1;
                const unit = item.discountedPrice != null ? item.discountedPrice : item.price;
                const next = Math.max(q - 1, 1);
                item.quantity = next;
                item.itemtotal = unit * next;
                save(state.carts);
            }
        },

        totalCart(state) {
            state.priceTotal = state.carts.reduce((acc, item) => {
                const qty = Number(item?.quantity) || 1;
                const price = toNum(item?.price);
                return acc + price * qty;
            }, 0);

            state.quantityTotal = state.carts.reduce((acc, item) => {
                return acc + (Number(item?.quantity) || 1);
            }, 0);

            state.totalDiscounted = state.carts.reduce((acc, item) => {
                const qty = Number(item?.quantity) || 1;
                const price = toNum(item?.price);
                const disc = item?.discountedPrice != null ? toNum(item.discountedPrice) : null;
                const unit = disc != null ? disc : price;
                return acc + unit * qty;
            }, 0);

            state.totalDiscount = Math.max(0, state.priceTotal - state.totalDiscounted);

            state.totalDeliveryFee = state.totalDiscounted >= DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;

            state.totalPayable = state.totalDiscounted + state.totalDeliveryFee;

            save(JSON.parse(JSON.stringify(state.carts)));
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
