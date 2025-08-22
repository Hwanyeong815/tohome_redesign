import { MagazineDetailItem3Style } from './style';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MagazineDetailItem3 = ({ onPrev, onNext }) => {
    const imgRefs = useRef([]);
    const mainImgRef = useRef(null);
    const imgsContainerRef = useRef(null);

    const addToRefs = (el) => {
        if (el && !imgRefs.current.includes(el)) {
            imgRefs.current.push(el);
        }
    };

    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    useEffect(() => {
        // SSR 가드
        if (typeof window === 'undefined') return;

        const isMobile = window.matchMedia('(max-width: 600px)').matches;

        // 혹시 이전에 만들어진 트리거가 있으면 정리
        ScrollTrigger.getAll().forEach((t) => t.kill());

        if (isMobile) {
            // 모바일: 애니메이션 비활성 + 즉시 보이기
            if (mainImgRef.current) {
                gsap.set(mainImgRef.current, { opacity: 1, y: 0, scale: 1 });
            }
            imgRefs.current.forEach((img) => {
                gsap.set(img, { opacity: 1, y: 0 });
            });
            return; // 트리거/애니메이션 생성 안 함
        }

        // 데스크탑 이상: 기존 애니메이션 동작
        const ctx = gsap.context(() => {
            // 초기 상태(숨김)
            imgRefs.current.forEach((img) => {
                gsap.set(img, { opacity: 0, y: 50 });
            });

            if (mainImgRef.current) {
                gsap.fromTo(
                    mainImgRef.current,
                    { opacity: 0, y: 50, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        scrollTrigger: {
                            trigger: mainImgRef.current,
                            start: 'top 80%',
                            end: 'top 60%',
                            scrub: 0.3,
                        },
                        duration: 0.8,
                    }
                );
            }

            if (imgsContainerRef.current && imgRefs.current.length > 0) {
                ScrollTrigger.create({
                    trigger: imgsContainerRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    onEnter: () => {
                        const shuffled = shuffleArray(imgRefs.current);
                        shuffled.forEach((img, index) => {
                            gsap.to(img, {
                                opacity: 1,
                                y: 0,
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: 'power2.out',
                            });
                        });
                    },
                    onLeave: () => {
                        imgRefs.current.forEach((img) => {
                            gsap.to(img, {
                                opacity: 0,
                                y: 50,
                                duration: 0.3,
                                ease: 'power2.in',
                            });
                        });
                    },
                    onEnterBack: () => {
                        const shuffled = shuffleArray(imgRefs.current);
                        shuffled.forEach((img, index) => {
                            gsap.to(img, {
                                opacity: 1,
                                y: 0,
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: 'power2.out',
                            });
                        });
                    },
                    onLeaveBack: () => {
                        imgRefs.current.forEach((img) => {
                            gsap.to(img, {
                                opacity: 0,
                                y: 50,
                                duration: 0.3,
                                ease: 'power2.in',
                            });
                        });
                    },
                });
            }
        });

        // 클린업
        return () => ctx.revert();
    }, []);

    return (
        <MagazineDetailItem3Style className="mag-item3">
            <div className="mobile-btn-wrap">
                <button onClick={onPrev}>Chef’s Say</button>
                <button onClick={onNext}>조리방법</button>
            </div>
            <h2 className="mag-title">오늘의재료</h2>
            <div className="main-img" ref={mainImgRef}>
                <img src="/images/magazine/detail-con3-img.png" alt="" />
            </div>
            <div className="imgs" ref={imgsContainerRef}>
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className={`img-box detail-vectors detail-vectors${i + 1}`}
                        ref={addToRefs}
                    >
                        <img
                            src={`/images/magazine/detail-con3-vectors/${i + 1}.png`}
                            alt={`vectors-${i + 1}`}
                        />
                    </div>
                ))}
            </div>
            <div className="mobile-txt-wrap">
                <p>
                    감자 350-400g
                    <br />
                    굵은소금 1작은술
                    <br />
                    엑스트라버진 올리브오일 적당량
                    <br />
                    구운소금 적당량
                    <br />
                    파르미지아노 레지아노 20-30g
                    <br />
                    파슬리 약간
                    <br />
                    <br />
                    그릭요거트 플레인 적당량
                    <br />
                    레몬 1/2개
                    <br />
                    송송 썬 쪽파 약간
                    <br />
                    페퍼론치노 홀 2개
                </p>
            </div>
        </MagazineDetailItem3Style>
    );
};

export default MagazineDetailItem3;
