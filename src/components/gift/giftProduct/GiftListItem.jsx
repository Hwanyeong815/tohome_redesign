import { BsCart2, BsSuitHeart } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

const GiftListItem = ({ gift }) => {
    const { name, price, thumbnailImage } = gift;
    const dispatch = useDispatch();
    return (
        <li>
            <div className="img-wrap">
                <img src={thumbnailImage} alt={name} />
                <div className="overlay">
                    <button className="icon-btn">
                        <BsSuitHeart />
                    </button>
                    <button className="icon-btn">
                        <BsCart2 />
                    </button>
                </div>
                <h3>{name}</h3>
                <div className="price-box">
                    <p className="discount">{price}원</p>
                    <p className="price">
                        <span>10%</span>45,800원
                    </p>
                </div>
            </div>
        </li>
    );
};

export default GiftListItem;
