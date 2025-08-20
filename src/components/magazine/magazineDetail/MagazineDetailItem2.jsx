import { MagazineDetailItem2Style } from './style';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const MagazineDetailItem2 = () => {
    useEffect(() => {
        // 🌟🌟🌟 GSAP이 애니메이션할 대상: <textPath> 요소의 ID 🌟🌟🌟
        const targetTextPath = document.querySelector('#animatedCurvedTextOnPath');
        // ScrollTrigger의 트리거 대상: SVG 전체 컨테이너 ID
        const triggerContainer = document.querySelector('#mainSvgContainer');

        if (!targetTextPath || !triggerContainer) {
            console.warn(
                'SVG 요소를 찾을 수 없어! HTML ID를 다시 확인해봐! (myActualTextPathCurve 또는 mainSvgContainer)'
            );
            return;
        }

        // 🌟🌟🌟 path를 따라 글자가 움직이면서 나타나는 애니메이션 🌟🌟🌟
        gsap.fromTo(
            targetTextPath, // 애니메이션 대상은 <textPath> 요소!
            {
                startOffset: '100%', // 시작: 텍스트가 path의 맨 끝에 (오른쪽에) 숨어있다가
                opacity: 0, // 완전 투명하게
            },
            {
                startOffset: '0%', // 끝: 텍스트가 path의 맨 시작점 (왼쪽으로) 이동해서 나타나고
                opacity: 1, // 불투명하게 됨
                duration: 2, // 애니메이션은 2초 동안 진행
                ease: 'power3.out', // 부드럽게 마무리되는 효과
                scrollTrigger: {
                    trigger: triggerContainer, // SVG 전체 컨테이너가 화면에 나타날 때 애니메이션 시작
                    start: 'top 80%', // 컨테이너의 상단이 뷰포트의 80% 지점에 닿으면 시작
                    // markers: true,         // 개발 시에만 쓰는 마커, 완료 후엔 지워!
                },
            }
        );

        // 만약 'SVG 컨테이너 자체'를 움직이는 애니메이션도 여전히 원한다면 (이전에 있었던 X, Y, Scale 등)
        // triggerContainer (mainSvgContainer)를 타겟으로 추가적인 애니메이션을 여기 넣어주면 돼.
        // 예를 들어:
        gsap.from(triggerContainer, {
            y: 50, // 살짝 아래에서 시작
            opacity: 0, // 투명하게 시작
            duration: 1, // 1초 동안
            ease: 'power1.out',
            scrollTrigger: {
                trigger: triggerContainer,
                start: 'top 95%', // 텍스트 애니메이션보다 살짝 일찍
            },
        });
    }, []); // 이펙트는 컴포넌트 마운트 시 한 번만 실행 (의존성 배열 빈 상태)

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
                    id="mainSvgContainer" // SVG 컨테이너 id
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
