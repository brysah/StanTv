import { Swiper } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/keyboard';
import { Container, CustomSlideSwiper, SkeletonSlideSwiper } from './styles';


export function Carousel({ data }) {

    function handleKey(swiper, key) { 
        if (key === 13) {
            const { activeIndex, slides } = swiper;
            console.log(slides[activeIndex].id);
        }
    }

    return (
        <Container  >
            <Swiper
                modules={[Keyboard]}
                spaceBetween={16}
                slidesPerView={5.2}
                loop={true}
                keyboard={{ enabled: true }}
                onKeyPress={handleKey}
            >

                {
                    data ? data.map(data =>
                    (
                        <CustomSlideSwiper key={data.id} id={data.id}>
                            <img
                                src={data.image}
                                alt=""
                            />
                        </CustomSlideSwiper>
                    )) : (
                        <>
                            <SkeletonSlideSwiper />
                            <SkeletonSlideSwiper />
                            <SkeletonSlideSwiper />
                            <SkeletonSlideSwiper />
                            <SkeletonSlideSwiper />
                            <SkeletonSlideSwiper />
                        </>
                    )
                }
            </Swiper>
        </Container>
    )
}