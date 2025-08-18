import { Link, useNavigate } from 'react-router-dom';
import { ProductItemStyle } from './style';
import { BsCart2, BsSuitHeart } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        // 모든 클릭이 productDetail 페이지로 이동
        navigate(`/product/${product.id}`);
    };
    const {
        thumbnailImage,
        name,
        price,
        discountedPrice,
        isDiscounted,
        discountRate,
        des,
        info,
        thumbs,
    } = product;
    return (
        <ProductItemStyle className="img-wrap">
            <li>
                <div className="img-wrap">
                    {thumbnailImage && <img src={thumbnailImage} alt={name} />}
                    {thumbs && <img src={thumbs} alt={name} />}

                    <div className="overlay">
                        <button className="icon-btn">
                            <BsSuitHeart />
                        </button>
                        <button
                            className="icon-btn"
                            onClick={() => dispatch(cartActions.addToCart(product))}
                        >
                            <BsCart2 />
                        </button>
                    </div>
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
            </li>
        </ProductItemStyle>
    );
};

export default ProductItem;
