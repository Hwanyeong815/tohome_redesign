import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../product/ProductList';
import { MagazineBottomStyle } from './style';
import { useEffect, useRef, useState } from 'react';
import { cartActions } from '../../store/modules/cartSlice';

const MagazineBottom = () => {
    const { recipes } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // 선택된 아이템들 관리 상태 - 처음부터 모든 아이템 선택
    // 🔴 빈 Set으로 초기화 (useEffect에서 설정하도록)
    // const [selectedItems, setSelectedItems] = useState(() => {
    //     return new Set(recipes.map((product) => product.id));
    // });
    const [selectedItems, setSelectedItems] = useState(new Set());

    // 🔴 recipes가 로드되면 모든 아이템 선택
    // useEffect(() => {
    //     if (recipes && recipes.length > 0) {
    //         setSelectedItems(new Set(recipes.map((product) => product.id)));
    //     }
    // }, [recipes]);

    const isInitialSelectionDone = useRef(false);

    useEffect(() => {
        // recipes가 존재하고, 아직 초기 선택이 되지 않았을 때만 전체 선택 로직 실행
        if (recipes && recipes.length > 0 && !isInitialSelectionDone.current) {
            setSelectedItems(new Set(recipes.map((product) => product.id)));
            isInitialSelectionDone.current = true; // 초기 선택 완료 플래그 설정
        }
    }, [recipes]); // recipes가 변경될 때마다 이 이펙트가 실행되지만, isInitialSelectionDone 플래그로 제어

    // 개별 체크박스 변경 처리
    const handleItemSelect = (productId, isSelected) => {
        const newSelectedItems = new Set(selectedItems);
        if (isSelected) {
            newSelectedItems.add(productId);
        } else {
            newSelectedItems.delete(productId);
        }
        setSelectedItems(newSelectedItems);
    };

    // 선택된 아이템들 장바구니에 담기
    const handleAddSelectedToCart = () => {
        const selectedProducts = recipes.filter((product) => selectedItems.has(product.id));
        console.log(
            '🚨 선택된 상품 배열:',
            selectedProducts.map((p) => ({ id: p.id, name: p.name }))
        ); // selectedProducts 내용 확인

        selectedProducts.forEach((product) => {
            console.log('💚 addToCart 호출 직전 Product 객체:', product);
            dispatch(cartActions.addToCart(product));
        });

        // Clear selections after adding to cart
        setSelectedItems(new Set());

        // Show success message (optional)
        alert(`${selectedProducts.length}개의 상품이 장바구니에 담겼습니다.`);
    };

    // 모든 아이템 장바구니에 담기
    const handleAddAllToCart = () => {
        console.log(
            '🚨 현재 recipes 배열:',
            recipes.map((p) => ({ id: p.id, name: p.name }))
        );
        recipes.forEach((product) => {
            console.log('🛒 dispatch할 상품 ID:', product.id, '상품명:', product.name);

            dispatch(cartActions.addToCart(product));
        });

        // 선택 해제
        setSelectedItems(new Set());

        // 성공 메시지
        alert(`${recipes.length}개의 상품이 장바구니에 담겼습니다.`);
    };

    return (
        <MagazineBottomStyle>
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
