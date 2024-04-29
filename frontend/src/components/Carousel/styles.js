import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const Container = styled.div`
  max-width: 100rem;
  width: 100%;
  margin: 3rem auto 0;
`;

export const CustomSlideSwiper = styled(SwiperSlide)`
  border-radius: 5px;
  &.swiper-slide-active {
    border: 3px solid #008feb; 
  }
`;

export const SkeletonSlideSwiper = styled(SwiperSlide)`
  background-color: gray;
  height: 20rem;
`;
