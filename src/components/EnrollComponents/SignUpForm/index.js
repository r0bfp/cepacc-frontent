import React, { useState } from "react";
import { Input, Form } from "antd";

import { MainContainer, Title } from "./style";


export default function SignUpForm() {
    const [ signupData, setSignupData ] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [ passwordStatus, setPasswordStatus ] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    return (
        <MainContainer>
            <Title>Login</Title>
            <Form layout='vertical'>
                <Form.Item
                    label="EMAIL"
                    name="email"
                    hasFeedback
                    rules={[
                        {
                            type: 'email',
                            message: 'O email inserido é inválido.',
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="SENHA"
                    name="password"
                >
                    <Input.Password onChange={(e) => setSignupData(prev => ({...prev, password: e.target.value}))}/>
                </Form.Item>
                <Form.Item
                    label="CONFIRMAR SENHA"
                    name="confirm-password"
                    hasFeedback
                >
                    <Input.Password onChange={(e) => setSignupData(prev => ({...prev, confirmPassword: e.target.value}))}/>
                </Form.Item>
            </Form>
        </MainContainer>
    )
}