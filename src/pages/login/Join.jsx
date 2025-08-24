// pages/Join/index.jsx
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import JoinInfo from '../../components/login/JoinInfo';
import JoinItem from '../../components/login/JoinItem';
import { authActions } from '../../store/modules/authSlice';
import { JoinStyle } from './style';

const Join = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const members = useSelector((state) => state.auth.members);

    const handleJoin = () => {
        const form = document.getElementById('join-form');
        if (!form) return;

        const fd = new FormData(form);

        const userid = fd.get('userid')?.toString().trim();
        const password = fd.get('userpassword')?.toString().trim();
        const password2 = fd.get('userpassword2')?.toString().trim();
        const name = fd.get('username')?.toString().trim();

        const emailLocal = fd.get('emailLocal')?.toString().trim();
        const emailDomain = fd.get('emailDomain')?.toString().trim();

        const telPrefix = fd.get('telPrefix')?.toString().trim();
        const telMid = fd.get('telMid')?.toString().trim();
        const telEnd = fd.get('telEnd')?.toString().trim();

        const addr1 = fd.get('addr1')?.toString().trim();
        const addr2 = fd.get('addr2')?.toString().trim();

        if (!userid || !password || !password2 || !name) {
            alert('필수 항목을 입력해주세요.');
            return;
        }
        if (password !== password2) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        if (!emailLocal || !emailDomain) {
            alert('이메일을 입력해주세요.');
            return;
        }
        if (!telPrefix || !telMid || !telEnd) {
            alert('전화번호를 입력해주세요.');
            return;
        }
        if (members.some((m) => m.userid === userid)) {
            alert('이미 존재하는 아이디입니다.');
            return;
        }

        const email = `${emailLocal}@${emailDomain}`;
        const tel = `${telPrefix}-${telMid}-${telEnd}`;

        const payload = {
            userid,
            password,
            name,
            email,
            tel,
            addr: [addr1 || '', addr2 || ''],
            phone: [Number(telMid) || 0, Number(telEnd) || 0],
        };

        try {
            dispatch(authActions.signup(payload));
            alert('회원가입이 완료되었습니다.');
            // 🔽 alert 이후 라우팅을 확실히 보장
            setTimeout(() => navigate('/', { replace: true }), 0);
        } catch (e) {
            console.error(e);
            alert('회원가입 처리 중 오류가 발생했습니다.');
        }
    };

    return (
        <JoinStyle>
            <div className="inner">
                <h2>회원가입</h2>
                <JoinItem />
                <JoinInfo />
                <div className="btn-wrap">
                    <button className="join-btn" type="button" onClick={handleJoin}>
                        가입하기
                    </button>
                </div>
            </div>
        </JoinStyle>
    );
};

export default Join;
