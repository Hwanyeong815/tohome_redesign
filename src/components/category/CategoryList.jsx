import CategoryItem from './CategoryItem';
import { CategoryListWrap, CategoryItemWrap } from './style';
import { Link } from 'react-router-dom';

const CategoryList = ({ products }) => {
    return (
        <CategoryListWrap>
            <div>
                <ul className="category-sort">
                    <li>판매량순</li>
                    <li>신상품순</li>
                    <li>높은가격순</li>
                    <li>낮은가격순</li>
                </ul>
            </div>
            <div className="category-item-wrap">
                <CategoryItemWrap>
                    {products.map((item) => (
                        <CategoryItem key={item.id} product={item} />
                    ))}
                </CategoryItemWrap>
            </div>
        </CategoryListWrap>
    );
};

export default CategoryList;
