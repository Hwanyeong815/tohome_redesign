const CartSide = () => {
    return (
        <div className="countBox">
            <div className="total">
                <div className="priceT">
                    <span>총 금액</span>
                    <span>00,000원</span>
                </div>
                <div className="discountT">
                    <span>총 할인금액</span>
                    <span>00,000원</span>
                </div>
                <div className="delivery">
                    <span>총 배송비</span>
                    <span>00,000원</span>
                </div>
            </div>
            <div className="line"></div>
            <div className="cost">
                <p>총 배송비</p>
                <p>00,000원</p>
            </div>
            <div className="order">
                <button>주문하기</button>
            </div>
        </div>
    );
};

export default CartSide;
