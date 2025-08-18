import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BsCart2, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

const GiftBestItem = ({ gift }) => {
    const { name, price, discountedPrice, isDiscounted, discountRate, thumbnailImage, tags } = gift;
    const bestTag = tags.find((tag) => tag.name === '베스트10');
    const [hoverHeart, setHoverHeart] = useState(false);
    return (
        <li>
            <Link to="">
                <div className="best-img">
                    <img src={thumbnailImage} alt={name} />
                    <span className="ranking">{bestTag ? bestTag.rank : ''}</span>
                    <div className="overlay">
                        <button
                            className="icon-btn"
                            onMouseEnter={() => setHoverHeart(true)}
                            onMouseLeave={() => setHoverHeart(false)}
                        >
                            {hoverHeart ? <BsSuitHeartFill /> : <BsSuitHeart />}
                        </button>
                        <button className="icon-btn">
                            <BsCart2 />
                        </button>
                    </div>
                </div>
                <h3>
                    {' '}
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

export default GiftBestItem;
