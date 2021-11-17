import React from "react";
import { Form, Input, InputNumber, Select, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { ConfirmContainer, MainContainer, MainContent } from "./style";


export default function AddRow(props) {
    const coursesTypesMock = [
        '2° Licenciatura',
        'Pós-Graduação',
        'Cursos de Extensão',
        'Reforço Escolar',
        'Cursos Preparatórios',
    ];

    const coursesAreasMock = [
        'Saúde',
        'Negócios',
        'Educação',
    ];

    const coursesModalitiesMock = [
        'EAD',
        'Presencial',
        'Semipresencial',
    ];

    return (
        <MainContainer>
            <Form layout='vertical'>
                <MainContent>
                    <Form.Item label="Curso" style={{gridArea: 'name'}}>
                        <Input placeholder="Nome do curso" />
                    </Form.Item>
                    <Form.Item label="Duração" style={{gridArea: 'duration'}}>
                        <InputNumber placeholder="Duração" />
                    </Form.Item>
                    <Form.Item label='Área' style={{gridArea: 'area'}}>
                        <Select
                            showSearch
                            placeholder="Buscar"
                            optionFilterProp="children"
                        >
                        {
                            coursesAreasMock.map((e, i) => {
                                return <Select.Option key={i} value={i}>{e}</Select.Option>
                            })
                        }
                        </Select>
                    </Form.Item>
                    <Form.Item label='Tipo' style={{gridArea: 'type'}}>
                        <Select
                            showSearch
                            placeholder="Buscar"
                            optionFilterProp="children"
                        >
                        {
                            coursesTypesMock.map((e, i) => {
                                return <Select.Option key={i} value={i}>{e}</Select.Option>
                            })
                        }
                        </Select>
                    </Form.Item>
                    <Form.Item label='Modalidade' style={{gridArea: 'modality'}}>
                        <Select
                            showSearch
                            placeholder="Buscar"
                            optionFilterProp="children"
                        >
                        {
                            coursesModalitiesMock.map((e, i) => {
                                return <Select.Option key={i} value={i}>{e}</Select.Option>
                            })
                        }
                        </Select>
                    </Form.Item>
                    <ConfirmContainer>
                        <Button type="primary" shape="circle" icon={<PlusOutlined />} />
                    </ConfirmContainer>
                </MainContent>
            </Form>
        </MainContainer>
    )
}
