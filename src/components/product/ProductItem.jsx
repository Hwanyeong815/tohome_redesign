import { Link, useNavigate } from 'react-router-dom';
import { ProductItemStyle } from './style';
import { BsCart2, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';
import { useMemo, useState } from 'react';
import Checkbox from '../../ui/CheckBox';

const ProductItem = ({
    product,
    showCheckbox = true,
    isSelected = false,
    onSelect,
    idx,
    onItemSelect,
}) => {
    const [hoverHeart, setHoverHeart] = useState(false);
    const [clicked, setClicked] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.num}`);
        window.scrollTo({ top: 0, left: 0 });
    };

    const pickThumb = (cand) => {
        if (!cand) return '';
        if (Array.isArray(cand)) {
            const first = cand.find((x) => typeof x === 'string' && x.trim());
            return first || '';
        }
        if (typeof cand === 'object') {
            return cand.src || cand.url || '';
        }
        return String(cand);
    };

    const normalizePath = (p) => {
        if (!p) return '';
        let s = String(p).trim().replace(/\\/g, '/'); // 역슬래시 → 슬래시
        // Vite/CRA: public 폴더라면 절대경로로 쓰는 게 안전
        if (!/^https?:\/\//i.test(s)) {
            // 앱이 서브경로에 배포되면 BASE_URL 고려
            const base = (import.meta && import.meta.env && import.meta.env.BASE_URL) || '/';
            s = base.replace(/\/$/, '') + '/' + s.replace(/^\//, '');
        }
        return s;
    };

    const {
        thumbnail,
        name = '',
        price = 0,
        discountedPrice,
        isDiscounted = false,
        discountRate,
        info,
    } = product ?? {};

    // const thumbSrc = useMemo(() => normalizePath(pickThumb(thumbnail)), [thumbnail]);

    return (
        <ProductItemStyle>
            <div className="img-wrap">
                <img
                    src={thumbnail}
                    alt={name}
                    onClick={handleClick}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/common/placeholder.png';
                    }}
                />

                <div className="overlay">
                    <button
                        className="icon-btn"
                        onMouseEnter={() => setHoverHeart(true)}
                        onMouseLeave={() => setHoverHeart(false)}
                        onClick={() => setClicked((prev) => !prev)}
                    >
                        {hoverHeart || clicked ? <BsSuitHeartFill /> : <BsSuitHeart />}
                    </button>
                    <button
                        className="icon-btn"
                        onClick={() => dispatch(cartActions.addToCart(product))}
                    >
                        <BsCart2 />
                    </button>
                </div>
                {showCheckbox && (
                    <Checkbox
                        htmlFor={`recipe-${product.id || idx}`}
                        right={'15px'}
                        top={'15px'}
                        checked={isSelected}
                        onChange={(e) => onSelect(product.id, e.target.checked)}
                    />
                )}
            </div>
            <h3 onClick={handleClick}>
                {name.split('\n').map((line, idx) => (
                    <span key={idx}>
                        {line}
                        <br />
                    </span>
                ))}
            </h3>
            <div className="price-box" onClick={handleClick}>
                {isDiscounted ? (
                    <p className="discount">
                        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                    </p>
                ) : (
                    <p className="discount">{''}</p>
                )}
                <p className="price">
                    {isDiscounted && <span>{discountRate}%</span>}
                    {isDiscounted
                        ? discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        : price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                </p>
            </div>

            <div className="des">{info}</div>
        </ProductItemStyle>
    );
};

export default ProductItem;
