import { MagazineListStyle } from './style';
import magazineData from '../../assets/data/magazineData';
import gsap from 'gsap';
import { useEffect, useLayoutEffect, useRef } from 'react';

const MagazineList = () => {
    const leftRef = useRef([]);
    const rightRef = useRef();
    const meshRef = useRef();
    const rotatingRefs = useRef([]);
    const h2Ref = useRef();
    const h3Ref = useRef();
    const h4Ref = useRef();

    const addToLeftRefs = (el) => {
        if (el && !leftRef.current.includes(el)) leftRef.current = [...leftRef.current, el];
    };

    const addToRotatingRefs = (el) => {
        if (el && !rotatingRefs.current.includes(el)) rotatingRefs.current.push(el);
    };

    useLayoutEffect(() => {
        // 애니메이션 코드
        gsap.from(leftRef.current, {
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
        });
        gsap.from(h2Ref.current, { opacity: 0, x: 50, duration: 0.8, ease: 'power3.out' });
        gsap.from(h3Ref.current, {
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.2,
        });
        gsap.from(h4Ref.current, {
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.4,
        });
        gsap.from(meshRef.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: 'power3.out',
            delay: 0.8,
        });
        gsap.from(rotatingRefs.current, {
            opacity: 0,
            rotation: 360,
            duration: 1,
            stagger: 0.15,
            ease: 'back.out(1.7)',
            delay: 1,
        });
    }, []);

    return (
        <MagazineListStyle>
            <section className="left">
                {magazineData.slice(0, 12).map((list) => (
                    <div className="img-wrap" key={list.id} ref={addToLeftRefs}>
                        <img src={list.images} alt="" loading="lazy" />
                    </div>
                ))}
            </section>
            <section className="right" ref={rightRef}>
                <div className="right-title">
                    <h2 ref={h2Ref}>Bon&apos; s appetit</h2>
                    <h3 ref={h3Ref}>Chef&apos;s Recipe at Home</h3>
                    <h4 ref={h4Ref}>
                        <span>7월 첫째주 셰프의 레시피</span>‘으깬 감자 구이’
                    </h4>
                </div>
                <div className="right-high">
                    <h3>Tohome Magazine : 집에서 만드는 셰프의 레시피</h3>
                </div>

                <button className="more">
                    자세히보기 <img src="/images/icon/icon_all.png" alt="icon_all.png" />{' '}
                </button>
                <div className="right-main-images-wrap">
                    <img
                        ref={meshRef}
                        src="/images/magazine/recipe-meshpotato.png"
                        alt="meshpotato"
                        className="recipe-meshpotato"
                    />
                    <img
                        ref={addToRotatingRefs}
                        src="/images/magazine/recipe-cheese.png"
                        alt="cheese"
                        className="recipe-cheese"
                    />
                    <img
                        ref={addToRotatingRefs}
                        src="/images/magazine/recipe-basil.png"
                        alt="basil"
                        className="recipe-basil"
                    />
                    <img
                        ref={addToRotatingRefs}
                        src="/images/magazine/recipe-lemon.png"
                        alt="lemon"
                        className="recipe-lemon"
                    />
                    <img
                        ref={addToRotatingRefs}
                        src="/images/magazine/recipe-potato.png"
                        alt="potato"
                        className="recipe-potato"
                    />
                    <img
                        ref={addToRotatingRefs}
                        src="/images/magazine/recipe-yogurt.png"
                        alt="yogurt"
                        className="recipe-yogurt"
                    />
                    <img
                        src="/images/magazine/recipe-parsley.png"
                        alt="parsley"
                        className="recipe-parsley"
                    />
                    <img
                        src="/images/magazine/recipe-blueberry.png"
                        alt="blueberry"
                        className="recipe-blueberry"
                    />
                    <img
                        src="/images/magazine/recipe-eucalyptus.png"
                        alt="eucalyptus"
                        className="recipe-eucalyptus"
                    />
                </div>
            </section>
        </MagazineListStyle>
    );
};

export default MagazineList;
