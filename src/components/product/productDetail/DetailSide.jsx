import React from 'react';
import { DetailSideStyle } from './style';
import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';

const DetailSide = ({ obj }) => {
    const {
        id,
        name,
        des,
        price,
        discountedPrice,
        isDiscounted,
        discountRate,
        pricePerUnit,
        thumbnailImage,
        tags,
        details: {
            origin,
            packagingType,
            additionalDiscount,
            deliveryType,
            barcode,
            size,
            unitWeight,
            manufacturer,
            importer,
            originLaw,
            expirationPolicy,
            itemName,
            gmoInfo,
            importNotice,
            productContents,
            storageMethod,
            customerService,
            safetyNotice,
        },
    } = obj;
    return (
        <DetailSideStyle>
            <div className="proInfo">
                <div className="brandwrap">
                    <div className="tag">
                        {tags.name ? <span>{tags.name} </span> : ''}
                        {deliveryType ? <span>{deliveryType} </span> : ''}
                    </div>
                    <div className="brand">
                        <span>{manufacturer || ''}</span>
                        <div className="icon">
                            <FaAngleRight />
                        </div>
                    </div>
                </div>
                <h2>{name}</h2>
                <div className="price">
                    <div className="price-box">
                        {isDiscounted ? (
                            <p className="discount">
                                {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                            </p>
                        ) : (
                            <p className="discount">{''}</p>
                        )}
                        <p className="price">
                            {isDiscounted
                                ? discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                : price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            원{isDiscounted && <span>{discountRate}%</span>}
                        </p>
                    </div>

                    <span>{pricePerUnit}</span>
                </div>
                <div className="detailInfo">
                    <dl>
                        <div className="infoItem">
                            <dt>원산지</dt>
                            <dd>{origin ? origin : '상세페이지 참고'}</dd>
                        </div>
                        <div className="infoItem">
                            <dt>포장타입</dt>
                            <dd>{packagingType}</dd>
                        </div>
                        <div className="infoItem">
                            <dt>추가 혜택가</dt>
                            <dd>{additionalDiscount}</dd>
                        </div>
                        <div className="infoItem deliveryType">
                            <dt>배송형태</dt>
                            <dd>
                                {deliveryType === '택배배송' ? (
                                    <>
                                        <p>택배배송 / 밤 9시까지 결제 시</p>
                                        <p>배송비 3,500원 (5만원 이상 구매 시 무료)</p>
                                    </>
                                ) : deliveryType === '브랜드직송' ? (
                                    <>
                                        <strong> 브랜드직송</strong>
                                        <p>
                                            브랜드직송 판매자{manufacturer ? { manufacturer } : ''}
                                            가 직접 고객님께 배송(출고, 택배)하는 상품입니다.
                                        </p>
                                        <p>주문 후 2일 이내에 상품이 출발합니다.</p>
                                        <p>배송비 3,300원 (2만 5천원 이상 구매 시 무료)</p>
                                    </>
                                ) : (
                                    <>
                                        <p>새벽배송 / 밤 11시까지 결제 시</p>
                                        <p>택배배송 / 밤 9시까지 결제 시</p>
                                        <p>배송비 3,500원 (5만원 이상 구매 시 무료)</p>
                                    </>
                                )}
                                <div className="deliveryInfo">
                                    <span>배송안내</span>
                                    <div className="icon">
                                        <FaAngleDown />
                                    </div>
                                </div>
                            </dd>
                        </div>
                        <div className="infoItem name">
                            <dt>상품선택</dt>
                            <dd>
                                <p>{name}</p>
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
