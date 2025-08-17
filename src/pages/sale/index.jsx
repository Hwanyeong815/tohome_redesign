import { useSelector } from 'react-redux';
import { SaleWrap } from './style';
import TopSection from '../../components/topSection/TopSection';
import ProductList from '../../components/product/ProductList';

const Sale = () => {
    const { products, menus, gifts, specials } = useSelector((state) => state.cart);
    const AllMenus = [...products, ...menus, ...gifts, ...specials];

    const saleUl = AllMenus.filter((product) => Number(product.discountedPrice) > 0);

    return (
        <SaleWrap>
            <div className="inner">
                <section className="top-wrap">
                    <TopSection
                        $borderTop="none"
                        $borderBottom="none"
                        className="top-line"
                        title={'세일'}
                        subtitle={'특별한 가격으로 만나는 상품, 지금이 가장 좋은 기회예요.'}
                    />
                </section>
                <ProductList products={saleUl} />
            </div>
        </SaleWrap>
    );
};

export default Sale;
