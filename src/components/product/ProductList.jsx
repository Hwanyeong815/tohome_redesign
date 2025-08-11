import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { ProductStyle } from './style';

const ProductList = () => {
    const { products } = useSelector((state) => state.cart);

    const bestTop5 = products.filter((product) =>
        product.tags?.some((tag) => tag.name === '베스트' && tag.rank <= 5)
    );

    return (
        <ProductStyle>
            {bestTop5.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ProductStyle>
    );
};

export default ProductList;
