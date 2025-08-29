import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../product/ProductList';
import { MagazineBottomStyle } from './style';
import { useMemo, useState } from 'react';
import { cartActions } from '../../store/modules/cartSlice';
import { useNavigate } from 'react-router-dom';

const toNum = (v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
};

const MagazineBottom = ({ onPrev, onNext }) => {
    const { AllDataList } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ✅ '매거진' 태그로 필터 + num 기준 사용
    const recipes = useMemo(
        () => (AllDataList ?? []).filter((p) => p?.tags?.some((t) => t?.name === '매거진')),
        [AllDataList]
    );

    // ✅ 선택 상태: Set<number> (num 저장)
    const [selectedItems, setSelectedItems] = useState(new Set());

    const handleItemSelect = (num, isSelected) => {
        const n = toNum(num);
        if (n == null) return;
        const next = new Set(selectedItems);
        isSelected ? next.add(n) : next.delete(n);
        setSelectedItems(next);
    };

    // 현재 선택된 상품들 계산
    const selectedProducts = useMemo(
        () => recipes.filter((p) => selectedItems.has(toNum(p.num))),
        [recipes, selectedItems]
    );
    const selectedCount = selectedProducts.length;

    // ✅ 선택된 것만 담기
    const handleAddSelectedToCart = () => {
        if (selectedCount === 0) {
            alert('선택된 상품이 없습니다.');
            return;
        }
        selectedProducts.forEach((p) => dispatch(cartActions.addToCart(p)));
        setSelectedItems(new Set());
        alert(`${selectedCount}개의 상품이 장바구니에 담겼습니다.`);
    };

    // ✅ 전체 담기
    const handleAddAllToCart = () => {
        if (recipes.length === 0) {
            alert('담을 수 있는 상품이 없습니다.');
            return;
        }
        recipes.forEach((p) => dispatch(cartActions.addToCart(p)));
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
                <button
                    onClick={handleAddSelectedToCart}
                    disabled={selectedCount === 0} // 원치 않으면 이 줄 제거
                    aria-disabled={selectedCount === 0}
                    title={selectedCount === 0 ? '선택된 상품이 없습니다.' : ''}
                >
                    선택 재료 담기{selectedCount > 0 ? ` (${selectedCount})` : ''}
                </button>
                <button onClick={handleAddAllToCart}>재료 한번에 담기</button>
            </div>

            <ProductList
                products={recipes}
                showCheckbox={true}
                selectedItems={selectedItems} // Set<number>
                onItemSelect={handleItemSelect} // (num, checked)
            />
        </MagazineBottomStyle>
    );
};

export default MagazineBottom;
