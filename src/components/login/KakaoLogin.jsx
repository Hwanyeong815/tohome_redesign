const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

export default function KakaoLoginButton() {
    const handleKakaoLogin = () => {
        const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

        window.location.href = kakaoAuthUrl;
    };

    return (
        <button type="button" onClick={handleKakaoLogin}>
            <img src="/images/login/kakao_logo.png" alt="카카오톡" />
            카카오톡으로 로그인 하기
        </button>
    );
}
