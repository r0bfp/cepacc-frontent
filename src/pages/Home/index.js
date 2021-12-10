import React from "react";

import { MainContainer, Section } from "./style";
import Carousel   from "../../components/HomeComponents/Carousel";
import OurCourses from "../../components/HomeComponents/OurCourses";
import WhyUs      from "../../components/HomeComponents/WhyUs";

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
                <div style={{height: '500px'}}></div>
            </Section>
        </MainContainer>
    )
}