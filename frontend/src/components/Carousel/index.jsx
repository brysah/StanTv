import { Swiper } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/keyboard';
import { Container, CustomSlideSwiper, SkeletonSlideSwiper } from './styles';
import { useNavigate } from 'react-router-dom'

export function Carousel({ data }) {
    const navigate = useNavigate();

    function handleKey(swiper, key) {
        if (key === 13) {
            const { activeIndex, slides } = swiper;
            const id = slides[activeIndex].id;
            return navigate(`/program/${id}`)
        }
    }

    return (
        <Container  >
            <Swiper
                modules={[Keyboard]}
                spaceBetween={16} 
                loop={true}
                keyboard={{ enabled: true }}
                onKeyPress={handleKey}
                breakpoints={{
                    320: {
                        slidesPerView: 2.5, 
                    },
                    475: {
                        slidesPerView: 4, 
                    },
                    768: {
                        slidesPerView: 3.2, 
                    },
                    1024: {
                        slidesPerView: 4.2, 
                    },
                    1440: {
                        slidesPerView: 5.2,
                        slidePerGroup: 3, 
                    },
                    1700: {
                        slidesPerView: 6, 
                    },
                }}
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