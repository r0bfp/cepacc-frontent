import React from "react";

import { 
    DifferentialContainer, 
    Differentials, 
    DifferentialSubTitle, 
    DifferentialTitle, 
    MainContainer, 
    MainContent, 
    LeftSquare,
    Title, 
    RightSquare
} from "./style";

export default function WhyUs() {
    return (
        <MainContainer>
            <LeftSquare/>
            <MainContent>
                <Title>Por que escolher a CEPACC?</Title>
                <Differentials>
                    <DifferentialContainer>
                        <DifferentialTitle>+ de 80</DifferentialTitle>
                        <DifferentialSubTitle>Cursos</DifferentialSubTitle>
                    </DifferentialContainer>
                    <DifferentialContainer>
                        <DifferentialTitle>+ de 200</DifferentialTitle>
                        <DifferentialSubTitle>Alunos</DifferentialSubTitle>
                    </DifferentialContainer>
                    <DifferentialContainer>
                        <DifferentialTitle>+ de 10</DifferentialTitle>
                        <DifferentialSubTitle>Anos de Tradição</DifferentialSubTitle>
                    </DifferentialContainer>
                </Differentials>
            </MainContent>
            <RightSquare/>
        </MainContainer>
    )
}