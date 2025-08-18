import { ResultBoxStyle, ResultStyle } from "./style";

const CartResult = () => {
  return (
    <ResultStyle>
      <ResultBoxStyle>
        <div className="innerBox">
          <div className="title">
            <p>현대식품관</p>
            <strong>결제가 완료되었습니다</strong>
          </div>
          <div className="total">
            <div className="price">
              <span>총 금액</span>
              <span>00,000원</span>
            </div>
            <div className="price">
              <span>총 할인금액</span>
              <span>00,000원</span>
            </div>
            <div className="price">
              <span>총 배송비</span>
              <span>00,000원</span>
            </div>
          </div>
          <div className="cost">
            <p>최종 결제 금액</p>
            <p>00,000원</p>
          </div>
          <div className="orderButton">
            <button>결제내역 보기</button>
            <button>계속 쇼핑하기</button>
          </div>
        </div>
      </ResultBoxStyle>
    </ResultStyle>
  );
};

export default CartResult;
