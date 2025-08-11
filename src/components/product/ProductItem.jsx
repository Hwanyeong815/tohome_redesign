import { ProductItemStyle } from './style';

const ProductItem = ({ product }) => {
    const { id, name, price, thumbnailImage } = product;
    return (
        <ProductItemStyle>
            <img src={thumbnailImage} alt="" />
            <h2>{name}</h2>
            <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
        </ProductItemStyle>
    );
};

export default ProductItem;
