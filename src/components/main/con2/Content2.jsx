import { useSelector } from 'react-redux';

import { ContentStyle } from '../style';

import MainRecom from './MainRecom';
import { Content2Style, MainRecomStyle } from './style';
import ProductList from '../../product/ProductList';

import { useEffect } from 'react';
import AOS from 'aos';

const Content2 = () => {
    // const { products, menus, gifts, specials } = useSelector((state) => state.cart);
    // const AllMenus = [...products, ...menus, ...gifts, ...specials];
    const { AllDataList } = useSelector((state) => state.cart);

    const seasonFruits = AllDataList.filter((product) =>
        product.tags?.some((tag) => tag.name === '제철과일' && tag.rank <= 5)
    );
    const healingFoods = AllDataList.filter((product) =>
        product.tags?.some((tag) => tag.name === '여름보양식' && tag.rank <= 5)
    );

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <ContentStyle>
            <MainRecomStyle>
                <MainRecom
                    className="mainRecom"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                />
            </MainRecomStyle>
            <Content2Style>
                <section data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <h2 className="main-title">여름의 달콤한 위로, 제철 과일</h2>
                    <h3 className="sub-title">한입 가득 퍼지는 여름 햇살의 맛</h3>
                    <ProductList products={seasonFruits} showCheckbox={false} />
                    <div className="btn">
                        <button>베스트 상품 더보기</button>
                    </div>
                </section>
                <section data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <h2 className="main-title">몸을 채우는 여름 보양식</h2>
                    <h3 className="sub-title">지친 여름에 꼭 필요한 한 상차림</h3>
                    <ProductList products={healingFoods} showCheckbox={false} />
                    <div className="btn">
                        <button>베스트 상품 더보기</button>
                    </div>
                </section>
            </Content2Style>
        </ContentStyle>
    );
};

export default Content2;
