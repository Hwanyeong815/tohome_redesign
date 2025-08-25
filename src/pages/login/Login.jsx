import { useEffect, useState } from 'react';
import { LoginStyle } from './style';
import { FaUser } from 'react-icons/fa6';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { authActions } from '../../store/modules/authSlice';

const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_REST_API_KEY; // ✅ .env
const REDIRECT_URI = 'http://localhost:5173/login'; // ✅ 콘솔에 등록한 값과 동일
const API_BASE = import.meta.env.VITE_API_BASE; // ✅ 백엔드 베이스 URL

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [user, setUser] = useState({ userid: '', password: '' });
    const { userid, password } = user;

    // ✅ 카카오 콜백 처리: /login?code=... 로 돌아오면 여기서 code 추출 → 서버로 교환
    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get('code');
        if (!code) return;

        (async () => {
            try {
                const res = await fetch(`${API_BASE}/auth/kakao/token`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        code,
                        redirectUri: REDIRECT_URI, // 카카오에 요청했던 값과 정확히 동일해야 함
                    }),
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data?.error || '카카오 로그인 실패');

                // data 예시: { accessToken, user }
                // 👉 우리 앱 세션 저장/갱신
                localStorage.setItem('app_token', data.accessToken);
                dispatch(
                    authActions.loginWithProvider?.(data.user) ?? authActions.login(data.user)
                );

                // code 파라미터 제거하고 홈으로 이동
                navigate('/', { replace: true });
            } catch (err) {
                console.error(err);
                alert('카카오 로그인에 실패했습니다. 잠시 후 다시 시도해주세요.');
                // 실패 시 code 파라미터 제거
                navigate('/login', { replace: true });
            }
        })();
    }, [navigate]);

    // ✅ 카카오 인가요청: 카카오 인증 화면으로 이동
    const handleKakaoLogin = () => {
        const kakaoAuthUrl = new URL('https://kauth.kakao.com/oauth/authorize');
        kakaoAuthUrl.searchParams.set('client_id', KAKAO_CLIENT_ID);
        kakaoAuthUrl.searchParams.set('redirect_uri', REDIRECT_URI);
        kakaoAuthUrl.searchParams.set('response_type', 'code');
        // 필요하면 scope 추가
        // kakaoAuthUrl.searchParams.set('scope', 'profile_nickname profile_image account_email');
        window.location.href = kakaoAuthUrl.toString();
    };

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

        // 실제 로그인 처리 (기존 로컬 계정)
        dispatch(authActions.login(user));
        setUser({ userid: '', password: '' });

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
                                {/* Google */}
                                <button type="button">
                                    <img src="/images/login/google_logo.png" alt="구글" />
                                    Google로 로그인 하기
                                </button>

                                {/* ✅ Kakao: 개별 컴포넌트로 뺄 예정이면 onClick만 넘기면 됨 */}
                                <button type="button" onClick={handleKakaoLogin}>
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
