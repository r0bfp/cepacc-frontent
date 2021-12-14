import React from "react";

import { MainContainer, Section } from "./style";
import Carousel   from "../../components/HomeComponents/Carousel";
import OurCourses from "../../components/HomeComponents/OurCourses";
import WhyUs      from "../../components/HomeComponents/WhyUs";
import Modalities from "../../components/HomeComponents/Modalities";

export default function Home(){
    return (
        <MainContainer>
            <Section>
                <Carousel/>
            </Section>
            <Section>
                <OurCourses/>
            </Section>
            <Section>
                <WhyUs/>
            </Section>
            <Section>
                <Modalities/>
            </Section>
        </MainContainer>
    )
}