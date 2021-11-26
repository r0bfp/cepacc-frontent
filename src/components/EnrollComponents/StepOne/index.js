import React from "react";
import { Input, Button, Form, DatePicker } from "antd";

import { MainContainer } from "./style";


export default function Signin() {
    return (
        <MainContainer>
            <Form layout='vertical'>
                <Form.Item label="Nome Completo">
                    <Input />
                </Form.Item>
                <Form.Item label="CPF" style={{width: '200px'}}>
                    <Input />
                </Form.Item>
                <Form.Item label="RG" style={{width: '200px'}}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Data de Nascimento"
                    name="birth"
                    style={{gridArea: 'birth'}}
                >
                    <DatePicker format={'DD-MM-YYYY'} placeholder='Selecionar' />
                </Form.Item>
            </Form>
        </MainContainer>
    )
}