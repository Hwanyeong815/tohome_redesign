import LoginPage from '../../components/login/LoginPage';
import { LoginStyle } from './style';

const Login = () => {
    return (
        <LoginStyle>
            <div className="inner">
                <h2>로그인</h2>
                <LoginPage />
            </div>
        </LoginStyle>
    );
};

export default Login;
