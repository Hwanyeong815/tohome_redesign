import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';

const RecomArr = [
    {
        highText: 'MD’s PICK',
        title: '[블랑제리코팡] 바삭한 치즈 스콘',
        p: `일반적인 스콘과 다른 특이한 모양의 매력적인 스콘. \n 노르스름한 색감이 먹음직스럽고 치즈의 풍미까지 \n
즐길 수 있어 기존 스콘보다 진한 맛을 원하는 이들에게 \n 제격입니다. \n`,
        subTitle: '좋은 한끼를 위한 MD의 작은 제안',
        img: '',
    },
    {
        highText: '오늘의 타임특가',
        title: '[modoo] 모두의 데일리 서리태 볶음콩 (33입/박스)',
        p: '건강한 간식으로 사랑받는 서리태 볶음콩 선물세트를 \n 오늘 하루, 특별한 가격에 준비했어요. \n 서리태를 기름 없이 바삭하게 볶아, \n 소금이나 설탕 없이도 깊은 고소함이 살아있습니다.',
        subTitle: '오늘 이 시간, 더 가볍게 만나는 건강 간식',
        img: '',
    },
    {
        highText: '오늘의 브랜드',
        title: '팻위치 Fat witch',
        p: '뉴욕 첼시마켓에서 맛 볼 수 있던 팻위치 브라우니. \n 매일 먹을 수 있는 건강한 브라우니를 추구하며 \n 모두 수작업으로 생산하는 브랜드 입니다. \n 호불호 없는 선물을 원한다면 팻위치를 기억하세요!',
        subTitle: '현대식품관이 먼저 담아본 브랜드, 좋은 식품은 좋은 브랜드에서 시작됩니다',
        img: '',
    },
];

const MainRecom = () => {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
            >
                <SwiperSlide>
                    <h3 className="sub-title">subTitle</h3>
                    <section>
                        <div className="left">
                            <strong>highText</strong>
                            <h2>title</h2>
                            <div className="txt">
                                <p>일반적인 스콘과 다른 특이한 모양의 매력적인 스콘.</p>
                                {/* <img
                                    src="/images/main/underline.png"
                                    alt=""
                                    className="underline"
                                /> */}
                            </div>
                        </div>
                        <div className="right">
                            <img src="" alt="" />
                        </div>
                    </section>
                </SwiperSlide>

                {/* {RecomArr.map(({ title, subTitle, highText, img, p }, idx) => (
                    <SwiperSlide key={idx}>
                        <h3 className="sub-title">{subTitle}</h3>
                        <section>
                            <div className="left">
                                <strong>{highText}</strong>
                                <h2>{title}</h2>
                                <p>
                                    <img
                                        src="/images/main/underline.png"
                                        alt=""
                                        className="underline"
                                    />
                                    {p}
                                </p>
                            </div>
                            <div className="right">
                                <img src={img} alt={title} />
                            </div>
                        </section>
                    </SwiperSlide>
                ))} */}
            </Swiper>
        </>
    );
};

export default MainRecom;
