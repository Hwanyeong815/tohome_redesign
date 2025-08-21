import { MagazineDetailItem3Style } from './style';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MagazineDetailItem3 = () => {
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
        // 모든 이미지들을 처음부터 숨기기
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

        // imgs 컨테이너에 ScrollTrigger 설정
        if (imgsContainerRef.current && imgRefs.current.length > 0) {
            ScrollTrigger.create({
                trigger: imgsContainerRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                onEnter: () => {
                    // 스크롤에 닿는 순간 이미지들을 랜덤 순서로 섞기
                    const shuffledImgs = shuffleArray(imgRefs.current);

                    // 랜덤 순서로 애니메이션 시작
                    shuffledImgs.forEach((img, index) => {
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
                    // 스크롤을 벗어날 때 이미지들 숨기기
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
                    // 다시 스크롤해서 돌아올 때 새로운 랜덤 순서로 애니메이션
                    const shuffledImgs = shuffleArray(imgRefs.current);

                    shuffledImgs.forEach((img, index) => {
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
                    // 위로 스크롤해서 벗어날 때 이미지들 숨기기
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

        // 컴포넌트 언마운트 시 ScrollTrigger 정리
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <MagazineDetailItem3Style>
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
        </MagazineDetailItem3Style>
    );
};

export default MagazineDetailItem3;
