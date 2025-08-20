import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../product/ProductList';
import { MagazineBottomStyle } from './style';
import { useEffect, useRef, useState } from 'react';
import { cartActions } from '../../store/modules/cartSlice';

const MagazineBottom = () => {
    const { recipes } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [selectedItems, setSelectedItems] = useState(new Set());

    const isInitialSelectionDone = useRef(false);

    useEffect(() => {
        if (recipes && recipes.length > 0 && !isInitialSelectionDone.current) {
            setSelectedItems(new Set(recipes.map((product) => product.id)));
            isInitialSelectionDone.current = true;
        }
    }, [recipes]);

    const handleItemSelect = (productId, isSelected) => {
        const newSelectedItems = new Set(selectedItems);
        if (isSelected) {
            newSelectedItems.add(productId);
        } else {
            newSelectedItems.delete(productId);
        }
        setSelectedItems(newSelectedItems);
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
