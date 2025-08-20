import { useSelector } from 'react-redux';
import { BestWrap } from './style';
import ProductList from '../../components/product/ProductList';
import TopSection from '../../components/topSection/TopSection';
import { useState } from 'react';

const Best = () => {
    const { products, menus, specials } = useSelector((state) => state.cart);
    const AllMenus = [...products, ...menus, ...specials];

    const bestUl = AllMenus.filter((product) =>
        product.tags?.some((tag) => tag.name === '베스트')
    ).filter(
        (product, index, self) =>
            index === self.findIndex((p) => p.name === product.name)
    );

    const [sortType, setSortType] = useState('판매량순');

    const sortedBest = () => {
        switch (sortType) {
            case '판매량순':
                return [...bestUl].sort((a, b) => {
                    if (a.rank === b.rank)
                        return bestUl.indexOf(a) - bestUl.indexOf(b);
                    return b.rank - a.rank;
                });
            case '신상품순':
                return [...bestUl]
                    .filter((product) =>
                        product.tags?.some((tag) => tag.name === '신상품')
                    )
                    .sort((a, b) => {
                        if (a.rank === b.rank)
                            return bestUl.indexOf(a) - bestUl.indexOf(b);
                        return b.rank - a.rank;
                    });
            case '높은가격순':
                return [...bestUl].sort((a, b) => {
                    const priceA = a.discountedPrice || a.price;
                    const priceB = b.discountedPrice || b.price;
                    return priceB - priceA;
                });
            case '낮은가격순':
                return [...bestUl].sort((a, b) => {
                    const priceA = a.discountedPrice || a.price;
                    const priceB = b.discountedPrice || b.price;
                    return priceA - priceB;
                });
            default:
                return bestUl;
        }
    };

    return (
        <BestWrap>
            <div className="inner">
                <section className="top-wrap">
                    <TopSection
                        $borderTop="none"
                        $borderBottom="none"
                        className="top-line"
                        title={'투홈 베스트'}
                        subtitle={'현대식품관 투홈의 인기 상품을 만나보세요'}
                    />
                </section>
                <div className="filter">
                    <div className="filter-wrap">
                        {[
                            '판매량순',
                            '신상품순',
                            '높은가격순',
                            '낮은가격순',
                        ].map((type) => (
                            <p
                                key={type}
                                onClick={() => setSortType(type)}
                                className={sortType === type ? 'on' : ''}
                            >
                                {type}
                            </p>
                        ))}
                    </div>
                </div>

                <ProductList products={sortedBest()} showCheckbox={false} />
            </div>
        </BestWrap>
    );
};

export default Best;
