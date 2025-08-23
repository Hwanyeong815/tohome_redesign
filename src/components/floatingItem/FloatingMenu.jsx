import { Link, useNavigate } from 'react-router-dom';
import FloatingMenuItem from './FloatingMenuItem';
import { FloatingMenuStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/modules/authSlice';
import { IoClose } from 'react-icons/io5';

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
    const dispatch = useDispatch();
    const { authed, user } = useSelector((state) => state.auth);
    const handleClick = (route) => {
        navigate(route);
        setIsOpen(false);
    };

    const handleOverlayClick = () => {
        setIsOpen(false);
    };
    const onLogout = () => {
        dispatch(authActions.logout(user));
        navigate('/login');
    };

    return (
        <>
            <div className="overlay" onClick={handleOverlayClick}></div>
            <FloatingMenuStyle>
                <section className="mobile-logo-wrap">
                    <div className="mobile-logo-wrap-img">
                        <img src="/images/common/logo_tohome1.png" alt="" />
                    </div>
                    <p>
                        <Link onClick={() => setIsOpen(flase)}>
                            <IoClose />
                        </Link>
                    </p>
                </section>
                <section className="mobile-login-wrap">
                    <ul className="mobile-login-wrap-list">
                        {authed ? (
                            <>
                                <li onClick={onLogout}>
                                    <Link>로그아웃</Link>
                                </li>
                                <li>마이페이지</li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login" onClick={() => setIsOpen(flase)}>
                                        로그인
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/join" onClick={() => setIsOpen(flase)}>
                                        회원가입
                                    </Link>
                                </li>
                            </>
                        )}

                        <li>
                            <Link to="/" onClick={() => setIsOpen(flase)}>
                                홈
                            </Link>
                        </li>
                    </ul>
                    <div className="mobile-login-wrap-title">
                        {authed ? (
                            <h4>
                                <span>{user.name}</span>님 환영합니다
                            </h4>
                        ) : (
                            <strong>로그인을 해주세요.</strong>
                        )}
                    </div>
                </section>
                <section className="item-wrap">
                    {MenuItems.map((menu) => (
                        <div key={menu.id} onClick={() => handleClick(menu.route)}>
                            <FloatingMenuItem menu={menu} />
                        </div>
                    ))}
                </section>
                <section className="mobile-support-wrap">
                    <p>
                        <Link to="/support" onClick={() => setIsOpen(flase)}>
                            공지사항
                        </Link>
                    </p>
                    <p>
                        <Link to="/support" onClick={() => setIsOpen(flase)}>
                            고객센터
                        </Link>
                    </p>
                </section>
            </FloatingMenuStyle>
        </>
    );
};

export default FloatingMenu;
