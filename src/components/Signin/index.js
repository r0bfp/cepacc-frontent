import React from "react";
import { Input, Button } from "antd";

import { ForgotPassword, InputContainer, MainContainer, MainContent, SubTitle, Title } from "./style";

export default function Signin() {
    return (
        <MainContainer>
            <MainContent>
                <Title>Já estuda com a gente?</Title>
                <SubTitle>Faça seu login e boa aula!</SubTitle>
                <InputContainer>
                    <label>E-Mail</label>
                    <Input size='large'/>
                </InputContainer>
                <InputContainer>
                    <label>Senha</label>
                    <Input size='large'/>
                </InputContainer>
                <Button type='primary' size='large' style={{ marginTop: '10px' }}>ENTRAR</Button>
                <ForgotPassword>Esqueci minha senha</ForgotPassword>
            </MainContent>
        </MainContainer>
    )
}