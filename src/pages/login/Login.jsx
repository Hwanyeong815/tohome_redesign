import { useState } from 'react';
import { LoginStyle } from './style';
import { FaUser } from 'react-icons/fa6';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { authActions } from '../../store/modules/authSlice';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [user, setUser] = useState({ userid: '', password: '' });
    const { userid, password } = user;

    const changeInput = (e) => {
        const { value, name } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!userid.trim() || !password.trim()) {
            alert('아이디 또는 비밀번호를 입력해주세요');
            return;
        }

        // 실제 로그인 처리
        dispatch(authActions.login(user));

        // 입력 초기화
        setUser({ userid: '', password: '' });

        // ✅ 로그인 전 페이지에서 넘겨준 복귀 경로로 이동 (기본값 '/')
        const redirectTo = location.state?.redirectTo || '/';
        navigate(redirectTo, { replace: true });
    };

    return (
        <LoginStyle>
            <div className="inner">
                <h2>로그인</h2>
                <div className="content">
                    <form className="left" onSubmit={onSubmit}>
                        <img src="/images/common/logo_tohome.png" alt="로고" />
                        <span>
                            안녕하세요, 현대식품관입니다.
                            <br />
                            로그인 후 다양한 혜택과 이벤트를 확인하세요.
                        </span>
                        <div className="txtbox-wrap">
                            <div className="txtbox id">
                                <i>
                                    <FaUser />
                                </i>
                                <input
                                    type="text"
                                    name="userid"
                                    placeholder="아이디:rere0811"
                                    value={userid}
                                    onChange={changeInput}
                                />
                            </div>
                            <div className="txtbox password">
                                <i>
                                    <RiLockPasswordLine />
                                </i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="비밀번호:rere0811@"
                                    value={password}
                                    onChange={changeInput}
                                />
                            </div>
                        </div>

                        <p>비회원 주문 조회 / 아이디·비밀번호 찾기</p>

                        <div className="btns">
                            <button type="submit">로그인</button>
                            {/* ✅ 이 버튼은 submit 방지용으로 type="button" 권장 */}
                            <button type="button" onClick={() => navigate('/join')}>
                                회원가입
                            </button>
                        </div>

                        <div className="bottom">
                            <div className="or">
                                <p>또는</p>
                                <i className="line"></i>
                            </div>

                            <div className="snsbox">
                                <button type="button">
                                    <img src="/images/login/google_logo.png" alt="구글" />
                                    Google로 로그인 하기
                                </button>
                                <button type="button">
                                    <img src="/images/login/kakao_logo.png" alt="카카오톡" />
                                    카카오톡으로 로그인 하기
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="right"></div>
                    <img src="/images/login/login_image.jpg" alt="이미지1" />
                </div>
            </div>
        </LoginStyle>
    );
};

export default Login;
