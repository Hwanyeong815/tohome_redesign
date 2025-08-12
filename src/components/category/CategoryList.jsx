import CategoryItem from './CategoryItem';
import { CategoryListWrap, CategoryItemWrap } from './style';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    return (
        <CategoryListWrap>
            <div>
                <ul className="category-sort">
                    <li>
                        <Link to="/">전체보기</Link>
                    </li>
                    <li>
                        <Link to="/">계절 과일</Link>
                    </li>
                    <li>
                        <Link to="/">일상 채소</Link>
                    </li>
                    <li>
                        <Link to="/">버섯·나물·두부</Link>
                    </li>
                </ul>
            </div>
            <div className="category-item-wrap">
                <CategoryItemWrap>
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                </CategoryItemWrap>
            </div>
        </CategoryListWrap>
    );
};

export default CategoryList;
