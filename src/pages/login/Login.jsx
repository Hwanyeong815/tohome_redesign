import { LoginStyle } from './style';
import { FaUser } from 'react-icons/fa6';
import { RiLockPasswordLine } from 'react-icons/ri';

const Login = () => {
    return (
        <LoginStyle>
            <div className="inner">
                <h2>로그인</h2>
                <div className="content">
                    <div className="left">
                        <img src="images/common/logo_tohome.png" alt="로고" />
                        <span>
                            안녕하세요, 현대식품관입니다.
                            <br />
                            로그인 후 다양한 혜택과 이벤트를 확인하세요.
                        </span>
                        <div className="txtbox id">
                            <i>
                                <FaUser />
                            </i>
                            <input type="text" placeholder="아이디:ezen0811" />
                        </div>
                        <div className="txtbox password">
                            <i>
                                <RiLockPasswordLine />
                            </i>
                            <input type="text" placeholder="비밀번호:abc0811" />
                        </div>
                        <p>비회원 주문 조회 / 아이디·비밀번호 찾기</p>
                        <div className="btns">
                            <button>로그인</button>
                            <button>회원가입</button>
                        </div>

                        <div className="bottom">
                            <div className="or">
                                <p>또는</p>
                                <i className="line"></i>
                            </div>

                            <div className="snsbox">
                                <button>
                                    <img src="images/login/google_logo.png" alt="구글" />
                                    Google로 로그인 하기
                                </button>
                                <button>
                                    <img src="images/login/kakao_logo.png" alt="카카오톡" />
                                    카카오톡으로 로그인 하기
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="right"></div>
                    <img src="images/login/login_image.jpg" alt="이미지1" />
                </div>
            </div>
        </LoginStyle>
    );
};

export default Login;
