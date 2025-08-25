import { Link, useNavigate } from 'react-router-dom';
import { NavStyle, SearchWrap, TopMenu } from './style';
import FloatingMenu from '../../components/floatingItem/FloatingMenu';
import { useState } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { GoSearch } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/modules/authSlice';
import ProductSearch from '../../components/product/ProducTools/ProductSearch';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { authed, user } = useSelector((state) => state.auth);
    const { carts } = useSelector((state) => state.cart);
    const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태
    const [showSearch, setShowSearch] = useState(false); // 검색창 활성화 여부
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const onLogout = () => {
        dispatch(authActions.logout(user));
        navigate('/login');
    };

    const handleCartClick = () => {
        if (!authed) {
            const goLogin = window.confirm(
                '로그인이 필요합니다. 로그인 하시겠습니까?\n(취소를 누르면 장바구니로 이동합니다.)'
            );
            if (goLogin) {
                navigate('/login', { state: { redirectTo: '/cart' } });
                return;
            }
        }
        navigate('/cart');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <>
            <TopMenu className="top-menu">
                {authed ? (
                    <>
                        <li>
                            <Link to="/">{user.name}님 환영합니다</Link>
                        </li>
                        <li onClick={onLogout}>
                            <Link>로그아웃</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">로그인</Link>
                        </li>

                        <li>
                            <Link to="/join">회원가입</Link>
                        </li>
                    </>
                )}

                <li>
                    <Link to="/support">고객센터</Link>
                </li>
            </TopMenu>
            <SearchWrap>
                <div className="search">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const q = searchTerm.trim();
                            if (!q) return;
                            navigate(`/result?q=${encodeURIComponent(q)}`);
                            setShowSearch(false);
                            setSearchTerm('');
                        }}
                    >
                        <input
                            type="text"
                            value={searchTerm}
                            placeholder=""
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setShowSearch(true);
                            }}
                            onFocus={() => setShowSearch(true)}
                        />
                        <GoSearch
                            className="search-item"
                            onClick={() => {
                                const q = searchTerm.trim();
                                if (!q) return;
                                navigate(`/result?q=${encodeURIComponent(q)}`);
                                setShowSearch(false);
                                setSearchTerm('');
                            }}
                        />
                    </form>
                </div>
                <button
                    type="button"
                    className="cart"
                    onClick={handleCartClick}
                    aria-label="장바구니로 이동"
                    style={{ background: 'transparent', border: 0, cursor: 'pointer' }}
                >
                    <p>
                        <RiShoppingCartLine />
                        {carts.length > 0 && <span>{carts.length}</span>}
                    </p>
                </button>
            </SearchWrap>
            <NavStyle className="nav" isOpen={isOpen}>
                <ul className="gnb">
                    <li>
                        <Link to="/best">베스트</Link>
                    </li>

                    <li>
                        <Link to="/sale">세일</Link>
                    </li>
                    <li>
                        <Link to="/newProducts">신상품</Link>
                    </li>
                    <li>
                        <Link to="/gift">선물하기</Link>
                    </li>
                    <li>
                        <Link to="/directDelivery">브랜드직송관</Link>
                    </li>
                    <li>
                        <Link to="/specialBrand">특화브랜드관</Link>
                    </li>
                    <li>
                        <Link to="/magazine">매거진</Link>
                    </li>
                </ul>
                <div className="all-menu" onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </NavStyle>
            {isOpen && <FloatingMenu setIsOpen={setIsOpen} />}
            {showSearch && (
                <ProductSearch
                    // keyword prop은 사용 안 해도 동작하므로 빼도 되고 둬도 무방
                    onClose={() => {
                        setShowSearch(false);
                        setSearchTerm('');
                    }}
                />
            )}
        </>
    );
};

export default Navbar;
