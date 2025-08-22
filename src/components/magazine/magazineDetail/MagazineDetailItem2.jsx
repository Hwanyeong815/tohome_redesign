import { MagazineDetailItem2Style } from './style';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const MagazineDetailItem2 = ({ onPrev, onNext }) => {
    const defRef = useRef(null);
    const pathRef = useRef(null);
    const textPathRef = useRef(null);

    useEffect(() => {
        if (!defRef.current || !pathRef.current || !textPathRef.current) return;

        // 보이는 path(d)를 defs로 복사
        const d = pathRef.current.getAttribute('d');
        if (d) defRef.current.setAttribute('d', d);

        const textEl = textPathRef.current.parentElement; // <text>

        // 공통 파라미터
        const minOffset = 0;
        const maxOffset = 10; // <- 모바일에서 여기서 멈춤
        const minOpacity = 0;
        const maxOpacity = 1;

        const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600;

        // 모바일: 애니메이션 없이 최대 오프셋에서 고정
        if (isMobile) {
            if (textEl) textEl.setAttribute('opacity', '1'); // 항상 보이게
            textPathRef.current.setAttribute('startOffset', `${maxOffset}%`); // max에서 멈춤
            return;
        }

        // 데스크탑 이상: 스크롤 애니메이션
        if (textEl) textEl.setAttribute('opacity', '0');

        const tween = gsap.to(
            {},
            {
                scrollTrigger: {
                    trigger: pathRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 1,
                    onUpdate: (self) => {
                        if (!textPathRef.current) return;
                        const offset = minOffset + self.progress * (maxOffset - minOffset);
                        textPathRef.current.setAttribute('startOffset', `${offset}%`);

                        if (textEl) {
                            const opacity = minOpacity + self.progress * (maxOpacity - minOpacity);
                            textEl.setAttribute('opacity', String(opacity));
                        }
                    },
                },
            }
        );

        return () => {
            tween?.scrollTrigger?.kill();
            tween?.kill();
        };
    }, []);

    return (
        <MagazineDetailItem2Style className="mag-item2 pop-up">
            <div className="mobile-btn-wrap">
                <button>이전</button>
                <button onClick={onNext}>오늘의 재료</button>
            </div>
            <div className="mobile-txts">
                <h2 className="fontChange" data-aos="fade-up" data-aos-delay="200">
                    Chef&apos;s Say
                </h2>
                <h3 data-aos="fade-up" data-aos-delay="200">
                    "겉은 바삭하고 속은 부드러운 으깬 감자구이"
                </h3>
            </div>
            <div className="chefs">
                <img src="/images/magazine/detail-chef.png" alt="" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pathTxt"
                    width="500"
                    height="500"
                    viewBox="0 0 500 500"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        {/* textPath가 따라갈 실제 경로 */}
                        <path id="def-1" ref={defRef} />
                    </defs>

                    {/* 눈에 보이는 원형 경로 */}
                    <path
                        id="path-1"
                        ref={pathRef}
                        d="M1.08659 144.5C1.08659 65.0265 57.0029 1 125.5 1C193.997 1 249.913 65.0265 249.913 144.5C249.913 223.974 193.997 288 125.5 288V289C194.812 289 251 224.305 251 144.5C251 64.6949 194.812 0 125.5 0C56.1883 0 1.12057e-05 64.6949 1.12057e-05 144.5C1.12057e-05 224.305 56.1883 289 125.5 289V288C57.0029 288 1.08659 223.974 1.08659 144.5Z"
                        fill="none"
                        // stroke="red"
                        strokeWidth="2"
                    />

                    {/* 원을 따라 움직이는 텍스트 */}
                    <text fontSize="20" fill="black">
                        <textPath
                            ref={textPathRef}
                            href="#def-1"
                            startOffset="0%"
                            side="right"
                            method="align"
                            spacing="auto"
                            dominantBaseline="middle"
                        >
                            이달의 셰프 ‘윤태림(Yoon Taerim)’
                        </textPath>
                    </text>
                </svg>
            </div>
            <div className="txts">
                <h2 className="fontChange" data-aos="fade-up" data-aos-delay="200">
                    Chef&apos;s Say
                </h2>
                <h3 data-aos="fade-up" data-aos-delay="200">
                    "겉은 바삭하고 속은 부드러운 으깬 감자구이"
                </h3>
                <p data-aos="fade-up" data-aos-delay="200">
                    “강원도 고랭지에서 막 수확한 제철 감자를 삶아 곱게 으깬 뒤 파르미지아노 치즈와
                    파슬리를 올렸습니다. 에어프라이어로 겉은 은은하고 바삭하게, 속은 촉촉하게 구워
                    한 입마다 부드럽게 녹아내리죠. 치즈와 파슬리로 맛을 더 풍부하게 하고, 그릭
                    요거트와 레몬을 곁들여 향과 고소함을 완성했습니다.
                    <span>
                        <br /> <br />
                    </span>
                    집에서도 간단히 만들 수 있지만, 맛과 품격은 레스토랑 한 접시와 다름없습니다.”
                </p>
            </div>
        </MagazineDetailItem2Style>
    );
};

export default MagazineDetailItem2;
