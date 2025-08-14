import AboutGotoCon1 from './AboutGotoCon1';
import AboutGotoCon2 from './AboutGotoCon2';
import AboutGotoCon3 from './AboutGotoCon3';
import { AboutGotoWrap } from './style';

const AboutGoto = () => {
    return (
        <AboutGotoWrap>
            <h2>현대투홈을 특별하게 만드는 3가지 키워드</h2>
            <AboutGotoCon1 />
            <AboutGotoCon2 />
            <AboutGotoCon3 />
        </AboutGotoWrap>
    );
};

export default AboutGoto;
