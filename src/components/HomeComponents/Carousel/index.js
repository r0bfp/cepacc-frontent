import React from "react";
import { Carousel as AntdCarousel} from "antd";

import { MainContainer, CarouselImageContainer, CarouselContainer } from "./style";
import { importAllImages } from "../../../tools";


export default function Carousel() {
    const banners = importAllImages(require.context('../../../assets/carousel', false, /\.(png|jpe?g|svg)$/));

    return (
        <MainContainer>
            <CarouselContainer>
                <AntdCarousel autoplay>
                    {
                        Object.values(banners).map((banner, index) => (
                            <CarouselImageContainer key={index}>
                                <img src={banner.default} alt='banner'/>
                            </CarouselImageContainer>
                        ))
                    }
                </AntdCarousel>
            </CarouselContainer>
        </MainContainer>
    )
}