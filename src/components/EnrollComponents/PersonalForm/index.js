import React from "react";
import { Input, Form, DatePicker, Divider } from "antd";

import { MainContainer, Title } from "./style";


export default function PersonalForm() {
    return (
        <MainContainer>
            <Title>Dados Pessoais</Title>
            <Form layout='vertical'>
                <Form.Item label="NOME COMPLETO">
                    <Input />
                </Form.Item>
                <Form.Item label="CPF" style={{width: '200px'}}>
                    <Input />
                </Form.Item>
                <Form.Item label="RG" style={{width: '200px'}}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="DATA DE NASCIMENTO"
                    name="birth"
                    style={{gridArea: 'birth'}}
                >
                    <DatePicker format={'DD-MM-YYYY'} placeholder='Selecionar' />
                </Form.Item>
            </Form>
        </MainContainer>
    )
}