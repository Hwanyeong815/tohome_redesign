import { useSelector } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import CategoryList from './CategoryList';
import { CategoryBoxWrap } from './style';

const CategoryBox = ({ categoryID }) => {
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
    return (
        <CategoryBoxWrap>
            <CategoryFilter />
            <CategoryList products={unifiedProducts} />
        </CategoryBoxWrap>
    );
};

export default CategoryBox;
