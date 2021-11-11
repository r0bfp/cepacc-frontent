import React from "react";

import { MainContainer, Section } from "./style";
import Carousel from "../../components/Carousel";
import FindYourCourse from "../../components/FindYourCourse";

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