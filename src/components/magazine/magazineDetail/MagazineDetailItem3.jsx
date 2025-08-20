import { MagazineDetailItem3Style } from './style';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MagazineDetailItem3 = () => {
    const imgRefs = useRef([]);
    const mainImgRef = useRef(null);

    const addToRefs = (el) => {
        if (el && !imgRefs.current.includes(el)) {
            imgRefs.current.push(el);
        }
    };

    useEffect(() => {
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

        imgRefs.current.forEach((img, index) => {
            gsap.fromTo(
                img,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: img,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: 0.3,
                    },
                    duration: 0.6,
                    delay: index * 0.1,
                }
            );
        });
    }, []);

    return (
        <MagazineDetailItem3Style>
            <h2 className="mag-title">오늘의재료</h2>
            <div className="main-img" ref={mainImgRef}>
                <img src="/images/magazine/detail-con3-img.png" alt="" />
            </div>
            <div className="imgs">
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
