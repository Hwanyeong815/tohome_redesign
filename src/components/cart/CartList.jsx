import Cartitem from './CartItem';
import { CartBoxStyle } from './style';
import { useSelector } from 'react-redux';

const CartList = ({ setIsCartTab, items }) => {
    const { carts } = useSelector((state) => state.cart);
    const list = items ?? carts; // ✅ props 우선, 없으면 기존대로

    return (
        <CartBoxStyle>
            {list.map((cart) => (
                <Cartitem key={cart.num} cart={cart} setIsCartTab={setIsCartTab} />
            ))}
        </CartBoxStyle>
    );
};

export default CartList;
