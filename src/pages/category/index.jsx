import CategoryBox from '../../components/category/CategoryBox';
import CategoryTop from '../../components/category/CategoryTop';
import { CategoryWrap } from './style';

const Category = () => {
    return (
        <CategoryWrap>
            <CategoryTop />
            <CategoryBox />
        </CategoryWrap>
    );
};

export default Category;
