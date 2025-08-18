import React from 'react';
import { DetailSideStyle } from './style';
import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';

const DetailSide = ({ products }) => {
    const {
        name,
        des,
        pricePerUnit,
        price,
        id,
        origin,
        discountRate,
        packagingType,
    } = products;
    return (
        <DetailSideStyle>
            <div className="proInfo">
                <div className="brandwrap">
                    <div className="tag">
                        <span>신상품</span>
                        <span>새벽배송</span>
                    </div>
                    <div className="brand">
                        <span>찬솔농산</span>
                        <div className="icon">
                            <FaAngleRight />
                        </div>
                    </div>
                </div>
                <h2>[H - SWEET] 고당도 수박 8kg (참박)</h2>
                <div className="price">
                    <strong>58,500원</strong>
                    <span>100g 당 731원</span>
                </div>
                <div className="detailInfo">
                    <dl>
                        <div className="infoItem">
                            <dt>원산지</dt>
                            <dd>국내산</dd>
                        </div>
                        <div className="infoItem">
                            <dt>포장타입</dt>
                            <dd>냉장</dd>
                        </div>
                        <div className="infoItem">
                            <dt>추가 혜택가</dt>
                            <dd>혜택보기</dd>
                        </div>
                        <div className="infoItem">
                            <dt>배송형태</dt>
                            <dd>
                                <p>
                                    새벽배송/ 밤 11시까지 결제 시 <br />
                                    배송비 3,500원 (5만원 이상 구매 시 무료)
                                </p>
                                <div className="deliveryInfo">
                                    <span>배송안내</span>
                                    <div className="icon">
                                        <FaAngleDown />
                                    </div>
                                </div>
                            </dd>
                        </div>
                        <div className="infoItem">
                            <dt>상품선택</dt>
                            <dd>
                                <p>[H-SWEET] 고당도 수박 8kg (참박)</p>
                                <div className="quantity">
                                    <button>
                                        <FaMinus />
                                    </button>
                                    <span>1</span>
                                    <button>
                                        <FaPlus />
                                    </button>
                                </div>
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="totalPrice">
                    <p>총 금액</p>
                    <strong>58,500원</strong>
                </div>
                <div className="buttonWrap">
                    <button>장바구니</button>
                    <button>바로구매</button>
                </div>
            </div>
        </DetailSideStyle>
    );
};

export default DetailSide;
