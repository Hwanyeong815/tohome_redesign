import { BsCart2, BsSuitHeart } from 'react-icons/bs';

const CategoryItem = ({ product }) => {
    const {
        thumbnailImage,
        name,
        price,
        discountedPrice,
        isDiscounted,
        discountRate,
    } = product;
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
            </div>
            <h3>{name}</h3>
            <div className="price-box">
                {isDiscounted && (
                    <p className="discount">{discountedPrice}원</p>
                )}
                <p className="price">
                    {isDiscounted && <span>{discountRate}%</span>}
                    {price}원
                </p>
            </div>
        </li>
    );
};

export default CategoryItem;
