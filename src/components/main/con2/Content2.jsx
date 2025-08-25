import { useSelector } from 'react-redux';

import { ContentStyle } from '../style';

import { Content2Style, MainRecomStyle } from './style';
import ProductList from '../../product/ProductList';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import MainRecom from './MainRecom';
import { useNavigate } from 'react-router-dom';

const Content2 = () => {
<<<<<<< HEAD
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    // const { products, menus, gifts, specials } = useSelector((state) => state.cart);
    // const AllMenus = [...products, ...menus, ...gifts, ...specials];
=======
    const navigate = useNavigate();

    const onGo = () => {
        navigate('/category/fruit');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

>>>>>>> e652e0925ede9dbcaf5aab8bce0bfda96974a649
    const { AllDataList } = useSelector((state) => state.cart);

    const seasonFruits = AllDataList.filter((product) =>
        product.tags?.some((tag) => tag.name === '제철과일' && tag.rank <= 5)
    );
    const seasonFruits6 = AllDataList.filter((product) =>
        product.tags?.some((tag) => tag.name === '제철과일' && tag.rank <= 6)
    );

    const healingFoods = AllDataList.filter((product) =>
        product.tags?.some((tag) => tag.name === '여름보양식' && tag.rank <= 5)
    );
    const healingFoods6 = AllDataList.filter((product) =>
        product.tags?.some((tag) => tag.name === '여름보양식' && tag.rank <= 6)
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
<<<<<<< HEAD
                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                >
                    <h2 className="main-title">
                        여름의 달콤한 위로, 제철 과일
                    </h2>
                    <h3 className="sub-title">
                        한입 가득 퍼지는 여름 햇살의 맛
                    </h3>
                    {isMobile ? (
                        <div className="productWrap">
                            <ProductList
                                products={seasonFruits6}
                                showCheckbox={false}
                            />
                        </div>
                    ) : (
                        <ProductList
                            products={seasonFruits}
                            showCheckbox={false}
                        />
                    )}
=======
                <section data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <h2 className="main-title">여름의 달콤한 위로, 제철 과일</h2>
                    <h3 className="sub-title">한입 가득 퍼지는 여름 햇살의 맛</h3>
                    <div className="btn-wrap">
                        <button className="more" onClick={onGo}>
                            전체보기
                        </button>
                    </div>
                    <ProductList
                        products={seasonFruits}
                        showCheckbox={false}
                        className="product-list"
                    />
>>>>>>> e652e0925ede9dbcaf5aab8bce0bfda96974a649
                    <div className="btn">
                        <button>베스트 상품 더보기</button>
                    </div>
                </section>
                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
<<<<<<< HEAD
                >
                    <h2 className="main-title">몸을 채우는 여름 보양식</h2>
                    <h3 className="sub-title">
                        지친 여름에 꼭 필요한 한 상차림
                    </h3>
                    {isMobile ? (
                        <div className="productWrap">
                            <ProductList
                                products={healingFoods6}
                                showCheckbox={false}
                            />
                        </div>
                    ) : (
                        <ProductList
                            products={healingFoods}
                            showCheckbox={false}
                        />
                    )}
                    {/* <ProductList products={healingFoods} showCheckbox={false} /> */}
=======
                    className="product-list"
                >
                    <h2 className="main-title">몸을 채우는 여름 보양식</h2>
                    <h3 className="sub-title">지친 여름에 꼭 필요한 한 상차림</h3>
                    <div className="btn-wrap">
                        <button className="more">전체보기</button>
                    </div>
                    <ProductList products={healingFoods} showCheckbox={false} />
>>>>>>> e652e0925ede9dbcaf5aab8bce0bfda96974a649
                    <div className="btn">
                        <button>베스트 상품 더보기</button>
                    </div>
                </section>
            </Content2Style>
        </ContentStyle>
    );
};

export default Content2;
