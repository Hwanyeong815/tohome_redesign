import { useSelector } from 'react-redux';
import { ContentStyle, ContentUl } from '../style';

const Content3 = () => {
    // const { products } = useSelector((state) => state.cart);
    return (
        <ContentStyle>
            <section>
                <div>배너/식품관소개</div>
            </section>
            <section>브랜드로 만나는 미식의 깊이</section>
            <section>투홈 새벽배송</section>
        </ContentStyle>
    );
};

export default Content3;
