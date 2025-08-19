import { useSelector } from 'react-redux';
import ProductList from '../product/ProductList';
import { MagazineBottomStyle } from './style';

const MagazineBottom = () => {
    const { recipes } = useSelector((state) => state.cart);

    return (
        <MagazineBottomStyle>
            <div className="btn-wrap">
                <button>선택 재료 담기</button>
                <button>재료 한번에 담기</button>
            </div>
            <ProductList products={recipes} />
        </MagazineBottomStyle>
    );
};

export default MagazineBottom;
