import { useSelector } from 'react-redux';
import { CategoryTopWrap, CategorySub } from './style';

const CategoryTop = ({ categoryID, onSelectSub }) => {
    const categories = useSelector((state) => state.category.categories);
    const categoryData = categories[categoryID];
    const title = categoryData?.products[0]?.category.main || '카테고리';
    const subCategories = categoryData
        ? [...new Set(categoryData.products.map((p) => p.category.sub))]
        : [];
    return (
        <>
            <CategoryTopWrap>
                <h2 className="categoty-title">
                    <img src="/images/category/menu_icon_01.png" alt="" />
                    {title}
                </h2>
            </CategoryTopWrap>
            <CategorySub>
                <li className="show-all" onClick={() => onSelectSub(null)}>
                    전체보기
                </li>
                {subCategories.map((sub, idx) => (
                    <li key={idx} onClick={() => onSelectSub(sub)}>
                        {sub}
                    </li>
                ))}
            </CategorySub>
        </>
    );
};

export default CategoryTop;
