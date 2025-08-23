import { ProductResultStyle } from './style';

const ProductResult = () => {
    // const sortedBest = () => {
    //     switch (sortType) {
    //         case '판매량순':
    //             return [...bestUl].sort((a, b) => {
    //                 if (a.rank === b.rank) return bestUl.indexOf(a) - bestUl.indexOf(b);
    //                 return b.rank - a.rank;
    //             });
    //         case '신상품순':
    //             return [...bestUl]
    //                 .filter((product) => product.tags?.some((tag) => tag.name === '신상품'))
    //                 .sort((a, b) => {
    //                     if (a.rank === b.rank) return bestUl.indexOf(a) - bestUl.indexOf(b);
    //                     return b.rank - a.rank;
    //                 });
    //         case '높은가격순':
    //             return [...bestUl].sort((a, b) => {
    //                 const priceA = a.discountedPrice || a.price;
    //                 const priceB = b.discountedPrice || b.price;
    //                 return priceB - priceA;
    //             });
    //         case '낮은가격순':
    //             return [...bestUl].sort((a, b) => {
    //                 const priceA = a.discountedPrice || a.price;
    //                 const priceB = b.discountedPrice || b.price;
    //                 return priceA - priceB;
    //             });
    //         default:
    //             return bestUl;
    //     }
    // };
    return (
        <ProductResultStyle>
            <div className="inner">
                <section className="result-top">
                    <h2>
                        <strong>복숭아</strong> 검색결과
                        <span> 13</span>건
                    </h2>
                    <ul className="filter">
                        <li>전체보기</li>
                        <li>새벽투홈</li>
                        <li>브랜드직송</li>
                        <li>선물하기</li>
                    </ul>
                </section>
                {/* <ProductList /> */}
            </div>
        </ProductResultStyle>
    );
};

export default ProductResult;
