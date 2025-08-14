import { useSelector } from 'react-redux';
import BestList from '../../components/best/BestList';
import { BestWrap } from './style';
import ProductList from '../../components/product/ProductList';
import TopSection from '../../components/topSection/TopSection';

const Best = () => {
    const { products, menus, gifts, specials } = useSelector((state) => state.cart);
    const AllMenus = [...products, ...menus, ...gifts, ...specials];

    // const brandDelivery = AllMenus.filter(
    //     (product) => product.details?.deliveryType === '브랜드직송'
    // );

    const brandDelivery = AllMenus.filter(
        (product) => product.details?.deliveryType === '브랜드직송'
    ).slice(0, 40); // 처음 40개만

    // const bestUl = AllMenus.filter((product) => product.tags?.some((tag) => tag.name === '베스트'));

    return (
        <BestWrap>
            <div className="inner">
                <TopSection
                    borderTop={false}
                    borderBottom={false}
                    className="top-line"
                    title={'투홈 베스트'}
                    subtitle={'현대식품관 투홈의 인기 상품을 만나보세요'}
                />

                <ProductList products={brandDelivery} />
                {/* <BestList products={bestUl} /> */}
            </div>
        </BestWrap>
    );
};

export default Best;
