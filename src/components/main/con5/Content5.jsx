import { useSelector } from 'react-redux';
import { ContentStyle, ContentUl } from '../style';
import RecipeList from './RecipeList';
import { Content05Style } from './style';

const Content5 = () => {
    const { products } = useSelector((state) => state.cart);
    const todayRecipe = products.filter((product) =>
        product.tags?.some((tag) => tag.name === '오늘의레시피' && tag.rank <= 5)
    );
    return (
        <ContentStyle>
            <Content05Style>
                <section className="main-today-reicpe">
                    오늘의 레시피
                    {/* <ContentUl>
                    {todayRecipe.map((product) => (
                        <RecipeList key={product.id} product={product} />
                    ))}
                </ContentUl> */}
                </section>
                <section className="main-gift-wrap">선물하기</section>
            </Content05Style>
        </ContentStyle>
    );
};

export default Content5;
