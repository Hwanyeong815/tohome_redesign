import { useSelector } from 'react-redux';

import { ContentStyle } from '../style';
import { Content4Style } from './style';
import { MdArrowForwardIos } from 'react-icons/md';
import SubscribeLi from './SubscribeLi';
import SubscribeUl from './SubscribeUl';
import { useNavigate } from 'react-router-dom';
import HealthList from './HealthList';
const Content4 = () => {
    const { products } = useSelector((state) => state.cart);
    // const newRecom = products.filter((product) =>
    //     product.tags?.some((tag) => tag.name === '제철과일' && tag.rank <= 5)
    // );
    const navigate = useNavigate();

    const onClick1 = () => {
        navigate('/sideDish');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    const onClick2 = () => {
        navigate('/sideDish');
    };

    return (
        <ContentStyle>
            <Content4Style>
                <section className="side-dish-wrap" onClick={onClick1}>
                    <div className="txts">
                        <h2 className="main-title">투홈 반찬구독</h2>
                        <p>압구정 예향 반찬 구독 (8월 첫째주)</p>
                        <div className="icons-wrap">
                            <div className="icons-box">
                                <img
                                    src="images/icon/icon_sidedish1.png"
                                    alt="images/icon/icon_sidedish1.png"
                                />
                                <p>신선한 식재료</p>
                            </div>
                            <div className="icons-box">
                                <img
                                    src="images/icon/icon_sidedish2.png"
                                    alt="images/icon/icon_sidedish2.png"
                                />
                                <p>정성 가득한 맛</p>
                            </div>
                            <div className="icons-box">
                                <img
                                    src="images/icon/icon_sidedish3.png"
                                    alt="images/icon/icon_sidedish3.png"
                                />
                                <p>신합리적인 가격</p>
                            </div>
                        </div>
                        <button className="more1">
                            반찬 더보기
                            <MdArrowForwardIos />
                        </button>
                    </div>
                    <div className="side-dish-right-wrap">
                        <SubscribeUl />
                    </div>
                </section>
                <section className="health-sub-wrap">
                    <HealthList />
                </section>
            </Content4Style>
        </ContentStyle>
    );
};

export default Content4;
