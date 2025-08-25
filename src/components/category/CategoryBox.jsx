import { useSelector } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import CategoryList from './CategoryList';
import { CategoryBoxWrap } from './style';
import { useState } from 'react';
import ProductList from '../product/ProductList';

// CategoryTop과 동일한 레거시 매핑 & slug
const legacyTitleMap = {
    fruit: '과일·채소',
    grain: '곡물·견과',
    seafood: '생선·해산물·건어물',
    meat: '육류·달걀',
    rice: '밥·국·면',
    side: '밑반찬·간식',
    seasoning: '양념·오일·통조림',
    bakery: '베이커리·치즈',
    snack: '과자·초콜릿·캔디',
    liquid: '물·우유·커피·음료',
};
const slug = (s) =>
    String(s ?? '')
        .normalize('NFKD')
        .replace(/\s+/g, '')
        .replace(/[^\w가-힣·]/g, '')
        .toLowerCase();

const CategoryBox = ({ categoryID, selectedSub }) => {
    const categories = useSelector((state) => state.cart.categories);

    // 1) 바로 키 조회
    let categoryData = categories?.[categoryID];

    // 2) 레거시 키 → 타이틀 매핑 → slug로 조회
    if (!categoryData && legacyTitleMap[categoryID]) {
        const keyByTitle = slug(legacyTitleMap[categoryID]);
        categoryData = categories?.[keyByTitle];
    }

    // 3) 한글/인코딩 라우트 파라미터 대응
    if (!categoryData && categoryID) {
        const decoded = decodeURIComponent(categoryID);
        const keyByDecoded = slug(decoded);
        categoryData = categories?.[keyByDecoded];
    }

    const products = categoryData?.products || [];

    // 기존 fruitId 등 폴백 유지 + num 우선
    const unifiedProducts = products.map((u) => ({
        ...u,
        id:
            u.num ??
            u.fruitId ??
            u.grainId ??
            u.seafoodId ??
            u.meatId ??
            u.riceId ??
            u.sideId ??
            u.seasoningId ??
            u.bakeryId ??
            u.snackId ??
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
        filtered = filtered.filter((p) => p.category?.sub === selectedSub);
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
        filtered = filtered.filter((p) => deliveryTypes.includes(p.details?.deliveryType));
    }

    return (
        <CategoryBoxWrap>
            <CategoryFilter setPriceRange={setPriceRange} setDeliveryTypes={setDeliveryTypes} />
            <CategoryList products={filtered} />
            {/* <ProductList products={filtered} showCheckbox={false} /> */}
        </CategoryBoxWrap>
    );
};

export default CategoryBox;
