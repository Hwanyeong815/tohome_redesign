import { useSelector } from 'react-redux';
import ProductList from '../product/ProductList';
import { useState } from 'react';
import { BrandListStyle } from './style';

const BrandList = ({ brandTag }) => {
    const { specials } = useSelector((state) => state.cart);

    // brandTag 기준으로 필터링
    const brandTagMap = {
        Brand1Myeong: '명인명촌',
        Brand2Table: '1TABLE',
        Brand3Yehyang: '예향',
        Brand4Market: '동행마켓',
    };

    const filteredSpecials = specials?.filter((item) => item.brandtag === brandTagMap[brandTag]);

    console.log('specials >>>', specials);

    const [sortType, setSortType] = useState('판매량순');

    const sortedSpecials = () => {
        switch (sortType) {
            case '판매량순':
                return [...filteredSpecials].sort((a, b) => {
                    if (a.rank === b.rank)
                        return filteredSpecials.indexOf(a) - filteredSpecials.indexOf(b);
                    return b.rank - a.rank;
                });
            case '신상품순':
                return [...filteredSpecials]
                    .filter((product) => product.tags?.some((tag) => tag.name === '신상품'))
                    .sort((a, b) => {
                        if (a.rank === b.rank)
                            return filteredSpecials.indexOf(a) - filteredSpecials.indexOf(b);
                        return b.rank - a.rank;
                    });
            case '높은가격순':
                return [...filteredSpecials].sort((a, b) => {
                    const priceA = a.discountedPrice || a.price;
                    const priceB = b.discountedPrice || b.price;
                    return priceB - priceA;
                });
            case '낮은가격순':
                return [...filteredSpecials].sort((a, b) => {
                    const priceA = a.discountedPrice || a.price;
                    const priceB = b.discountedPrice || b.price;
                    return priceA - priceB;
                });
            default:
                return filteredSpecials;
        }
    };

    return (
        <BrandListStyle>
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
            <ProductList products={sortedSpecials()} />
        </BrandListStyle>
    );
};

export default BrandList;
