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
                speed={3000}
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
