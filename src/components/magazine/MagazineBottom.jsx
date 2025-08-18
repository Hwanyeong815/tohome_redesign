import ProductList from '../product/ProductList';

const MagazineBottom = () => {
    return (
        <div>
            <div className="btn-wrap">
                <button>선택 재료 담기</button>
                <button>재료 한번에 담기</button>
            </div>
            <ProductList />
        </div>
    );
};

export default MagazineBottom;
