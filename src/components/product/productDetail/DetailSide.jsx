import { useMemo, useState, useEffect } from 'react';
import { DetailSideStyle } from './style';
import { FaAngleRight } from 'react-icons/fa6';
// import { FaAngleDown } from 'react-icons/fa';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/modules/cartSlice';
import { useNavigate } from 'react-router-dom';

const toNum = (v) => {
    const n = Number(String(v ?? '').replace(/[^\d.-]/g, ''));
    return Number.isFinite(n) ? n : 0;
};

const DetailSide = ({ obj }) => {
    const {
        id,
        name,
        thumbnail,
        price,
        discountedPrice,
        isDiscounted,
        discountRate,
        pricePerUnit,
        tags,
        details: { origin, packagingType, additionalDiscount, deliveryType, manufacturer },
    } = obj;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const SHIP_PATH = '/order';

    const [qty, setQty] = useState(1);
    useEffect(() => {
        setQty(1);
    }, [id]);

    const { lineOriginal, lineDiscounted } = useMemo(() => {
        const qtySafe = Number(qty) || 1;
        const priceNum = toNum(price);
        const discNum = discountedPrice != null ? toNum(discountedPrice) : null;

        return {
            lineOriginal: priceNum * qtySafe,
            lineDiscounted: discNum != null ? discNum * qtySafe : null,
        };
    }, [price, discountedPrice, qty]);

    return (
        <DetailSideStyle>
            <div className="proInfo">
                <div className="brandwrap">
                    <div className="tag">
                        {tags?.name ? <span>{tags.name} </span> : ''}
                        {deliveryType ? <span>{deliveryType} </span> : ''}
                    </div>
                    <div className="brand">
                        <span>{manufacturer ?? ''}</span>
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
                            {(isDiscounted ? discountedPrice : price)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
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

                        <div className="infoItem name">
                            <dt>상품선택</dt>
                            <dd>
                                <p>{name}</p>

                                <div className="quantity">
                                    <button
                                        type="button"
                                        aria-label="수량 감소"
                                        aria-disabled={qty <= 1}
                                        className={qty <= 1 ? 'is-disabled' : ''}
                                        onClick={() => qty > 1 && setQty(qty - 1)}
                                    >
                                        <FaMinus />
                                    </button>

                                    <span>{qty}</span>

                                    <button
                                        type="button"
                                        aria-label="수량 증가"
                                        onClick={() => setQty(qty + 1)}
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                            </dd>
                        </div>
                    </dl>
                </div>

                <div className="totalPrice">
                    <p>총 금액</p>
                    <strong>
                        {(
                            (isDiscounted ? lineDiscounted ?? lineOriginal : lineOriginal) || 0
                        ).toLocaleString()}
                        원
                    </strong>
                </div>

                <div className="buttonWrap">
                    <button
                        type="button"
                        onClick={() =>
                            dispatch(
                                cartActions.addToCart({
                                    id,
                                    name,
                                    price,
                                    discountedPrice,
                                    thumbnail,
                                    pricePerUnit,
                                    quantity: qty,
                                })
                            )
                        }
                    >
                        장바구니
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(
                                cartActions.addToCart({
                                    id,
                                    name,
                                    price,
                                    discountedPrice,
                                    thumbnail,
                                    pricePerUnit,
                                    quantity: qty,
                                })
                            );
                            navigate('/cart', { state: { goTo: 'order' } });
                        }}
                    >
                        바로구매
                    </button>
                </div>
            </div>
        </DetailSideStyle>
    );
};

export default DetailSide;
