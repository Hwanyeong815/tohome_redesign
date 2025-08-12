import { useSelector } from 'react-redux';
import SubscribeLi from './SubscribeLi';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import { FreeMode, Autoplay } from 'swiper/modules';

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
            {sideDishes.map((dishes, idx) => (
                <SwiperSlide key={idx}>
                    <SubscribeLi dishes={dishes} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SubscribeUl;
