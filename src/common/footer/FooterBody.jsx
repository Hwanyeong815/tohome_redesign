import { Link } from 'react-router-dom';
import { FooterBodyUl } from './style';

const FooterBody = () => {
    return (
        <FooterBodyUl>
            <li>
                <div>
                    <em>고객센터</em>
                    <p>오전 7시 ~ 오후 9시</p>
                    <strong>
                        <img src="/images/icon/icon_call.png" alt="전화기" />
                        1800.9549
                    </strong>
                </div>
                <div>
                    <em>공지사항</em>
                    <h5>SKT 이용 고객 대상 피해 예방 수칙안내 휴면계정 해제 안내</h5>
                    <img src="/images/icon/icon_plus.png" alt="플러스" />
                </div>
            </li>
            <li className="links">
                <section>
                    <img src="/images/common/logo_tohome2.png" alt="로고1" />
                    <div>
                        <Link to="/">
                            <img src="/images/icon/icon_youtube.png" alt="유튜브" />
                        </Link>
                        <Link to="/">
                            <img src="/images/icon/icon_facebook.png" alt="페이스북" />
                        </Link>
                        <Link to="/">
                            <img src="/images/icon/icon_instagram.png" alt="인스타그램" />
                        </Link>
                    </div>
                </section>
            </li>
            <li className="utill">
                <div className="option">Family Site</div>
                <div>
                    <em>
                        <p>
                            <Link to="/about">브랜드소개</Link>
                        </p>
                        <p>이용약관</p>
                    </em>
                    <p>개인정보처리방침</p>
                    <p>영상기기운영방침</p>
                </div>
            </li>
        </FooterBodyUl>
    );
};

export default FooterBody;
