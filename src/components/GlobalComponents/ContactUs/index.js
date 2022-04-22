import React from "react";
import { useLocation } from "react-router-dom";
import { ButtonContainer, MainContainer, MainContent, Message } from "./style";


export default function ContactUs() {
    const { pathname } = useLocation();

    return (
        pathname !== '/area-do-aluno/dashboard' &&
        <MainContainer>
            {/* <MainContent>
                
            </MainContent> */}
            <ButtonContainer onClick={() => window.open("https://api.whatsapp.com/send?phone=5511933555753", "_blank")}>
                <Message>FALE CONOSCO</Message>
            </ButtonContainer>
        </MainContainer>
    )
}