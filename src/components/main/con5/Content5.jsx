import { useDispatch, useSelector } from 'react-redux';
import { ContentStyle, ContentUl } from '../style';
import { Content05Style } from './style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProductList from '../../product/ProductList';
import { cartActions } from '../../../store/modules/cartSlice';

const Content5 = () => {
    const { products, menus, specials } = useSelector((state) => state.cart);
    const AllMenus = [...products, ...menus, ...specials];
    const todayRecipe = AllMenus.filter((product) =>
        product.tags?.some((tag) => tag.name === '오늘의레시피' && tag.rank <= 5)
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedItems, setSelectedItems] = useState(() => {
        return new Set(todayRecipe.map((product) => product.id));
    });

    ////////

    // Handle individual checkbox changes
    const handleItemSelect = (productId, isSelected) => {
        const newSelectedItems = new Set(selectedItems);
        if (isSelected) {
            newSelectedItems.add(productId);
        } else {
            newSelectedItems.delete(productId);
        }
        setSelectedItems(newSelectedItems);
    };

    // Handle select all checkbox
    const handleSelectAll = (isSelected) => {
        if (isSelected) {
            const allIds = new Set(todayRecipe.map((product) => product.id));
            setSelectedItems(allIds);
        } else {
            setSelectedItems(new Set());
        }
    };

    // Add selected items to cart
    const handleAddSelectedToCart = () => {
        const selectedProducts = todayRecipe.filter((product) => selectedItems.has(product.id));

        selectedProducts.forEach((product) => {
            console.log('💚 addToCart 호출 직전 Product 객체:', product);
            dispatch(cartActions.addToCart(product));
        });

        // Clear selections after adding to cart
        setSelectedItems(new Set());

        // Show success message (optional)
        alert(`${selectedProducts.length}개의 상품이 장바구니에 담겼습니다.`);
    };

    // Add all items to cart
    const handleAddAllToCart = () => {
        todayRecipe.forEach((product) => {
            console.log('💚 addToCart 호출 직전 Product 객체:', product);
            dispatch(cartActions.addToCart(product));
        });

        // Clear selections
        setSelectedItems(new Set());

        // Show success message (optional)
        alert(`${todayRecipe.length}개의 상품이 장바구니에 담겼습니다.`);
    };

    ////////////////////

    const onClick1 = () => {
        navigate('/gift');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <ContentStyle>
            <Content05Style>
                <section
                    className="main-today-recipe"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                >
                    <h2 className="main-title">오늘의 레시피</h2>
                    <p className="title2">
                        <span>오늘 뭐 먹지? 고민은 그만</span>
                        매일 먹어도 질리지 않는 정성 가득 집밥 큐레이션
                    </p>
                    <div className="recipe-head">
                        <div className="left">
                            <img src="images/main/main-recipe.png" alt="" />
                        </div>
                        <div className="right">
                            <em>제철 식재료를 이용한 맛있는 반찬</em>
                            <h3>으깬 감자구이</h3>
                            <strong>
                                <img src="images/icon/icon-park-outline_cook.svg" alt="" />
                                <span>조리시간</span>
                                1시간
                            </strong>
                            <p>
                                겉은 바삭, 속은 촉촉 - 간편하게 즐기는 으깬 감자구이 <br /> 부드럽게
                                으깬 감자를 한입 크기로 뭉쳐 노릇하게 구워낸 감자구이입니다. <br />{' '}
                                겉은 바삭하고 속은 포슬포슬한 식감이 매력적이에요. <br /> 오븐이나
                                에어프라이어로 간단히 조리할 수 있어 바쁜 하루, 든든한 간식이나
                                반찬으로 제격입니다.
                            </p>
                            <button className="more2">
                                <p>레시피보기</p> <img src="images/icon/icon_all.png" alt="" />
                            </button>
                            <div className="line"></div>
                            <div className="btn-wrap">
                                <button className="btn" onClick={handleAddSelectedToCart}>
                                    선택 재료 담기
                                </button>
                                <button className="btn" onClick={handleAddAllToCart}>
                                    재료 한번에 담기
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-body">
                        <ProductList
                            products={todayRecipe}
                            showCheckbox={true}
                            selectedItems={selectedItems}
                            onItemSelect={handleItemSelect}
                        />
                    </div>
                </section>
                <section className="main-gift-wrap" onClick={onClick1} data-aos="fade-up">
                    <div className="txt-box">
                        <img src="images/main/main_gift01.png" alt="모눈종이" />
                        <p>
                            진심을 담아 전하는 순간, 선물이 특별해지는 이유 투홈의 선물하기를
                            이용하세요!
                        </p>
                    </div>
                    <img src="images/main/main_gift.png" alt="main_gift.png" className="back" />
                    <button className="more1">
                        <img src="images/icon/icon_all.png" alt="" />
                    </button>
                </section>
            </Content05Style>
        </ContentStyle>
    );
};

export default Content5;
