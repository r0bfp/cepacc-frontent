import React from "react";

import { MainContainer, Section } from "./style";
import Carousel from "../../components/HomeComponents/Carousel";

export default function Home(){
    return (
        <MainContainer>
            <Section>
                <Carousel/>
            </Section>
            <Section>
                {/* <FindYourCourse/> */}
            </Section>
        </MainContainer>
    )
}