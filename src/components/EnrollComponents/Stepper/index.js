import React from "react";
import { Steps } from "antd";
import { UserOutlined } from '@ant-design/icons';

import { MainContainer } from "./style";


export default function Signin() {
    return (
        <MainContainer>
            <Steps current={0}>
                <Steps.Step title="Dados Pessoais" />
                <Steps.Step title="Dados de Login"/>
                <Steps.Step title="Endereço" />
                <Steps.Step title="Resumo" />
            </Steps>
        </MainContainer>
    )
}