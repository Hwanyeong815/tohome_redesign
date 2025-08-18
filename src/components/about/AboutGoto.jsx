import { useEffect } from 'react';
import AboutGotoCon1 from './AboutGotoCon1';
import AboutGotoCon2 from './AboutGotoCon2';
import AboutGotoCon3 from './AboutGotoCon3';
import { AboutGotoWrap } from './style';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutGoto = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
            once: true,
            offset: 20,
        });
    }, []);
    return (
        <AboutGotoWrap>
            <h2>현대투홈을 특별하게 만드는 3가지 키워드</h2>
            <AboutGotoCon1 data-aos="fade-up" data-aos-delay="0" />
            <AboutGotoCon2 data-aos="fade-up" data-aos-delay="100" />
            <AboutGotoCon3 data-aos="fade-up" data-aos-delay="200" />
        </AboutGotoWrap>
    );
};

export default AboutGoto;
