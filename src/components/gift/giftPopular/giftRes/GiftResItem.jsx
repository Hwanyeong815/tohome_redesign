import { Link } from 'react-router-dom';
import { BsCart2, BsSuitHeart } from 'react-icons/bs';

const GiftResItem = ({ res }) => {
    const {
        name,
        price,
        discountedPrice,
        isDiscounted,
        discountRate,
        thumbnailImage,
    } = res;
    return (
        <li>
            <Link to="">
                <div className="popular-img">
                    <img src={thumbnailImage} alt={name} />
                    <div className="overlay">
                        <button className="icon-btn">
                            <BsSuitHeart />
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
                            {price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            원
                        </p>
                    ) : (
                        <p className="discount">{''}</p>
                    )}
                    <p className="price">
                        {isDiscounted && <span>{discountRate}%</span>}
                        {isDiscounted
                            ? discountedPrice
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                            : price
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        원
                    </p>
                </div>
            </Link>
        </li>
    );
};

export default GiftResItem;
