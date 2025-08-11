import { useSelector } from 'react-redux';

import { ContentStyle, ContentUl } from '../style';

const Content4 = () => {
    const { products } = useSelector((state) => state.cart);
    // const newRecom = products.filter((product) =>
    //     product.tags?.some((tag) => tag.name === '제철과일' && tag.rank <= 5)
    // );
    return (
        <ContentStyle>
            <section>투홈 반찬구독</section>
            <section>투홈 건강식품구독</section>
        </ContentStyle>
    );
};

export default Content4;
