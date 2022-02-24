import React, { useState } from "react";

import { toTitleCase } from "../../../tools";

import { 
    HeaderContainer,
    HeaderDate,
    WelcomeTitle,
    MainContainer, 
    Title, 
    WelcomeContainer,
    WelcomeText
} from "./style";


export default function Home() {
    const date = new Date();
    const today = {
        weekday: date.toLocaleDateString('default', { weekday: 'long' }),
        day: date.getDate(),
        month: date.toLocaleDateString('default', { month: 'long' }),
        year: date.getFullYear(),
    };


    return (
        <MainContainer>
            <HeaderContainer>
                <Title>Início</Title>
                <HeaderDate>{`${toTitleCase(today.weekday)}, ${today.day} de ${toTitleCase(today.month)} de ${today.year}`}</HeaderDate>
            </HeaderContainer>
            <WelcomeContainer>
                <WelcomeTitle>Bem vindo(a) de volta Usuário Teste!</WelcomeTitle>
                <WelcomeText>Laborum dolor exercitation aute culpa eiusmod excepteur tempor id ea commodo. Ad sunt velit nostrud ut. Voluptate ad esse laboris mollit aute incididunt mollit proident eiusmod exercitation enim id. Officia esse dolore sit mollit. Elit sint duis voluptate eu fugiat dolor est voluptate amet eu.</WelcomeText>
            </WelcomeContainer>
        </MainContainer>
    )
}