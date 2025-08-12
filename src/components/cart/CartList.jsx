import React from 'react';
import Cartitem from './CartItem';
import { CartBoxStyle } from './style';

const CartList = () => {
    return (
        <CartBoxStyle>
            <Cartitem />
            {/* <Cartitem /> */}
        </CartBoxStyle>
    );
};

export default CartList;
