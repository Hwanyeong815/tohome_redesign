import { useSelector } from 'react-redux';

import { ContentStyle, ContentUl } from '../style';
import SeasonLi from './SeasonLi';
import HealFoodLi from './HealFoodLi';
import MainRecom from './MainRecom';
import { MainRecomStyle } from './style';
import ProductList from '../../product/ProductList';

const Content2 = () => {
    const { products, menus, gifts, specials } = useSelector((state) => state.cart);
    const AllMenus = [...products, ...menus, ...gifts, ...specials];

    const seasonFruits = AllMenus.filter((product) =>
        product.tags?.some((tag) => tag.name === '제철과일' && tag.rank <= 5)
    );
    const healingFoods = AllMenus.filter((product) =>
        product.tags?.some((tag) => tag.name === '여름보양식' && tag.rank <= 5)
    );

    return (
        <ContentStyle>
            <MainRecomStyle>
                <MainRecom className="mainRecom" />
            </MainRecomStyle>
            <section>
                <h2 className="main-title">여름의 달콤한 위로, 제철 과일</h2>
                <h3 className="sub-title">한입 가득 퍼지는 여름 햇살의 맛</h3>
                <ProductList products={seasonFruits} />
                {/* <ContentUl>
                    {seasonFruits.map((product) => (
                        <SeasonLi key={product.id} product={product} />
                    ))}
                </ContentUl> */}
            </section>
            <section>
                <h2 className="main-title">몸을 채우는 여름 보양식</h2>
                <h3 className="sub-title">지친 여름에 꼭 필요한 한 상차림</h3>
                <ProductList products={healingFoods} />
                {/* <ContentUl>
                    {healingFoods.map((product) => (
                        <HealFoodLi key={product.id} product={product} />
                    ))}
                </ContentUl> */}
            </section>
        </ContentStyle>
    );
};

export default Content2;
