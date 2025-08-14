import { Link } from 'react-router-dom';
import { NavStyle, SearchWrap, TopMenu } from './style';
import FloatingMenu from '../../components/floatingItem/FloatingMenu';
import { useState } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { GoSearch } from 'react-icons/go';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <TopMenu className="top-menu">
                <li>
                    <Link to="/login">로그인</Link>
                </li>

                <li>
                    <Link to="/join">회원가입</Link>
                </li>
                <li>
                    <Link to="/support">고객센터</Link>
                </li>
            </TopMenu>
            <SearchWrap>
                <div className="search">
                    <GoSearch className="search-item" />
                </div>
                <Link to="/cart" className="cart">
                    <RiShoppingCartLine /> <span>0</span>
                </Link>
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
        </>
    );
};

export default Navbar;
