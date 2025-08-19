import { useSelector } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import CategoryList from './CategoryList';
import { CategoryBoxWrap } from './style';
import { useState } from 'react';

const CategoryBox = ({ categoryID, selectedSub }) => {
    const categories = useSelector((state) => state.category.categories);
    const products = categories[categoryID]?.products || [];
    const unifiedProducts = products.map((u) => ({
        ...u,
        id:
            u.fruitId ||
            u.grainId ||
            u.seafoodId ||
            u.meatId ||
            u.riceId ||
            u.sideId ||
            u.seasoningId ||
            u.bakeryId ||
            u.snackId ||
            u.liquidId,
    }));

    const [priceRange, setPriceRange] = useState([]);
    const [deliveryTypes, setDeliveryTypes] = useState([]);

    const priceMap = {
        '~5천원': [0, 5000],
        '5천원~1만원': [5000, 10000],
        '1~2만원': [10000, 20000],
        '2~3만원': [20000, 30000],
        '3~4만원': [30000, 40000],
        '5만원 이상': [50000, null],
    };
    let filtered = unifiedProducts;
    if (selectedSub) {
        filtered = filtered.filter((p) => p.category.sub === selectedSub);
    }
    if (priceRange.length > 0) {
        filtered = filtered.filter((p) =>
            priceRange.some((label) => {
                const [min, max] = priceMap[label];
                if (max === null) return p.price >= min;
                return p.price >= min && p.price < max;
            })
        );
    }
    if (deliveryTypes.length > 0 && !deliveryTypes.includes('전체')) {
        filtered = filtered.filter((p) => deliveryTypes.includes(p.details.deliveryType));
    }

    return (
        <CategoryBoxWrap>
            <CategoryFilter setPriceRange={setPriceRange} setDeliveryTypes={setDeliveryTypes} />
            <CategoryList products={filtered} />
        </CategoryBoxWrap>
    );
};

export default CategoryBox;
