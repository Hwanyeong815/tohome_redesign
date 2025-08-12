import JoinAgree from '../../components/login/JoinAgree';
import JoinItem from '../../components/login/JoinItem';
import { JoinStyle } from './style';

const Join = () => {
    return (
        <JoinStyle>
            <div className="inner">
                <h2>회원가입</h2>
                <JoinAgree />
                <JoinItem />
            </div>
        </JoinStyle>
    );
};

export default Join;
