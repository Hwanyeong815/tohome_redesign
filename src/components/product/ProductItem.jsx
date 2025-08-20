import { Link, useNavigate } from 'react-router-dom';
import { ProductItemStyle } from './style';
import { BsCart2, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';
import { useState } from 'react';
import Checkbox from '../../ui/CheckBox';

const ProductItem = ({
    product,
    showCheckbox = true,
    isSelected = false,
    onSelect,
    idx,
    onItemSelect,
}) => {
    const [hoverHeart, setHoverHeart] = useState(false);
    const [clicked, setClicked] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        // 모든 클릭이 productDetail 페이지로 이동
        navigate(`/product/${product.id}`);
        window.scrollTo({ top: 0, left: 0 });
    };

    // const handleChange = (e) => {
    //     onItemSelect(product.id, e.target.checked);
    // };

    const {
        images,
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

    const imgList = thumbnailImage
        ? [thumbnailImage] // thumbnailImage가 있으면 그것만 사용
        : [
              ...(Array.isArray(thumbs) ? thumbs : []), // thumbs 배열 있으면 사용
              ...(Array.isArray(images) ? images : []), // images 배열 있으면 사용
          ].filter(Boolean); // undefined/null 제거

    return (
        <ProductItemStyle>
            <div className="img-wrap">
                {imgList.map((img, idx) => (
                    <img key={idx} src={img} alt={name} />
                ))}

                <div className="overlay">
                    <button
                        className="icon-btn"
                        onMouseEnter={() => setHoverHeart(true)}
                        onMouseLeave={() => setHoverHeart(false)}
                        onClick={() => setClicked((prev) => !prev)} // 클릭 시 toggle
                    >
                        {hoverHeart || clicked ? <BsSuitHeartFill /> : <BsSuitHeart />}
                    </button>
                    <button
                        className="icon-btn"
                        onClick={() => dispatch(cartActions.addToCart(product))}
                    >
                        <BsCart2 />
                    </button>
                </div>
                {showCheckbox && (
                    <Checkbox
                        htmlFor={`recipe-${product.id || idx}`}
                        right={'15px'}
                        top={'15px'}
                        checked={isSelected}
                        onChange={(e) => onSelect(product.id, e.target.checked)}
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
