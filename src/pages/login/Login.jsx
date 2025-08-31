import { useEffect, useState } from 'react';
import { LoginStyle } from './style';
import { FaUser } from 'react-icons/fa6';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { authActions } from '../../store/modules/authSlice';

const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_REST_API_KEY;
const REDIRECT_URI = 'http://localhost:5173/login';
const API_BASE = import.meta.env.VITE_API_BASE;

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const [user, setUser] = useState({ userid: '', password: '' });
    const { userid, password } = user;

    const members = useSelector((s) => s.auth.members);

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get('code');
        if (!code) return;

        (async () => {
            try {
                if (!API_BASE) throw new Error('VITE_API_BASE가 설정되지 않았습니다.');

                const res = await fetch(`${API_BASE}/auth/kakao/token`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ code, redirectUri: REDIRECT_URI }),
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data?.error || '카카오 로그인 실패');

                if (data?.accessToken) {
                    localStorage.setItem('app_token', data.accessToken);
                }

                const kakaoUser = data?.user ?? { userid: data?.userid ?? 'kakao_user' };
                dispatch(
                    authActions.loginWithProvider?.(kakaoUser) ?? authActions.login(kakaoUser)
                );

                const cleanUrl = window.location.origin + window.location.pathname;
                window.history.replaceState({}, '', cleanUrl);

                const storedRedirect =
                    sessionStorage.getItem('redirectTo') || location.state?.redirectTo || '/';
                sessionStorage.removeItem('redirectTo');

                alert('로그인이 성공하셨습니다.');
                navigate(storedRedirect, { replace: true });
            } catch (err) {
                console.error(err);
                alert('카카오 로그인에 실패했습니다. 잠시 후 다시 시도해주세요.');
                const cleanUrl = window.location.origin + window.location.pathname;
                window.history.replaceState({}, '', cleanUrl);
                navigate('/login', { replace: true });
            }
        })();
    }, [dispatch, navigate, location.state?.redirectTo]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!userid.trim() || !password.trim()) {
            alert('아이디 또는 비밀번호를 입력해주세요');
            return;
        }

        const ok = members.some((m) => m.userid === userid && m.password === password);
        if (!ok) {
            alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
            return;
        }

        dispatch(authActions.login({ userid, password }));

        const redirectTo = location.state?.redirectTo || '/';
        alert('로그인이 성공하셨습니다.');
        navigate(redirectTo, { replace: true });
    };

    const changeInput = (e) => {
        const { value, name } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleKakaoLogin = () => {
        const desired = location.state?.redirectTo || '/';
        try {
            sessionStorage.setItem('redirectTo', desired);
        } catch {}
        const kakaoAuthUrl = new URL('https://kauth.kakao.com/oauth/authorize');
        kakaoAuthUrl.searchParams.set('client_id', KAKAO_CLIENT_ID);
        kakaoAuthUrl.searchParams.set('redirect_uri', REDIRECT_URI);
        kakaoAuthUrl.searchParams.set('response_type', 'code');
        window.location.href = kakaoAuthUrl.toString();
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
                            <div className="txtbox id pretendard">
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

                            <div className="txtbox password pretendard">
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
                                <button type="button">
                                    <img src="/images/login/google_logo.png" alt="구글" />
                                    Google로 로그인 하기
                                </button>
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
