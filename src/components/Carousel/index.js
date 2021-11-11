import React from "react";
import { Carousel as AntdCarousel, Typography} from "antd";

import { MainContainer, CarouselImageContainer, MessageContainer } from "./style";

export default function Carousel() {
    return (
        <MainContainer>
            <AntdCarousel autoplay>
                <CarouselImageContainer>
                    <MessageContainer>
                        <Typography.Title>Titulo 1</Typography.Title>
                        <Typography.Paragraph>Mensagem 1</Typography.Paragraph>
                    </MessageContainer>
                </CarouselImageContainer>
                <CarouselImageContainer>
                    <MessageContainer>
                        <Typography.Title>Titulo 2</Typography.Title>
                        <Typography.Paragraph>Mensagem 2</Typography.Paragraph>
                    </MessageContainer>
                </CarouselImageContainer>
                <CarouselImageContainer>
                    <MessageContainer>
                        <Typography.Title>Titulo 3</Typography.Title>
                        <Typography.Paragraph>Mensagem 3</Typography.Paragraph>
                    </MessageContainer>
                </CarouselImageContainer>
                <CarouselImageContainer>
                    <MessageContainer>
                        <Typography.Title>Titulo 4</Typography.Title>
                        <Typography.Paragraph>Mensagem 4</Typography.Paragraph>
                    </MessageContainer>
                </CarouselImageContainer>
            </AntdCarousel>
        </MainContainer>
    )
}