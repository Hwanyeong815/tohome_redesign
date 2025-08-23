import { useSelector } from 'react-redux';
import { ContentStyle } from '../style';
import BestMenuLi from './BestMenuLi';
import { MainCon1Style } from './style';
import Slider from 'react-slick';
import MainNewPro from './MainNewPro';
import { useState } from 'react';
import ProductList from '../../product/ProductList';

const settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
};

const Content1 = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const { products } = useSelector((state) => state.cart);
    const bestTop5 = products.filter((product) =>
        product.tags?.some((tag) => tag.name === '베스트' && tag.rank <= 5)
    );
    const bestTop6 = products.filter((product) =>
        product.tags?.some((tag) => tag.name === '베스트' && tag.rank <= 6)
    );
    const newRecom = products.filter((product) =>
        product.tags?.some((tag) => tag.name === '신상품' && tag.rank <= 3)
    );

    return (
        <ContentStyle>
            <div className="inner">
                <MainCon1Style>
                    <section
                        className="main-best-wrap"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                    >
                        <h2 className="main-title">베스트 메뉴</h2>
                        <h3 className="sub-title">지금 가장 사랑받는 메뉴, 한눈에 담아보세요</h3>
                        <Slider {...settings1} className="ul">
                            {bestTop5.map((product) => (
                                <BestMenuLi key={product.id} product={product} />
                            ))}
                        </Slider>
                    </section>
                    <section
                        className="main-newPro-wrap"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                    >
                        <h2 className="main-title">신상품</h2>
                        <h3 className="sub-title">
                            현대식품관에서 처음 선보이는 오늘 막 도착한 신상품
                        </h3>

                        <MainNewPro newRecom={newRecom} />
                    </section>
                </MainCon1Style>
            </div>
        </ContentStyle>
    );
};

export default Content1;
