import { useState } from 'react';
import { BsCart2, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { cartActions } from '../../../store/modules/cartSlice';

const GiftPremiumItem = ({ gift }) => {
    const item = gift; // ✅ 변수 통일
    const { name, price, thumbnail, tags = [], details = {} } = item;

    const deliveryTag = tags.find((t) => t.name === '프리미엄');
    const best10Tag = tags.find((t) => t.name === '베스트10');

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
                <div className="premium-img">
                    <img src={thumbnail} alt={name} onClick={handleClick} />
                    <div className="overlay">
                        <button
                            className="icon-btn"
                            onMouseEnter={() => setHoverHeart(true)}
                            onMouseLeave={() => setHoverHeart(false)}
                            onClick={() => setClicked((p) => !p)}
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
                <div>
                    <ul className="price-box">
                        <li className="price-dsc">
                            <span>{deliveryTag ? details.deliveryType : ''}</span>
                            {deliveryTag && best10Tag && <span>{best10Tag.name}</span>}
                        </li>
                        <li className="price">{Number(price || 0).toLocaleString()}원</li>
                    </ul>
                </div>
            </Link>
        </li>
    );
};

export default GiftPremiumItem;
