import React, { useState } from "react";
import { Form, Input, InputNumber, Select, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { Body, Footer, Header, BlackBackground, MainContent, Title } from "./style";

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


export default function ModalAddCourse({visible, setVisible, handleAddNewCourse}) {
    const [ newCourse, setNewCourse ] = useState({
        name: '',
        duration: '',
        type: '',
        area: '',
        modality: '',
    });

    function handleOkClick() {
        handleAddNewCourse(newCourse);
        setVisible(prev => !prev);
    }

    return (
        <BlackBackground visible={visible}>
            <MainContent>
                <Header>
                    <Title>Adicionar Curso</Title>
                    <CloseOutlined style={{ fontSize: '22px', cursor: 'pointer' }} onClick={() => setVisible(prev => !prev)}/>
                </Header>
                <Body>
                    <Form labelCol={{ span: 6 }}>
                        <Form.Item label="CURSO">
                            <Input placeholder="Nome do curso" onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}/>
                        </Form.Item>
                        <Form.Item label="DURAÇÃO">
                            <InputNumber min={0} placeholder="Duração" onChange={(e) => setNewCourse({...newCourse, duration: e})}/>
                        </Form.Item>
                        <Form.Item label='ÁREA'>
                            <Select
                                showSearch
                                placeholder="Buscar"
                                optionFilterProp="children"
                                onChange={(e) => setNewCourse({...newCourse, area: e})}
                            >
                            {
                                coursesAreasMock.map((e, i) => {
                                    return <Select.Option key={i} value={e}>{e}</Select.Option>
                                })
                            }
                            </Select>
                        </Form.Item>
                        <Form.Item label='TIPO'>
                            <Select
                                showSearch
                                placeholder="Buscar"
                                optionFilterProp="children"
                                onChange={(e) => setNewCourse({...newCourse, type: e})}
                            >
                            {
                                coursesTypesMock.map((e, i) => {
                                    return <Select.Option key={i} value={e}>{e}</Select.Option>
                                })
                            }
                            </Select>
                        </Form.Item>
                        <Form.Item label='MODALIDADE'>
                            <Select
                                showSearch
                                placeholder="Buscar"
                                optionFilterProp="children"
                                onChange={(e) => setNewCourse({...newCourse, modality: e})}
                            >
                            {
                                coursesModalitiesMock.map((e, i) => {
                                    return <Select.Option key={i} value={e}>{e}</Select.Option>
                                })
                            }
                            </Select>
                        </Form.Item>
                    </Form>
                </Body>
                <Footer>
                    <Button onClick={() => setVisible(prev => !prev)}>Cancelar</Button>
                    <Button onClick={() => handleOkClick()} type='primary'>OK</Button>
                </Footer>
            </MainContent>
        </BlackBackground>
    )
}