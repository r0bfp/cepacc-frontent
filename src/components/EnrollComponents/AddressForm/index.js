import React from "react";
import { Input, Form, Select, InputNumber, Divider } from "antd";

import { AddressDataContainer, MainContainer, Title } from "./style";


export default function AddressForm() {
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
    ];

    return (
        <MainContainer>
            <Title>Endereço</Title>
            <Divider style={{marginTop: '10px'}}/>
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
                        label="CIDADE"
                        name="city"
                        style={{gridArea: 'city'}}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="ESTADO"
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
                        label="RUA/AVENIDA"
                        name="street"
                        style={{gridArea: 'street'}}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="BAIRRO"
                        name="district"
                        style={{gridArea: 'district'}}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="NÚMERO"
                        name="number"
                        style={{gridArea: 'number'}}
                    >
                        <InputNumber max={9999999}/>
                    </Form.Item>
                </AddressDataContainer>
            </Form>
        </MainContainer>
    )
}