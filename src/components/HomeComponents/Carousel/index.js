import React from "react";
import { Carousel as AntdCarousel, Typography} from "antd";

import { MainContainer, CarouselImageContainer, MessageContainer, CarouselContainer } from "./style";
import banner from "../../../assets/carousel/banner teste1.png";
import banner2 from "../../../assets/carousel/banner teste2.png";

export default function Carousel() {
    return (
        <MainContainer>
            <CarouselContainer>
                <AntdCarousel autoplay>
                    <CarouselImageContainer>
                        <img src={banner}/>
                    </CarouselImageContainer>
                    <CarouselImageContainer>
                        <img src={banner2}/>
                    </CarouselImageContainer>
                </AntdCarousel>
            </CarouselContainer>
        </MainContainer>
    )
}