import { useSelector } from 'react-redux';
import SubscribeLi from './SubscribeLi';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { FreeMode, Autoplay } from 'swiper/modules';
import { SubscribeUlStyle } from './style';

const SubscribeUl = () => {
    const { sideDishes } = useSelector((state) => state.cart);

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '100px',
        cssEase: 'linear',
    };
    return (
        <SubscribeUlStyle>
            <Swiper
                slidesPerView={5.5}
                spaceBetween={10}
                loop={true}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={3000} // 슬라이드가 흘러가는 속도
                modules={[FreeMode, Autoplay]}
            >
                {sideDishes.map((dishes) => (
                    <SwiperSlide key={dishes.sideId}>
                        <SubscribeLi dishes={dishes} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SubscribeUlStyle>
    );
};

export default SubscribeUl;
