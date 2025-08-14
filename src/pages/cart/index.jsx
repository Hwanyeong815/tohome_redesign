import { useLocation } from 'react-router-dom';
import Cartitem from '../../components/cart/CartItem';
import CartList from '../../components/cart/CartList';
import CartOrder from '../../components/cart/CartOrder';
import CartResult from '../../components/cart/CartResult';
import CartSide from '../../components/cart/CartSide';
import { CartBottomStyle, CartWrap } from './style';
import { useState } from 'react';

const Cart = () => {
    const [isCartTab, setIsCartTab] = useState('List'); // List ,Order, Result
    const [isMenuTab, setIsMenuTab] = useState('새벽배송'); //새벽배송, 선물하기, 정기구독, 브랜드직송

    return (
        <CartWrap>
            <div className="inner">
                <div className="steps">
                    <div className="cart box" onClick={() => setIsCartTab('List')}>
                        <span className="dot on"></span>
                        <span className="txt on">장바구니</span>
                    </div>
                    <div
                        className={`line ${
                            isCartTab === 'Order' || isCartTab === 'Result' ? 'on' : ''
                        }`}
                    ></div>
                    <div className="delivery box" onClick={() => setIsCartTab('Order')}>
                        <span
                            className={`dot ${
                                isCartTab === 'Order' || isCartTab === 'Result' ? 'on' : ''
                            }`}
                        ></span>
                        <span
                            className={`txt ${
                                isCartTab === 'Order' || isCartTab === 'Result' ? 'on' : ''
                            }`}
                        >
                            배송정보 입력
                        </span>
                    </div>
                    <div className={`line ${isCartTab === 'Result' ? 'on' : ''}`}></div>
                    <div className="pay box" onClick={() => setIsCartTab('Result')}>
                        <span className={`dot ${isCartTab === 'Result' ? 'on' : ''}`}></span>
                        <span className={`txt ${isCartTab === 'Result' ? 'on' : ''}`}>
                            결제하기
                        </span>
                    </div>
                </div>

                <div className="menu">
                    <ul>
                        <li
                            className={isMenuTab === '새벽배송' ? 'on' : ''}
                            onClick={() => setIsMenuTab('새벽배송')}
                        >
                            새벽배송
                        </li>
                        <li
                            className={isMenuTab === '선물하기' ? 'on' : ''}
                            onClick={() => setIsMenuTab('선물하기')}
                        >
                            선물하기 1
                        </li>
                        <li
                            className={isMenuTab === '정기구독' ? 'on' : ''}
                            onClick={() => setIsMenuTab('정기구독')}
                        >
                            정기구독 0
                        </li>
                        <li
                            className={isMenuTab === '브랜드직송' ? 'on' : ''}
                            onClick={() => setIsMenuTab('브랜드직송')}
                        >
                            브랜드직송 0
                        </li>
                    </ul>
                </div>

                <CartBottomStyle>
                    {isCartTab === 'List' && <CartList />}
                    {isCartTab === 'Order' && <CartOrder />}
                    {(isCartTab === 'List' || isCartTab === 'Order') && <CartSide />}
                    {isCartTab === 'Result' && <CartResult />}
                </CartBottomStyle>
            </div>
        </CartWrap>
    );
};

export default Cart;
