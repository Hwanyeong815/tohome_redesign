import CategoryItem from './CategoryItem';
import { CategoryListWrap, CategoryItemWrap } from './style';
import { Link } from 'react-router-dom';

const CategoryList = ({ products }) => {
    return (
        <CategoryListWrap>
            <div>
                <ul className="category-sort">
                    <li>
                        <Link to="/">판매량순</Link>
                    </li>
                    <li>
                        <Link to="/">신상품순</Link>
                    </li>
                    <li>
                        <Link to="/">높은가격순</Link>
                    </li>
                    <li>
                        <Link to="/">낮은가격순</Link>
                    </li>
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
