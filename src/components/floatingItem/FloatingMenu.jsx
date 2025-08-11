import FloatingMenuItem from './FloatingMenuItem';
import { FloatingMenuStyle } from './style';

const MenuItems = [
    { id: 1, menuTitle: '과일·채소', img: 'images/icon/menuitem_fruit.png' },
    { id: 2, menuTitle: '곡물·견과', img: 'images/icon/menuitem_grain.png' },
    { id: 3, menuTitle: '생선·해산물·건어물', img: 'images/icon/menuitem_seafood.png' },
    { id: 4, menuTitle: '육류·달걀', img: 'images/icon/menuitem_meat.png' },
    { id: 5, menuTitle: '밥·국·면', img: 'images/icon/menuitem_rice.png' },
    { id: 6, menuTitle: '밑반찬·간식', img: 'images/icon/menuitem_sidedish.png' },
    { id: 7, menuTitle: '양념·오일·통조림', img: 'images/icon/menuitem_oil.png' },
    { id: 8, menuTitle: '베이커리·치즈', img: 'images/icon/menuitem_bread.png' },
    { id: 9, menuTitle: '과자·초콜릿·캔디', img: 'images/icon/menuitem_candy.png' },
    { id: 10, menuTitle: '물·우유·커피·음료', img: 'images/icon/menuitem_drink.png' },
];

const FloatingMenu = () => {
    return (
        <FloatingMenuStyle>
            {MenuItems.map((menu) => (
                <FloatingMenuItem key={menu.id} menu={menu} />
            ))}
        </FloatingMenuStyle>
    );
};

export default FloatingMenu;
