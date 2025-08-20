import ProductItem from './ProductItem';
import { ProductListStyle } from './style';
import { useEffect, useState } from 'react';

const ProductList = ({
    products = [],
    showCheckbox = true,
    selectedItems = new Set(),
    onItemSelect,
    onSelectAll,
}) => {
    const [visibleCount, setVisibleCount] = useState(15);

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

    const handleProductItemSelect = (productId, isSelected) => {
        if (onItemSelect) {
            onItemSelect(productId, isSelected);
        }
    };

    return (
        <ProductListStyle>
            {products.slice(0, visibleCount).map((product, idx) => (
                <ProductItem
                    key={String(product.id ?? idx)}
                    product={product}
                    showCheckbox={showCheckbox}
                    isSelected={selectedItems.has(product.id)}
                    onSelect={onItemSelect}
                    idx={idx}
                />
            ))}
        </ProductListStyle>
    );
};

export default ProductList;
