import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { ProductStyle } from './style';
import { useEffect, useState } from 'react';

const ProductList = ({ products = [] }) => {
    const [visibleCount, setVisibleCount] = useState(8); // 처음 8개만 보여주기

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        // 화면 끝에 도달했을 때
        if (scrollTop + windowHeight >= fullHeight - 50) {
            setVisibleCount((prev) => Math.min(prev + 8, products.length));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [products]);
    return (
        <ProductStyle>
            {products.slice(0, visibleCount).map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ProductStyle>
    );
};

export default ProductList;
