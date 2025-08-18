import { BsCart2, BsSuitHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const GiftPremiumItem = ({ gift }) => {
    const { name, price, thumbnailImage, tags, details } = gift;
    const deliveryTag = tags.find((tag) => tag.name === '프리미엄');
    const best10Tag = tags.find((tag) => tag.name === '베스트10');
    return (
        <li>
            <Link to="">
                <div className="premium-img">
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
                <div>
                    <ul className="price-box">
                        <li className="price-dsc">
                            <span>
                                {deliveryTag ? details.deliveryType : ''}
                            </span>
                            {deliveryTag && best10Tag && (
                                <span>{best10Tag.name}</span>
                            )}
                        </li>
                        <li className="price">
                            {price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            원
                        </li>
                    </ul>
                </div>
            </Link>
        </li>
    );
};

export default GiftPremiumItem;
