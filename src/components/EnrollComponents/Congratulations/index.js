import React, { useState } from "react";
import { Input, Form } from "antd";

import { ImageContainer, MainContainer, MessageContainer } from "./style";
import congratulationsImage from "../../../assets/congratulations.png";


export default function SignUpForm() {
    return (
        <MainContainer>
            <ImageContainer>
                <img src={congratulationsImage} alt='contratulations'/>
            </ImageContainer>
            <MessageContainer>
                <h1>PARABÉNS!</h1>
                <span>Você acaba de dar o primeiro passo rumo a uma carreira de sucesso!</span>
                <br/>
                <span>Em breve um de nossos consultores entrará em contato.</span>
            </MessageContainer>
        </MainContainer>
    )
}