// DetailArt.jsx
import React from 'react';
import { DetailArtStyle } from './style';
import DetailArtMain from './DetailArtMain';
import DetailArtSub from './DetailArtSub';
import DetailArtFaq from './DetailArtFaq';
import DetailReview from './DetailReview';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, FreeMode, Keyboard, Mousewheel } from 'swiper/modules';

// 필수 CSS
import 'swiper/css';
import 'swiper/css/free-mode';

const DetailArt = () => {
    return (
        <DetailArtStyle>
            <Swiper
                modules={[A11y, Keyboard, Mousewheel, FreeMode]}
                slidesPerView={1}
                spaceBetween={0}
                speed={600}
                loop={false}
                autoHeight={true}
                keyboard={{ enabled: true }}
                mousewheel={{ forceToAxis: true }}
                freeMode={{
                    enabled: true,
                    momentum: true,
                    momentumBounce: true,
                    sticky: false,
                }}
            >
                <SwiperSlide>
                    <section className="detail-slide">
                        <DetailArtMain />
                    </section>
                </SwiperSlide>

                {/* 필요 시 슬라이드 추가 */}
                {/* <SwiperSlide><section className="detail-slide"><DetailArtSub /></section></SwiperSlide>
        <SwiperSlide><section className="detail-slide"><DetailArtFaq /></section></SwiperSlide>
        <SwiperSlide><section className="detail-slide"><DetailReview /></section></SwiperSlide> */}
            </Swiper>
        </DetailArtStyle>
    );
};

export default DetailArt;
