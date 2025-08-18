import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/modules/cartSlice';

const CartSide = ({ setIsCartTab, isCartTab }) => {
    const {
        priceTotal,
        quantityTotal,
        carts,
        totalDiscount,
        totalPayable,
        totalDiscounted,
        totalDeliveryFee,
    } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(cartActions.totalCart());
    }, [carts]);

    const fmt = (n) => (Number.isFinite(n) ? n : 0).toLocaleString();

    const onEmpty = () => {
        const z = window.confirm(
            '장바구니에 제품이 없습니다. 구매 페이지로 이동합니다.'
        );
        dispatch(cartActions.emptyCart(z));
        if (z) {
            navigate(`/`);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="countBox">
            <div className="total">
                <div className="priceT">
                    <span>총 금액</span>
                    <span>{fmt(priceTotal)}원</span>
                </div>
                <div className="discountT">
                    <span>총 할인금액</span>
                    <span>{fmt(totalDiscount)}원</span>
                </div>
                <div className="delivery">
                    <span>총 배송비</span>
                    <span>{fmt(totalDeliveryFee)}원</span>
                </div>
            </div>
            <div className="line"></div>
            <div className="cost">
                <p>총 예상금액</p>
                <p>{fmt(totalPayable)}원</p>
            </div>
            <div className="buttons">
                {isCartTab === 'List' && (
                    <div className="CartListB">
                        <button onClick={() => setIsCartTab('Order')}>
                            주문하기
                        </button>
                    </div>
                )}

                {isCartTab === 'Order' && (
                    <div className="CartOrderB">
                        <button onClick={() => setIsCartTab('Result')}>
                            결제하기
                        </button>
                        <button onClick={onEmpty}>취소하기</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSide;
