import React from "react";
import { useLocation } from "react-router-dom";
import { RiWhatsappFill, RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";

import { 
    InfosColumn,
    InfosContainer,
    Link,
    StaticLink,
    MainContainer, 
    MainContent, 
    SocialContainer, 
    Title, 
    SocialMediasContainer, 
    SocialMediasTitle, 
} from "./style";


export default function Footer() {
    const { pathname } = useLocation();

    return (
        pathname !== '/area-do-aluno/dashboard' &&
        <MainContainer>
            <MainContent>
                <InfosColumn>
                    <InfosContainer>
                        <Title>A CEPACC</Title>
                        <Link>Sobre a CEPACC</Link>
                        <Link>Institucional</Link>
                    </InfosContainer>
                    <InfosContainer>
                        <Title>Contato</Title>
                        <StaticLink>(11) 4489-0397</StaticLink>
                        <StaticLink>(11) 97471-5967 WhatsApp</StaticLink>
                        <StaticLink>(11) 95299-2978 WhatsApp</StaticLink>
                        <StaticLink>(11) 95299-2978 WhatsApp - Comercial</StaticLink>
                    </InfosContainer>
                </InfosColumn>
                <InfosColumn>
                    <InfosContainer>
                        <Title>Cursos</Title>
                        <Link>Graduação</Link>
                        <Link>Pós-Graduação</Link>
                        <Link>Extensão</Link>
                        <Link>Preparatório</Link>
                    </InfosContainer>
                </InfosColumn>
            </MainContent>
            <SocialContainer>
                <SocialMediasTitle>Nossas Redes</SocialMediasTitle>
                <SocialMediasContainer>
                    <RiWhatsappFill color='#128C7E'/>
                    <RiFacebookBoxFill color='#3b5998'/>
                    <RiInstagramFill color='#bb1500'/>
                </SocialMediasContainer>
            </SocialContainer>
        </MainContainer>
    )
}