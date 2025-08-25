import { Link, useNavigate } from 'react-router-dom';
import { ProductItemStyle } from './style';
import { BsCart2, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';
import { useState } from 'react';
import Checkbox from '../../ui/CheckBox';

const ProductItem = ({ product, showCheckbox = true, isSelected = false, onSelect, idx }) => {
    const [hoverHeart, setHoverHeart] = useState(false);
    const [clicked, setClicked] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.num}`);
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
    } = product ?? {};

    return (
        <ProductItemStyle>
            <div className="img-wrap">
                <img src={thumbnail} alt={name} onClick={handleClick} />

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
                {showCheckbox && (
                    <Checkbox
                        htmlFor={`recipe-${product.num ?? product.id ?? idx}`}
                        right={'15px'}
                        top={'15px'}
                        checked={isSelected}
                        onChange={(e) => onSelect(product.num ?? product.id, e.target.checked)}
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
