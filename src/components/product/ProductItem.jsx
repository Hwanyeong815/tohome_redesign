import { useNavigate } from 'react-router-dom';
import { ProductItemStyle } from './style';
import { BsCart2, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';
import { useState } from 'react';
import Checkbox from '../../ui/CheckBox';

const formatPrice = (n) => new Intl.NumberFormat('ko-KR').format(n ?? 0);

const ProductItem = ({ product, showCheckbox = true, isSelected = false, onSelect, idx }) => {
    const [hoverHeart, setHoverHeart] = useState(false);
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ✅ product 없을 때 대비
    if (!product) return null;

    const num = Number(product.num); // product.num을 숫자로 변환
    const safeNum = Number.isFinite(num) ? num : null;

    const handleClick = () => {
        if (safeNum == null) return;
        navigate(`/product/${safeNum}`);
        window.scrollTo({ top: 0, left: 0 });
    };

    const {
        thumbnail,
        name = '',
        price = 0,
        discountedPrice,
        isDiscounted = false,
        discountRate,
        info,
    } = product;

    return (
        <ProductItemStyle>
            <div className="img-wrap">
                <img src={thumbnail} alt={name} onClick={handleClick} />

                <div className="overlay">
                    <button
                        className="icon-btn"
                        aria-label="관심상품"
                        aria-pressed={clicked}
                        onMouseEnter={() => setHoverHeart(true)}
                        onMouseLeave={() => setHoverHeart(false)}
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setClicked((prev) => !prev);
                        }}
                    >
                        {hoverHeart || clicked ? <BsSuitHeartFill /> : <BsSuitHeart />}
                    </button>

                    <button
                        className="icon-btn"
                        type="button"
                        aria-label="장바구니 담기"
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            if (safeNum == null) return;
                            const payload = { num: safeNum, qty: 1, product };
                            dispatch(cartActions.addToCart(payload));
                        }}
                        disabled={safeNum == null}
                    >
                        <BsCart2 />
                    </button>
                </div>

                {showCheckbox && (
                    <Checkbox
                        htmlFor={`recipe-${safeNum ?? idx}`}
                        right="15px"
                        top="15px"
                        checked={!!isSelected}
                        onChange={(e) => {
                            if (onSelect && safeNum != null) {
                                onSelect(safeNum, e.target.checked);
                            }
                        }}
                    />
                )}
            </div>

            <h3 onClick={handleClick}>
                {name.split('\n').map((line, i) => (
                    <span key={i}>
                        {line}
                        <br />
                    </span>
                ))}
            </h3>

            <div className="price-box" onClick={handleClick}>
                {isDiscounted ? (
                    <p className="discount">{formatPrice(price)}원</p>
                ) : (
                    <p className="discount">{''}</p>
                )}
                <p className="price">
                    {isDiscounted && <span>{discountRate}%</span>}
                    {formatPrice(isDiscounted ? discountedPrice : price)}원
                </p>
            </div>

            <div className="des pretendard fw300">{info}</div>
        </ProductItemStyle>
    );
};

export default ProductItem;
