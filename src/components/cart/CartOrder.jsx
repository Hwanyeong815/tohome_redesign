import { OrderBoxStyle, OrderStyle } from './style';

const CartOrder = () => {
    return (
        <OrderBoxStyle>
            <OrderStyle>
                <div className="title">
                    <p>주문자 정보</p>
                    <span>고객님의 회원 정보가 기본 입력됩니다</span>
                </div>
                <div className="forms">
                    <div className="form-row">
                        <label htmlFor="name">이름</label>
                        <div className="field-group">
                            <input type="text" name="name" id="name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">이메일</label>
                        <div className="field-group">
                            <input type="text" name="email" id="email" /> @
                            <select name="" id="">
                                <option value="">gmail.com</option>
                                <option value="">naver.com</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="tel">전화번호</label>
                        <div className="field-group">
                            <select name="tel" id="tel">
                                <option value="">010</option>
                            </select>
                            <input
                                type="text"
                                name="tel"
                                id="tel"
                                placeholder="0000"
                            />
                            <input
                                type="text"
                                name="tel"
                                id="tel"
                                placeholder="0000"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="addr">주소</label>
                        <div className="field-group">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="서울시 XX구  XX동"
                            />
                        </div>
                    </div>
                </div>
            </OrderStyle>
        </OrderBoxStyle>
    );
};

export default CartOrder;
