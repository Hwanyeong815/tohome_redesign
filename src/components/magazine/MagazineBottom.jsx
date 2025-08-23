import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../product/ProductList';
import { MagazineBottomStyle } from './style';
import { useEffect, useMemo, useRef, useState } from 'react';
import { cartActions } from '../../store/modules/cartSlice';
import { useNavigate } from 'react-router-dom';

const MagazineBottom = ({ onPrev, onNext }) => {
    const { AllDataList } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const recipes = useMemo(
        () =>
            (AllDataList || []).filter(
                (product) => product?.recipeProductId != null
                // && product.tags?.some((t) => t.name === '매거진')
            ),
        [AllDataList]
    );

    const [selectedItems, setSelectedItems] = useState(new Set());
    const isInitialSelectionDone = useRef(false);

    useEffect(() => {
        if (recipes.length > 0 && !isInitialSelectionDone.current) {
            setSelectedItems(new Set(recipes.map((p) => p.num)));
            isInitialSelectionDone.current = true;
        }
    }, [recipes]);

    const handleItemSelect = (num, isSelected) => {
        const next = new Set(selectedItems);
        if (isSelected) next.add(num);
        else next.delete(num);
        setSelectedItems(next);
    };

    const handleAddSelectedToCart = () => {
        const selectedProducts = recipes.filter((product) => selectedItems.has(product.id));
        selectedProducts.forEach((product) => {
            dispatch(cartActions.addToCart(product));
        });
        setSelectedItems(new Set());
        alert(`${selectedProducts.length}개의 상품이 장바구니에 담겼습니다.`);
    };

    const handleAddAllToCart = () => {
        recipes.forEach((product) => {
            dispatch(cartActions.addToCart(product));
        });
        setSelectedItems(new Set());
        alert(`${recipes.length}개의 상품이 장바구니에 담겼습니다.`);
    };

    return (
        <MagazineBottomStyle className="mag-bottom">
            <div className="mobile-btn-wrap">
                <button onClick={onPrev}>조리방법</button>
                <button onClick={() => navigate('/cart')}>장바구니로 이동</button>
            </div>
            <div className="btn-wrap">
                <button onClick={handleAddSelectedToCart}>선택 재료 담기</button>
                <button onClick={handleAddAllToCart}>재료 한번에 담기</button>
            </div>
            <ProductList
                products={recipes}
                showCheckbox={true}
                selectedItems={selectedItems}
                onItemSelect={handleItemSelect}
            />
        </MagazineBottomStyle>
    );
};

export default MagazineBottom;
