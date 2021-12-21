import React, { useState } from "react";
import { ExportOutlined } from '@ant-design/icons';

import { 
    FastAccessContainer,
    FastAccessContent,
    MainContainer, MyCoursesContainer, MyCoursesContent, NewsContainer, NewsContent, PartnerContainer, PartnerLink, SubTitle, Title, 
} from "./style";


export default function Home() {
    return (
        <MainContainer>
            <NewsContainer>
                <Title>Notícias</Title>
                <NewsContent>
                    <span>Sejam bem vindos à plataforma EAD da faculdade Educamais, nela você fará seu curso de graduação de forma dinâmica e interativa. O percurso de aprendizagem se dá por meio da vídeo aulas, material de apoio(texto) e atividades práticas. você pode ainda consultar seu histórico e fazer pesquisas em bibliotecas de domínio público, além, de consultar o seu tutor para sanar dúvidas sobre as disciplinas e a plataforma.</span>
                </NewsContent>
            </NewsContainer>
            <FastAccessContainer>
                <Title>Acesso Rápido</Title>
                <FastAccessContent>
                    <PartnerContainer>
                        <PartnerLink>www.google.com.br</PartnerLink>
                        <ExportOutlined />
                    </PartnerContainer>
                    <MyCoursesContainer>
                        <SubTitle>MEUS CURSOS</SubTitle>
                        <MyCoursesContent>

                        </MyCoursesContent>
                    </MyCoursesContainer>
                </FastAccessContent>
            </FastAccessContainer>
        </MainContainer>
    )
}