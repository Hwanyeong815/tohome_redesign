import Content1 from '../../components/main/con1/Content1';
import Content2 from '../../components/main/con2/Content2';
import Content3 from '../../components/main/con3/Content3';
import Content4 from '../../components/main/con4/Content4';
import Content5 from '../../components/main/con5/Content5';
import MainVisual from '../../components/main/visual/MainVisual';
import { MainStyle } from './style';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // 애니메이션 속도
            once: false, // false로 해야 스크롤할 때마다 애니메이션 실행
            mirror: true, // 위/아래 스크롤 시 애니메이션 반복
        });
        AOS.refresh();
    }, []);
    return (
        <MainStyle>
            <div className="inner">
                <MainVisual />
                <Content1 />
                <Content2 />
                <Content3 />
                <Content4 />
                <Content5 />
            </div>
        </MainStyle>
    );
};

export default Main;
