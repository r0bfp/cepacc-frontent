import React from "react";
import { useLocation } from "react-router-dom";
import { MainContainer, Message } from "./style";


export default function ContactUs() {
    const { pathname } = useLocation();

    return (
        pathname !== '/area-do-aluno/dashboard' &&
        <MainContainer>
            <Message>FALE CONOSCO</Message>
        </MainContainer>
    )
}