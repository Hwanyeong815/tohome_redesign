import ProductItem from './ProductItem';
import { ProductStyle } from './style';

const ProductList = ({ products = [] }) => {
    return (
        <ProductStyle>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ProductStyle>
    );
};

export default ProductList;
