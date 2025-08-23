import ProductItem from './ProductItem';
import { ProductListStyle } from './style';
import { useEffect, useState } from 'react';

const ProductList = ({
    products = [],
    showCheckbox = true,
    selectedItems = new Set(), // Set<number> 권장 (num 저장)
    onItemSelect, // (num: number, checked: boolean) => void
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
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [products.length]);

    const toNum = (p) => {
        const n = Number(p?.num);
        return Number.isFinite(n) ? n : null;
    };

    return (
        <ProductListStyle className="product-list">
            {products.slice(0, visibleCount).map((product, idx) => {
                const num = toNum(product);
                const keyVal = num ?? idx;
                const isSelected = num != null ? selectedItems.has(num) : false;

                return (
                    <ProductItem
                        key={keyVal}
                        product={product}
                        showCheckbox={showCheckbox}
                        isSelected={isSelected}
                        // ✅ 자식에서 체크 상태만 넘기면, 여기서 num을 함께 전달
                        onSelect={(checked) => {
                            if (onItemSelect && num != null) onItemSelect(num, checked);
                        }}
                        idx={idx}
                    />
                );
            })}
        </ProductListStyle>
    );
};

export default ProductList;
