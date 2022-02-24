import React, { useState } from "react";
import { Form, Input, Button, Divider, DatePicker, Select, InputNumber } from "antd";

import { 
    ButtonSendContainer, 
    PersonalDataContainer, 
    MainContainer, 
    Title, 
    AddressDataContainer 
} from "./style";


export default function ManageAccount() {
    const states = [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espírito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso',
        'Mato Grosso do Sul',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraima',
        'Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins',
    ]

    return (
        <MainContainer>
            <Title>Dados Pessoais</Title>
            <Form layout='vertical'>
                <PersonalDataContainer>
                    <Form.Item
                        label="Nome Completo"
                        name="name"
                        style={{gridArea: 'name'}}
                    >
                        <Input placeholder='Ex: José da Silva'/>
                    </Form.Item>
                    <Form.Item
                        label="Data de Nascimento"
                        name="birth"
                        style={{gridArea: 'birth'}}
                    >
                        <DatePicker format={'DD-MM-YYYY'} />
                    </Form.Item>
                    <Form.Item
                        label="CPF"
                        name="cpf"
                        style={{gridArea: 'cpf'}}
                    >
                        <Input placeholder='000.000.000-00'/>
                    </Form.Item>
                    <Form.Item
                        label="RG"
                        name="rg"
                        style={{gridArea: 'rg'}}
                    >
                        <Input placeholder='00.000.000-0'/>
                    </Form.Item>
                    <Form.Item
                        label="Celular"
                        name="phone"
                        style={{gridArea: 'phone'}}
                    >
                        <Input placeholder='(00) 00000-0000'/>
                    </Form.Item>
                </PersonalDataContainer>
            </Form>
            <Title>Endereço</Title>
            <Form layout='vertical'>
                <AddressDataContainer>
                    <Form.Item
                        label="CEP"
                        name="cep"
                        style={{gridArea: 'cep'}}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Cidade"
                        name="city"
                        style={{gridArea: 'city'}}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Estado"
                        name="state"
                        style={{gridArea: 'state'}}
                    >
                        <Select showSearch>
                            {
                                states.map((e, i) => {
                                    return <Select.Option key={i} value={e}>{e}</Select.Option>
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Rua/Avenida"
                        name="street"
                        style={{gridArea: 'street'}}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Bairro"
                        name="district"
                        style={{gridArea: 'district'}}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Número"
                        name="number"
                        style={{gridArea: 'number'}}
                    >
                        <InputNumber max={9999999}/>
                    </Form.Item>
                </AddressDataContainer>
            </Form>
            <ButtonSendContainer>
                <Button type='primary' size="large">Salvar</Button>
            </ButtonSendContainer>
        </MainContainer>
    )
}