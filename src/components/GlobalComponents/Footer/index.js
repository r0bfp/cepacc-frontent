import React from "react";

import { 
    InfosColumn,
    InfosContainer,
    Links,
    MainContainer, MainContent, SocialContainer, Title, 
} from "./style";


export default function Footer() {
    return (
        <MainContainer>
            <MainContent>
                <InfosColumn>
                    <InfosContainer>
                        <Title>A CEPACC</Title>
                        <Links>Sobre a CEPACC</Links>
                        <Links>Institucional</Links>
                    </InfosContainer>
                    <InfosContainer>
                        <Title>Contato</Title>
                        <Links>Contato 1</Links>
                        <Links>Contato 2</Links>
                    </InfosContainer>
                </InfosColumn>
                <InfosColumn>
                    <InfosContainer>
                        <Title>Cursos</Title>
                        <Links>Graduação</Links>
                        <Links>Pós-Graduação</Links>
                        <Links>Extensão</Links>
                        <Links>Preparatório</Links>
                    </InfosContainer>
                </InfosColumn>
            </MainContent>
            <SocialContainer>

            </SocialContainer>
        </MainContainer>
    )
}