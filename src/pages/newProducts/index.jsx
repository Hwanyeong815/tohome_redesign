import { useSelector } from 'react-redux';

import { NewProductsWrap } from './style';
import ProductList from '../../components/product/ProductList';
import TopSection from '../../components/topSection/TopSection';
import { useState } from 'react';

const NewProducts = () => {
    const { products, menus, specials } = useSelector((state) => state.cart);
    const AllMenus = [...products, ...menus, ...specials];

    const newProductsUl = AllMenus.filter((product) =>
        product.tags?.some((tag) => tag.name === '신상품')
    ).filter((product, index, self) => index === self.findIndex((p) => p.name === product.name));

    const [sortType, setSortType] = useState('판매량순');

    const sortedNewProducts = () => {
        switch (sortType) {
            case '판매량순':
                return [...newProductsUl].sort((a, b) => {
                    if (a.rank === b.rank)
                        return newProductsUl.indexOf(a) - newProductsUl.indexOf(b);
                    return b.rank - a.rank;
                });
            case '신상품순':
                return [...newProductsUl]
                    .filter((product) => product.tags?.some((tag) => tag.name === '신상품'))
                    .sort((a, b) => {
                        if (a.rank === b.rank)
                            return newProductsUl.indexOf(a) - newProductsUl.indexOf(b);
                        return b.rank - a.rank;
                    });
            case '높은가격순':
                return [...newProductsUl].sort((a, b) => {
                    const priceA = a.discountedPrice || a.price;
                    const priceB = b.discountedPrice || b.price;
                    return priceB - priceA;
                });
            case '낮은가격순':
                return [...newProductsUl].sort((a, b) => {
                    const priceA = a.discountedPrice || a.price;
                    const priceB = b.discountedPrice || b.price;
                    return priceA - priceB;
                });
            default:
                return newProductsUl;
        }
    };

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
                {newProductsUl.length > 0 && (
                    <ProductList products={sortedNewProducts()} showCheckbox={false} />
                )}
            </div>
        </NewProductsWrap>
    );
};

export default NewProducts;
