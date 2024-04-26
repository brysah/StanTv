import { Swiper } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/keyboard';
import { Container, CustomSlideSwiper, SkeletonSlideSwiper } from './styles';
import { useEffect, useState } from 'react';

export function Carousel({ data }) { 

    return (
        <Container>
            <Swiper
                modules={[Keyboard]}
                spaceBetween={16}
                slidesPerView={5.2}
                loop={true}
                keyboard={{ enabled: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {
                    data ? data.map(data =>
                    (
                        <CustomSlideSwiper key={data.id}>
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