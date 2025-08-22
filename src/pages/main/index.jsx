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
        // SSR/빌드 안전 가드
        if (typeof window === 'undefined') return;
        const isMobile = () => window.matchMedia('(max-width: 600px)').matches;
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            // 모바일이면 비활성화
            disable: isMobile, // 함수 반환값이 true면 비활성화
        });
        // 초기 1회 리프레시
        AOS.refresh();
        // 윈도우 리사이즈 시 상태가 바뀌면 하드 리프레시(옵션)
        const onResize = () => {
            // 뷰포트 변경으로 disable 조건이 달라질 수 있으니 강제 리프레시
            AOS.refreshHard();
        };
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
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
