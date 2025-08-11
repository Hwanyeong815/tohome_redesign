import Cartitem from '../../components/cart/CartItem';
import CartOrder from '../../components/cart/CartOrder';
import CartResult from '../../components/cart/CartResult';
import CartSide from '../../components/cart/CartSide';
import { CartWrap } from './style';

const Cart = () => {
    return (
        <CartWrap>
            <div className="inner">
                <h2>카트mmmm</h2>
                <Cartitem />
                <CartOrder />
                <CartResult />
                <CartSide />
            </div>
        </CartWrap>
    );
};

export default Cart;
