import { ProductSearchStyle } from './style';

const ProductSearch = () => {
    return (
        <ProductSearchStyle>
            <div className="inner">
                <section className="search-hot">
                    <h3 className="search-title">인기 검색어</h3>
                    <ul className="list">
                        <li>
                            <span>1</span>복숭아
                        </li>
                        <li>
                            <span>2</span>복숭아
                        </li>
                        <li>
                            <span>3</span>복숭아
                        </li>
                        <li>
                            <span>4</span>복숭아
                        </li>
                        <li>
                            <span>5</span>복숭아
                        </li>
                        <li>
                            <span>6</span>복숭아
                        </li>
                        <li>
                            <span>7</span>복숭아
                        </li>
                        <li>
                            <span>8</span>복숭아
                        </li>
                        <li>
                            <span>9</span>복숭아
                        </li>
                        <li>
                            <span>10</span>복숭아
                        </li>
                    </ul>
                </section>
                <section className="search-recom">
                    <h3 className="search-title">인기 검색어</h3>
                    <ul className="list">
                        <li>주말에 뭐먹지</li>
                        <li>주말에 뭐먹지</li>
                        <li>주말에 뭐먹지</li>
                        <li>주말에 뭐먹지</li>
                        <li>주말에 뭐먹지</li>
                        <li>주말에 뭐먹지</li>
                        <li>주말에 뭐먹지</li>
                        <li>주말에 뭐먹지</li>
                        <li>주말에 뭐먹지</li>
                    </ul>
                </section>
                <section className="search-tags">
                    <h3 className="search-title">인기 검색어</h3>
                    <ul className="list">
                        <li>#복숭아</li>
                        <li>복숭아</li>
                        <li>복숭아</li>
                    </ul>
                </section>
            </div>
        </ProductSearchStyle>
    );
};

export default ProductSearch;
