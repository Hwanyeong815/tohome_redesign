import { useSelector } from 'react-redux';
import { SaleWrap } from './style';
import TopSection from '../../components/topSection/TopSection';
import ProductList from '../../components/product/ProductList';
import { useState } from 'react';

const Sale = () => {
    const { products, menus, specials } = useSelector((state) => state.cart);
    const AllMenus = [...products, ...menus, ...specials];

    const saleUl = AllMenus.filter(
        (product) => product.tags?.some((tag) => tag.name === '베스트') && product.discountedPrice
    ).filter((product, index, self) => index === self.findIndex((p) => p.name === product.name));

    const [sortType, setSortType] = useState('판매량순');

    const sortedSale = () => {
        switch (sortType) {
            case '판매량순':
                return [...saleUl].sort((a, b) => {
                    if (a.rank === b.rank) return saleUl.indexOf(a) - saleUl.indexOf(b);
                    return b.rank - a.rank;
                });
            case '신상품순':
                return [...saleUl]
                    .filter((product) => product.tags?.some((tag) => tag.name === '신상품'))
                    .sort((a, b) => {
                        if (a.rank === b.rank) return saleUl.indexOf(a) - saleUl.indexOf(b);
                        return b.rank - a.rank;
                    });
            case '높은가격순':
                return [...saleUl].sort((a, b) => {
                    const priceA = a.discountedPrice || a.price;
                    const priceB = b.discountedPrice || b.price;
                    return priceB - priceA;
                });
            case '낮은가격순':
                return [...saleUl].sort((a, b) => {
                    const priceA = a.discountedPrice || a.price;
                    const priceB = b.discountedPrice || b.price;
                    return priceA - priceB;
                });
            default:
                return saleUl;
        }
    };

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
                <div className="filter-wrap">
                    {['판매량순', '신상품순', '높은가격순', '낮은가격순'].map((type) => (
                        <p
                            key={type}
                            onClick={() => setSortType(type)}
                            className={sortType === type ? 'on' : ''}
                        >
                            {type}
                        </p>
                    ))}
                </div>
                <ProductList products={sortedSale()} showCheckbox={false} />
            </div>
        </SaleWrap>
    );
};

export default Sale;
