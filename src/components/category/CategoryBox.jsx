import { useSelector } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import CategoryList from './CategoryList';
import { CategoryBoxWrap } from './style';

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
    const filterProducts = selectedSub
        ? unifiedProducts.filter((f) => f.category.sub === selectedSub)
        : unifiedProducts;
    return (
        <CategoryBoxWrap>
            <CategoryFilter />
            <CategoryList products={filterProducts} />
        </CategoryBoxWrap>
    );
};

export default CategoryBox;
