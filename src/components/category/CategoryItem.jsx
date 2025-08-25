import { useState } from 'react';
import { BsCart2, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/modules/cartSlice';
import { useDispatch } from 'react-redux';

const CategoryItem = ({ product }) => {
    const { thumbnail, name, price, discountedPrice, isDiscounted, discountRate } = product;
    const [hoverHeart, setHoverHeart] = useState(false);
    const [clicked, setClicked] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const productId =
        product?.num ??
        product?.id ??
        product?.fruitId ??
        product?.grainId ??
        product?.seafoodId ??
        product?.meatId ??
        product?.riceId ??
        product?.sideId ??
        product?.seasoningId ??
        product?.bakeryId ??
        product?.snackId ??
        product?.liquidId;

    const to = productId != null ? `/product/${productId}` : undefined;

    const scrollTop = () => window.scrollTo({ top: 0, left: 0 });
    return (
        <li>
            <Link to={to} onClick={scrollTop}>
                <div className="img-wrap">
                    <img src={thumbnail} alt={name} />
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
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                // cartSlice 기대 스키마에 맞춰 전달
                                const payload = { num: product.num, qty: 1, product };
                                // 액션명이 addToCart인지 addItem인지 프로젝트에 맞춰 사용
                                if (cartActions.addToCart) {
                                    dispatch(cartActions.addToCart(payload));
                                } else if (cartActions.addItem) {
                                    dispatch(cartActions.addItem(payload));
                                } else {
                                    // 최후방어: 기존처럼 전체 product도 시도
                                    dispatch(cartActions.addToCart?.(product));
                                }
                            }}
                        >
                            <BsCart2 />
                        </button>
                    </div>
                </div>
                <h3>
                    {name.split('\n').map((line, idx) => (
                        <span key={idx}>
                            {line}
                            <br />
                        </span>
                    ))}
                </h3>
                <div className="price-box">
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
            </Link>
        </li>
    );
};

export default CategoryItem;
