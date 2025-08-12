import CategoryFilter from './CategoryFilter';
import CategoryList from './CategoryList';
import { CategoryBoxWrap } from './style';

const CategoryBox = () => {
    return (
        <CategoryBoxWrap>
            <CategoryFilter />
            <CategoryList />
        </CategoryBoxWrap>
    );
};

export default CategoryBox;
