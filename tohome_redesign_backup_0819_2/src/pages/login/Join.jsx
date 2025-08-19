import JoinInfo from '../../components/login/JoinInfo';
import JoinItem from '../../components/login/JoinItem';
import { JoinStyle } from './style';

const Join = () => {
    return (
        <JoinStyle>
            <div className="inner">
                <h2>회원가입</h2>
                <JoinItem />
                <JoinInfo />
                <div className="btn-wrap">
                    <button className="join-btn" type="submit">
                        가입하기
                    </button>
                </div>
            </div>
        </JoinStyle>
    );
};

export default Join;
