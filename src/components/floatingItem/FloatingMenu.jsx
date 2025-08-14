import { useNavigate } from 'react-router-dom';
import FloatingMenuItem from './FloatingMenuItem';
import { FloatingMenuStyle } from './style';

const MenuItems = [
    {
        id: 1,
        menuTitle: '과일·채소',
        img: '/images/icon/menuitem_fruit.png',
        route: '/category/fruit',
    },
    {
        id: 2,
        menuTitle: '곡물·견과',
        img: '/images/icon/menuitem_grain.png',
        route: '/category/grain',
    },
    {
        id: 3,
        menuTitle: '생선·해산물·건어물',
        img: '/images/icon/menuitem_seafood.png',
        route: '/category/seafood',
    },
    {
        id: 4,
        menuTitle: '육류·달걀',
        img: '/images/icon/menuitem_meat.png',
        route: '/category/meat',
    },
    {
        id: 5,
        menuTitle: '밥·국·면',
        img: '/images/icon/menuitem_rice.png',
        route: '/category/rice',
    },
    {
        id: 6,
        menuTitle: '밑반찬·간식',
        img: '/images/icon/menuitem_sidedish.png',
        route: '/category/side',
    },
    {
        id: 7,
        menuTitle: '양념·오일·통조림',
        img: '/images/icon/menuitem_oil.png',
        route: '/category/seasoning',
    },
    {
        id: 8,
        menuTitle: '베이커리·치즈',
        img: '/images/icon/menuitem_bread.png',
        route: '/category/bakery',
    },
    {
        id: 9,
        menuTitle: '과자·초콜릿·캔디',
        img: '/images/icon/menuitem_candy.png',
        route: '/category/snack',
    },
    {
        id: 10,
        menuTitle: '물·우유·커피·음료',
        img: '/images/icon/menuitem_drink.png',
        route: '/category/liquid',
    },
];

const FloatingMenu = ({ setIsOpen }) => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route);
        setIsOpen(false);
    };

    return (
        <FloatingMenuStyle>
            {MenuItems.map((menu) => (
                <div key={menu.id} onClick={() => handleClick(menu.route)}>
                    <FloatingMenuItem menu={menu} />
                </div>
            ))}
        </FloatingMenuStyle>
    );
};

export default FloatingMenu;
