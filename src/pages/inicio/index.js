import React from "react";

import { Carousel } from "antd";
import { MainContainer, CarouselImageContainer } from "./style";


export default function Inicio(){
    return (
        <MainContainer>
            <Carousel autoplay>
                <CarouselImageContainer>
                    <h3>1</h3>
                </CarouselImageContainer>
                <CarouselImageContainer>
                    <h3>2</h3>
                </CarouselImageContainer>
                <CarouselImageContainer>
                    <h3>3</h3>
                </CarouselImageContainer>
                <CarouselImageContainer>
                    <h3>4</h3>
                </CarouselImageContainer>
            </Carousel>
        </MainContainer>
    )
}