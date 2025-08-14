import { ProductItemStyle } from './style';
import { BsCart2, BsSuitHeart } from 'react-icons/bs';

const ProductItem = ({ product }) => {
    const { id, name, price, thumbnailImage } = product;
    return (
        <ProductItemStyle className="img-wrap">
            <div className="img-wrap">
                <img src={thumbnailImage} alt="" />
                <div className="overlay">
                    <button className="icon-btn">
                        <BsSuitHeart />
                    </button>
                    <button className="icon-btn">
                        <BsCart2 />
                    </button>
                </div>
            </div>

            <h2>{name}</h2>
            <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
        </ProductItemStyle>
    );
};

export default ProductItem;
