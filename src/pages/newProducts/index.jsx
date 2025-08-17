import { useSelector } from 'react-redux';

import { NewProductsWrap } from './style';
import ProductList from '../../components/product/ProductList';
import TopSection from '../../components/topSection/TopSection';

const NewProducts = () => {
    const { products, menus, gifts, specials } = useSelector((state) => state.cart);
    const AllMenus = [...menus, ...gifts, ...specials];

    const newProductsUl = AllMenus.filter((product) =>
        product.tags?.some((tag) => tag.name === '신상품')
    );

    console.log(AllMenus);

    return (
        <NewProductsWrap>
            <div className="inner">
                <section className="top-wrap">
                    <TopSection
                        $borderTop="none"
                        $borderBottom="none"
                        className="top-line"
                        title={'신상품'}
                        subtitle={'현대식품관에서 처음 선보이는 오늘 막 도착한 신상품'}
                    />
                </section>
                {newProductsUl.length > 0 && <ProductList products={newProductsUl} />}
            </div>
        </NewProductsWrap>
    );
};

export default NewProducts;
