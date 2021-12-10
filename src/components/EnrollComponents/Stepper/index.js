import React from "react";
import { Steps } from "antd";

import { MainContainer } from "./style";


export default function Signin({currentStepIndex}) {
    return (
        <MainContainer>
            <Steps current={currentStepIndex}>
                <Steps.Step title="Dados de Acesso"/>
                <Steps.Step title="Curso"/>
                <Steps.Step title="Dados Pessoais" />
                <Steps.Step title="Endereço" />
                <Steps.Step title="Resumo" />
            </Steps>
        </MainContainer>
    )
}