import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/keyboard';
import { Container,CustomSlideSwiper } from './styles';

export function Carousel({ data }) {
    return (
        <Container>
            <Swiper
                modules={[Keyboard]}
                spaceBetween={16}
                slidesPerView={5.2}
                keyboard={{ enabled: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {
                    data && data.map(data =>
                    (
                        <CustomSlideSwiper key={data.id}>
                            <img 
                            src={data.image} 
                            alt=""
                             /> 
                        </CustomSlideSwiper>
                    ))
                }
            </Swiper>
        </Container>
    )
}