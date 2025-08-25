// MagazineDetailItem2.jsx
import { MagazineDetailItem2Style } from './style';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const MagazineDetailItem2 = ({ onPrev, onNext }) => {
    const defRef = useRef(null);
    const pathRef = useRef(null);
    const textPathRef = useRef(null);
    const mmRef = useRef(null); // matchMedia 저장

    useEffect(() => {
        const pathEl = pathRef.current;
        const defEl = defRef.current;
        const textPathEl = textPathRef.current;
        if (!pathEl || !defEl || !textPathEl) return;

        // defs 경로 d 복사
        const d = pathEl.getAttribute('d');
        if (d) defEl.setAttribute('d', d);

        const textEl = textPathEl.parentElement; // <text>

        // 안전한 초기값(데스크톱/모바일 공통)
        textPathEl.setAttribute('startOffset', '0%');
        if (textEl) textEl.setAttribute('opacity', '1'); // 먼저 보이게

        // 모바일/데스크톱 분기
        const mm = gsap.matchMedia();
        mmRef.current = mm;

        // 모바일: 애니메이션 없이 고정
        mm.add('(max-width: 600px)', () => {
            if (textEl) textEl.setAttribute('opacity', '1');
            textPathEl.setAttribute('startOffset', '10%'); // 원하는 고정 지점
            return () => {}; // cleanup 없음
        });

        // 데스크톱: 스크롤에 따라 startOffset/opacity 업데이트
        mm.add('(min-width: 601px)', () => {
            // 초기엔 보여두고, 스크롤 구간에서만 부드럽게 변하도록 설정
            if (textEl) textEl.setAttribute('opacity', '1');

            const st = ScrollTrigger.create({
                trigger: pathEl,
                start: 'top bottom', // 화면 아래에서부터 트리거되게 여유있게
                end: 'top center', // 중앙까지
                scrub: 1,
                onUpdate: (self) => {
                    // 0% ~ 10% 사이로 이동
                    const offset = 0 + self.progress * (10 - 0);
                    textPathEl.setAttribute('startOffset', `${offset}%`);
                    // 필요하면 투명도도 함께
                    const op = 0.2 + self.progress * (1 - 0.2);
                    if (textEl) textEl.setAttribute('opacity', String(op));
                },
                onEnter: () => textEl && textEl.setAttribute('opacity', '1'),
                onLeaveBack: () => textEl && textEl.setAttribute('opacity', '0.2'),
            });

            // 레이아웃 변화 대응
            ScrollTrigger.refresh();

            return () => {
                st.kill();
            };
        });

        return () => {
            // 컴포넌트 언마운트 시 생성한 미디어쿼리/트리거 정리
            mmRef.current?.revert();
        };
    }, []);

    return (
        <MagazineDetailItem2Style className="mag-item2 pop-up">
            <div className="mobile-btn-wrap">
                <button onClick={onPrev}>이전</button>
                <button onClick={onNext}>오늘의 재료</button>
            </div>

            <div className="web-txts">
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

                    {/* 보이는 원형 경로 (stroke 안 주면 안 보이는 게 정상) */}
                    <path
                        id="path-1"
                        ref={pathRef}
                        d="M1.08659 144.5C1.08659 65.0265 57.0029 1 125.5 1C193.997 1 249.913 65.0265 249.913 144.5C249.913 223.974 193.997 288 125.5 288V289C194.812 289 251 224.305 251 144.5C251 64.6949 194.812 0 125.5 0C56.1883 0 1.12057e-05 64.6949 1.12057e-05 144.5C1.12057e-05 224.305 56.1883 289 125.5 289V288C57.0029 288 1.08659 223.974 1.08659 144.5Z"
                        fill="none"
                        strokeWidth="2"
                    />

                    {/* 원을 따라 움직이는 텍스트 */}
                    <text fontSize="20" fill="black">
                        <textPath
                            ref={textPathRef}
                            href="#def-1" // 최신 브라우저용
                            xlinkHref="#def-1" // 호환용 (일부 브라우저/환경)
                            startOffset="0%"
                            method="align"
                            spacing="auto"
                            dominantBaseline="middle"
                        >
                            이달의 셰프 ‘윤태림(Yoon Taerim)’
                        </textPath>
                    </text>
                </svg>
            </div>

            <div className="mobile-txts">
                <p data-aos="fade-up" data-aos-delay="200">
                    “강원도 고랭지에서 막 수확한 제철 감자를 삶아 곱게 으깬 뒤 파르미지아노 치즈와
                    파슬리를 올렸습니다. 에어프라이어로 겉은 은은하고 바삭하게, 속은 촉촉하게 구워
                    한 입마다 부드럽게 녹아내리죠. 치즈와 파슬리로 맛을 더 풍부하게 하고, 그릭
                    요거트와 레몬을 곁들여 향과 고소함을 완성했습니다.
                    <span>
                        <br />
                        <br />
                    </span>
                    집에서도 간단히 만들 수 있지만, 맛과 품격은 레스토랑 한 접시와 다름없습니다.”
                </p>
            </div>
        </MagazineDetailItem2Style>
    );
};

export default MagazineDetailItem2;
