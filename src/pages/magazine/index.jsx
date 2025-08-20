import { useState } from 'react';
import MagazineBottom from '../../components/magazine/MagazineBottom';
import MagazineDetail from '../../components/magazine/magazineDetail/MagazineDetail';
import MagazineList from '../../components/magazine/magazineList/MagazineList';
import { MagazineWrap } from './style';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Magazine = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // 애니메이션 속도
            once: false, // false로 해야 스크롤할 때마다 애니메이션 실행
            mirror: true, // 위/아래 스크롤 시 애니메이션 반복
        });
        AOS.refresh();
    }, []);

    return (
        <MagazineWrap>
            <div className="inner">
                {isOpen ? (
                    <>
                        <MagazineDetail onToggle={onToggle} />
                        <MagazineBottom />
                    </>
                ) : (
                    <MagazineList onToggle={onToggle} />
                )}
            </div>
        </MagazineWrap>
    );
};

export default Magazine;
