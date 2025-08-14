import { useLocation } from 'react-router-dom';
import Cartitem from '../../components/cart/CartItem';
import CartList from '../../components/cart/CartList';
import CartOrder from '../../components/cart/CartOrder';
import CartResult from '../../components/cart/CartResult';
import CartSide from '../../components/cart/CartSide';
import { CartBottomStyle, CartWrap } from './style';

const Cart = () => {
    return (
        <CartWrap>
            <div className="inner">
                <div className="steps">
                    <div className="cart box">
                        <span className="dot on"></span>
                        <span className="txt on">장바구니</span>
                    </div>
                    <div className="line"></div>
                    <div className="delivery box">
                        <span className="dot"></span>
                        <span className="txt">배송정보 입력</span>
                    </div>
                    <div className="line"></div>
                    <div className="pay box">
                        <span className="dot"></span>
                        <span className="txt">결제하기</span>
                    </div>
                </div>

                <div className="menu">
                    <ul>
                        <li>새벽배송</li>
                        <li className="on">선물하기 1</li>
                        <li>정기구독 0</li>
                        <li>브랜드직송 0</li>
                    </ul>
                </div>

                <CartBottomStyle>
                    {/* <CartList /> */}
                    {/* <CartOrder /> */}
                    <CartResult />
                    {/* <CartSide /> */}
                </CartBottomStyle>
            </div>
        </CartWrap>
    );
};

export default Cart;
