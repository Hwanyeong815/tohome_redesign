import { useSelector } from 'react-redux';

import { ContentStyle } from '../style';

import MainRecom from './MainRecom';
import { MainRecomStyle } from './style';
import ProductList from '../../product/ProductList';

import { useEffect } from 'react';
import AOS from 'aos';

const Content2 = () => {
    const { products, menus, gifts, specials } = useSelector((state) => state.cart);
    const AllMenus = [...products, ...menus, ...gifts, ...specials];

    const seasonFruits = AllMenus.filter((product) =>
        product.tags?.some((tag) => tag.name === '제철과일' && tag.rank <= 5)
    );
    const healingFoods = AllMenus.filter((product) =>
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
            <section data-aos="fade-up" data-aos-anchor-placement="top-center">
                <h2 className="main-title">여름의 달콤한 위로, 제철 과일</h2>
                <h3 className="sub-title">한입 가득 퍼지는 여름 햇살의 맛</h3>
                <ProductList products={seasonFruits} showCheckbox={false} />
            </section>
            <section data-aos="fade-up" data-aos-anchor-placement="top-center">
                <h2 className="main-title">몸을 채우는 여름 보양식</h2>
                <h3 className="sub-title">지친 여름에 꼭 필요한 한 상차림</h3>
                <ProductList products={healingFoods} showCheckbox={false} />
            </section>
        </ContentStyle>
    );
};

export default Content2;
