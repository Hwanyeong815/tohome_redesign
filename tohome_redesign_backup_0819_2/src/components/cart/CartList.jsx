import React from 'react';
import Cartitem from './CartItem';
import { CartBoxStyle } from './style';
import { useSelector } from 'react-redux';

const CartList = ({ setIsCartTab }) => {
    const { carts } = useSelector((state) => state.cart);
    return (
        <CartBoxStyle>
            {carts.map((cart) => (
                <Cartitem
                    key={cart.id}
                    cart={cart}
                    setIsCartTab={setIsCartTab}
                />
            ))}
        </CartBoxStyle>
    );
};

export default CartList;
