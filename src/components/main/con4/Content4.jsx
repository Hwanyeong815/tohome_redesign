import { useSelector } from 'react-redux';

import { ContentStyle } from '../style';
import { Content4Style } from './style';

const Content4 = () => {
    const { products } = useSelector((state) => state.cart);
    // const newRecom = products.filter((product) =>
    //     product.tags?.some((tag) => tag.name === '제철과일' && tag.rank <= 5)
    // );
    return (
        <ContentStyle>
            <Content4Style>
                <section className="side-dish-wrap">
                    <h2 className="main-title">투홈 반찬구독</h2>
                </section>
                <section className="health-sub-wrap">
                    <h2 className="main-title">투홈 건강식품구독</h2>
                </section>
            </Content4Style>
        </ContentStyle>
    );
};

export default Content4;
