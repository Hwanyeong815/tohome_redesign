import { BannerWrap } from './style';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const VisualItem5 = ({ visual, isActive }) => {
    const { title, des, img, imgs, position } = visual;

    const imgRefs = useRef([]);
    imgRefs.current = [];

    const addToRefs = (el) => {
        if (el && !imgRefs.current.includes(el)) {
            imgRefs.current.push(el);
        }
    };

    const txtRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            // 각 이미지마다 다른 delay 적용
            imgRefs.current.forEach((el, index) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.8, delay: index * 0.2, ease: 'power3.out' }
                );
            });

            gsap.fromTo(
                txtRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
            );
        } else {
            gsap.set([...imgRefs.current, txtRef.current], { opacity: 0, y: 0 });
        }
    }, [isActive]);

    return (
        <BannerWrap $position={position} className="visual-con5">
            <div className="img-box">
                {imgs ? (
                    imgs.map((obj, idx) => (
                        <div className="img-box-sub" key={idx}>
                            <img
                                src={obj.src}
                                alt={`${title}-${idx}`}
                                ref={(el) => addToRefs(el)}
                            />
                        </div>
                    ))
                ) : (
                    <img src={img} alt={title} />
                )}
            </div>
            <div className="txt-box" ref={txtRef}>
                <h3>
                    <img src="/images/main/mainVisual5tit.png" alt={title} />
                </h3>
                <p>{des}</p>
                <div className="more">더보기</div>
            </div>
        </BannerWrap>
    );
};

export default VisualItem5;
