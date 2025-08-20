import { MagazineDetailItem2Style } from './style';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const MagazineDetailItem2 = () => {
    useEffect(() => {
        const targetTextPath = document.querySelector('#animatedCurvedTextOnPath');

        const triggerContainer = document.querySelector('#mainSvgContainer');

        if (!targetTextPath || !triggerContainer) {
            console.warn(
                'SVG 요소를 찾을 수 없어! HTML ID를 다시 확인해봐! (myActualTextPathCurve 또는 mainSvgContainer)'
            );
            return;
        }

        gsap.fromTo(
            targetTextPath,
            {
                startOffset: '100%',
                opacity: 0,
            },
            {
                startOffset: '0%',
                opacity: 1,
                duration: 2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: triggerContainer,
                    start: 'top 80%',
                },
            }
        );

        gsap.from(triggerContainer, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: triggerContainer,
                start: 'top 95%',
            },
        });
    }, []);

    return (
        <MagazineDetailItem2Style>
            <div className="chefs">
                <img src="/images/magazine/detail-chef.png" alt="" />
                {/* <img src="/images/magazine/detail-chef-txt.png" alt="" /> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="145"
                    // height="215"
                    width="500"
                    height="500"
                    viewBox="-100 -100 700 700"
                    fill="none"
                    className="pathTxt"
                    id="mainSvgContainer"
                >
                    <path
                        id="myActualTextPathCurve"
                        d="M10 80 Q 75 10 150 80"
                        fill="none"
                        stroke="red"
                    />
                </svg>

                <text>
                    <textPath href="#myActualTextPathCurve" id="animatedCurvedTextOnPath">
                        이 글자들이 곡선을 따라 움직일 거야!
                    </textPath>
                </text>
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
                    요거트와 레몬을 곁들여 향과 고소함을 완성했습니다. 집에서도 간단히 만들 수
                    있지만, 맛과 품격은 레스토랑 한 접시와 다름없습니다.”
                </p>
            </div>
        </MagazineDetailItem2Style>
    );
};

export default MagazineDetailItem2;
