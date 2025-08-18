import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { HeaderStyle, SearchWrap, TopMenu } from './style';

import FloatingBtn from '../../components/floatingItem/FloatingBtn';

const Header = () => {
    return (
        <HeaderStyle className="header">
            <div className="inner">
                <div className="headBody">
                    <h1>
                        <Link to="/">
                            <img src="/images/common/logo_tohome.png" alt="로고" />
                            <img
                                className="hoverImg"
                                src="/images/common/logo_tohome1.png"
                                alt="로고"
                            />
                        </Link>
                    </h1>
                </div>

                <Navbar />
            </div>

            <FloatingBtn />
        </HeaderStyle>
    );
};

export default Header;
