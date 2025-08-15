import { useDispatch, useSelector } from 'react-redux';
import CategoryItem from './CategoryItem';
import { CategoryListWrap, CategoryItemWrap } from './style';
import { categoryActions } from '../../store/modules/categorySlice';

const CategoryList = ({ products }) => {
    const dispatch = useDispatch();
    const sortType = useSelector((state) => state.category.sortType);
    const handleSort = (type) => {
        dispatch(categoryActions.setSortType(type));
    };
    const sortedProducts = [...products].sort((a, b) => {
        if (sortType === '판매량순') {
            const aRank =
                a.tags.find((t) => t.name === '베스트')?.rank ?? Infinity;
            const bRank =
                b.tags.find((t) => t.name === '베스트')?.rank ?? Infinity;
            return aRank - bRank;
        }
        if (sortType === '신상품순') {
            const aRank =
                a.tags.find((t) => t.name === '신상품')?.rank ?? Infinity;
            const bRank =
                b.tags.find((t) => t.name === '신상품')?.rank ?? Infinity;
            return aRank - bRank;
        }
        if (sortType === '높은가격순') {
            return b.price - a.price;
        }
        if (sortType === '낮은가격순') {
            return a.price - b.price;
        }
    });
    return (
        <CategoryListWrap>
            <div>
                <ul className="category-sort">
                    {['판매량순', '신상품순', '높은가격순', '낮은가격순'].map(
                        (type) => (
                            <li
                                key={type}
                                className={sortType === type ? 'active' : ''}
                                onClick={() => handleSort(type)}
                            >
                                {type}
                            </li>
                        )
                    )}
                </ul>
            </div>
            <div className="category-item-wrap">
                <CategoryItemWrap>
                    {sortedProducts.map((item) => (
                        <CategoryItem key={item.id} product={item} />
                    ))}
                </CategoryItemWrap>
            </div>
        </CategoryListWrap>
    );
};

export default CategoryList;
