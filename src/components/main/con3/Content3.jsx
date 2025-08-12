import { useSelector } from 'react-redux';
import { ContentStyle } from '../style';
import { Content3Style } from './style';
import { Link, useNavigate } from 'react-router-dom';

const Content3 = () => {
    // const { products } = useSelector((state) => state.cart);

    const navigate = useNavigate();
    const onClick = () => {
        navigate('/about');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <ContentStyle>
            <Content3Style>
                <section onClick={onClick} className="main-about">
                    <h2>현대식품관 BRAND STORY</h2>
                    <div>
                        <p>“정성으로 차린 식탁,</p>
                        <p>일상에 특별함을 더하다”</p>
                    </div>
                    <img src="images/main/main_about.png" alt="" />
                    <button className="main-about-btn">브랜드 소개</button>
                </section>

                <section className="brand-about">
                    <h2 className="main-title">브랜드로 만나는 미식의 깊이</h2>
                    <strong>Connecting Taste & Story</strong>
                    <div className="txts">
                        <p>
                            전통과 혁신, 지역과 일상, 미식과 기술을 잇는 현대식품관의 특화브랜드를
                            소개합니다. <br /> ‘명인명촌, 원테이블, 동행마켓, 예향’ <br /> 각기 다른
                            철학과 가치를 담은 네 가지 브랜드를 통해 <br />
                            풍요로운 식문화의 깊이를 경험해보세요.
                        </p>
                    </div>
                    <div className="brand-about-banner">
                        <div className="img-box">
                            <img src="/images/main/main_brand1.png" alt="" />
                            <img src="/images/main/main_brand1t.png" alt="" />
                            <p>우리 음식의 고유한 원형을 식탁에 전하는 명인명촌</p>
                            <button>
                                자세히보기 <img src="images/icon/icon_all_w.png" alt="" />
                            </button>
                        </div>
                        <div className="img-box">
                            <img src="/images/main/main_brand2.png" alt="" />
                            <img src="/images/main/main_brand2t.png" alt="" />
                            <p>우리 음식의 고유한 원형을 식탁에 전하는 명인명촌</p>
                            <button>
                                자세히보기 <img src="images/icon/icon_all_w.png" alt="" />
                            </button>
                        </div>
                        <div className="img-box">
                            <img src="/images/main/main_brand3.png" alt="" />
                            <img src="/images/main/main_brand3t.png" alt="" />
                            <p>우리 음식의 고유한 원형을 식탁에 전하는 명인명촌</p>
                            <button>
                                자세히보기 <img src="images/icon/icon_all_w.png" alt="" />
                            </button>
                        </div>
                        <div className="img-box">
                            <img src="/images/main/main_brand4.png" alt="" />
                            <img src="/images/main/main_brand4t.png" alt="" />
                            <p>우리 음식의 고유한 원형을 식탁에 전하는 명인명촌</p>
                            <button>
                                자세히보기 <img src="images/icon/icon_all_w.png" alt="" />
                            </button>
                        </div>
                    </div>
                </section>
                <section className="main-dawn-wrap">
                    <div>
                        <img src="images/main/main_dawn.png" alt="" />
                        <div className="txts">
                            <h2>투홈 새벽배송</h2>
                            <p>“월요일부터 일요일까지 하루도 빠짐없이</p>
                            <p>투홈은 새벽을 부지런히 달립니다.”</p>
                        </div>
                    </div>
                </section>
            </Content3Style>
        </ContentStyle>
    );
};

export default Content3;
