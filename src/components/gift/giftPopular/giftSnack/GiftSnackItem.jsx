import { useState } from 'react';
import { BsCart2, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { cartActions } from '../../../../store/modules/cartSlice';

const GiftSnackItem = ({ snc }) => {
    const item = snc; // ✅ 변수 통일
    const { name, price, discountedPrice, isDiscounted, discountRate, thumbnail } = item;

    const [hoverHeart, setHoverHeart] = useState(false);
    const [clicked, setClicked] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const safeNum = item.num ?? item.giftId; // ✅ num 보정
    const handleClick = () => {
        if (!safeNum) return;
        navigate(`/product/${safeNum}`);
        window.scrollTo({ top: 0, left: 0 });
    };

    const handleAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!safeNum) return;
        dispatch(cartActions.addToCart({ product: { ...item, num: safeNum }, qty: 1 }));
    };

    return (
        <li>
            <Link
                to={safeNum ? `/product/${safeNum}` : '/'}
                onClick={() => window.scrollTo({ top: 0, left: 0 })}
            >
                <div className="popular-img">
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
                        <button className="icon-btn" type="button" onClick={handleAdd}>
                            <BsCart2 />
                        </button>
                    </div>
                </div>
                <h3>
                    {String(name || '')
                        .split('\n')
                        .map((line, idx) => (
                            <span key={idx}>
                                {line}
                                <br />
                            </span>
                        ))}
                </h3>
                <div className="price-box">
                    {isDiscounted ? (
                        <p className="discount">{Number(price || 0).toLocaleString()}원</p>
                    ) : (
                        <p className="discount">{''}</p>
                    )}
                    <p className="price">
                        {isDiscounted && <span>{discountRate}%</span>}
                        {Number((isDiscounted ? discountedPrice : price) || 0).toLocaleString()}원
                    </p>
                </div>
            </Link>
        </li>
    );
};

export default GiftSnackItem;
