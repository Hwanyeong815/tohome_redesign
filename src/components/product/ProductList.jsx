import ProductItem from './ProductItem';
import { ProductListStyle } from './style';
import { useEffect, useState } from 'react';

const ProductList = ({ products = [] }) => {
    const [visibleCount, setVisibleCount] = useState(15); // 처음 8개만 보여주기

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= (fullHeight * 2) / 3) {
            setVisibleCount((prev) => Math.min(prev + 5, products.length));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [products]);
    return (
        <ProductListStyle>
            {products.slice(0, visibleCount).map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ProductListStyle>
    );
};

export default ProductList;
