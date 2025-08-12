import { useSelector } from 'react-redux';
import { ContentStyle, ContentUl } from '../style';
import RecipeLi from './RecipeLi';

const Content5 = () => {
    const { products } = useSelector((state) => state.cart);
    const todayRecipe = products.filter((product) =>
        product.tags?.some((tag) => tag.name === '오늘의레시피' && tag.rank <= 5)
    );
    return (
        <ContentStyle>
            <section>
                오늘의 레시피
                {/* <ContentUl>
                    {todayRecipe.map((product) => (
                        <RecipeLi key={product.id} product={product} />
                    ))}
                </ContentUl> */}
            </section>
            <section>선물하기</section>x{' '}
        </ContentStyle>
    );
};

export default Content5;
