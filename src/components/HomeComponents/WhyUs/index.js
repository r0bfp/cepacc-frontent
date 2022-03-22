import React from "react";
import { useState, useEffect } from "react";
import CountUp from "react-countup";

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
    const [ counterStart, setCounterStart] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            window.pageYOffset > 1450 &&
            setCounterStart(true);
        }
    }, []);

    return (
        <MainContainer>
            <LeftSquare/>
            <MainContent>
                <Title>Por que escolher a CEPACC?</Title>
                <Differentials>
                    <DifferentialContainer>
                        <DifferentialTitle
                            >+ de <CountUp end={400} >
                            {({ countUpRef, start }) => (
                                <>
                                    <span ref={countUpRef} />
                                    {counterStart && start()}
                                </>
                            )}
                            </CountUp>
                        </DifferentialTitle>
                        <DifferentialSubTitle>Cursos</DifferentialSubTitle>
                    </DifferentialContainer>
                    <DifferentialContainer>
                        <DifferentialTitle
                            >+ de <CountUp end={150} >
                            {({ countUpRef, start }) => (
                                <>
                                    <span ref={countUpRef} />
                                    {counterStart && start()}
                                </>
                            )}
                            </CountUp>
                        </DifferentialTitle>
                        <DifferentialSubTitle>Alunos</DifferentialSubTitle>
                    </DifferentialContainer>
                    <DifferentialContainer>
                        <DifferentialTitle
                            >+ de <CountUp end={7} >
                            {({ countUpRef, start }) => (
                                <>
                                    <span ref={countUpRef} />
                                    {counterStart && start()}
                                </>
                            )}
                            </CountUp>
                        </DifferentialTitle>
                        <DifferentialSubTitle>Anos de Tradição</DifferentialSubTitle>
                    </DifferentialContainer>
                </Differentials>
            </MainContent>
            <RightSquare/>
        </MainContainer>
    )
}