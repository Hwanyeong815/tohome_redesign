import { useSelector } from 'react-redux';
import { CategoryTopWrap, CategorySub } from './style';

const categoryIcons = {
    fruit: 'menu_icon_01.png',
    grain: 'menu_icon_02.png',
    seafood: 'menu_icon_03.png',
    meat: 'menu_icon_04.png',
    rice: 'menu_icon_05.png',
    side: 'menu_icon_06.png',
    seasoning: 'menu_icon_07.png',
    bakery: 'menu_icon_08.png',
    snack: 'menu_icon_09.png',
    liquid: 'menu_icon_10.png',
};

const CategoryTop = ({ categoryID, onSelectSub, selectedSub }) => {
    // ✅ cart.categories 사용
    const categories = useSelector((state) => state.cart.categories);
    const categoryData = categories?.[categoryID];

    const title = categoryData?.products?.[0]?.category?.main || '카테고리';
    const subCategories = categoryData
        ? [...new Set(categoryData.products.map((p) => p.category?.sub).filter(Boolean))]
        : [];

    const iconSrc = categoryIcons[categoryID]
        ? `/images/category/${categoryIcons[categoryID]}`
        : undefined;

    return (
        <>
            <CategoryTopWrap>
                <h2 className="categoty-title">
                    {iconSrc && <img src={iconSrc} alt={title} />}
                    {title}
                </h2>
            </CategoryTopWrap>
            <CategorySub>
                <li className="show-all" onClick={() => onSelectSub(null)}>
                    전체보기
                </li>
                {subCategories.map((sub, idx) => (
                    <li
                        key={idx}
                        className={selectedSub === sub ? 'active' : ''}
                        onClick={() => onSelectSub(sub)}
                    >
                        {sub}
                    </li>
                ))}
            </CategorySub>
        </>
    );
};

export default CategoryTop;
