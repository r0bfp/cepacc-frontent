import React from "react";

import { Main, MainContainer, StepContentContainer } from "./style";
import Stepper from "../../components/EnrollComponents/Stepper";
import StepOne from "../../components/EnrollComponents/StepOne";


export default function Enroll(){
    return (
        <MainContainer>
            <Main>
                <Stepper></Stepper>
                <StepContentContainer>
                    <StepOne/>
                </StepContentContainer>
            </Main>
        </MainContainer>
    )
}