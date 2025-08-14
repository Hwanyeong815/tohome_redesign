import { useParams } from 'react-router-dom';
import CategoryBox from '../../components/category/CategoryBox';
import CategoryTop from '../../components/category/CategoryTop';
import { CategoryWrap } from './style';

const Category = () => {
    const { categoryID } = useParams();
    return (
        <CategoryWrap>
            <CategoryTop categoryID={categoryID} />
            <CategoryBox categoryID={categoryID} />
        </CategoryWrap>
    );
};

export default Category;
