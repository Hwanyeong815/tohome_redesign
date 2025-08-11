import { useSelector } from 'react-redux';

import { ContentStyle, ContentUl } from '../style';
import SeasonLi from './SeasonLi';
import HealFoodLi from './HealFoodLi';
import RecommendLi from './MainRecom';
import MainRecom from './MainRecom';
import { MainRecomStyle } from './style';

const Content2 = () => {
    const { products } = useSelector((state) => state.cart);

    const seasonFruits = products.filter((product) =>
        product.tags?.some((tag) => tag.name === '제철과일' && tag.rank <= 5)
    );
    const healingFoods = products.filter((product) =>
        product.tags?.some((tag) => tag.name === '여름보양식' && tag.rank <= 5)
    );

    return (
        <ContentStyle>
            <MainRecomStyle>
                <h2 className="main-title">추천상품</h2>
                {/* <h3 className="sub-title">좋은 한끼를 위한 MD의 작은 제안</h3> */}

                <MainRecom className="mainRecom" />
            </MainRecomStyle>
            <section>
                <h2 className="main-title">제철과일</h2>
                <h3 className="sub-title">한입 가득 퍼지는 여름 햇살의 맛</h3>
                <ContentUl>
                    {seasonFruits.map((product) => (
                        <SeasonLi key={product.id} product={product} />
                    ))}
                </ContentUl>
            </section>
            <section>
                <h2 className="main-title">몸을 채우는 여름 보양식</h2>
                <h3 className="sub-title">지친 여름에 꼭 필요한 한 상차림</h3>
                <ContentUl>
                    {healingFoods.map((product) => (
                        <HealFoodLi key={product.id} product={product} />
                    ))}
                </ContentUl>
            </section>
        </ContentStyle>
    );
};

export default Content2;
