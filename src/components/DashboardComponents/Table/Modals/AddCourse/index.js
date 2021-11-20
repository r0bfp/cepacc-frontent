import React, { useState } from "react";
import { Form, Input, InputNumber, Select, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { Body, Footer, Header, MainContainer, MainContent, Title } from "./style";

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
        courseName: '',
        courseDuration: '',
        courseType: '',
        courseArea: '',
        courseModality: '',
    });

    function handleOkClick() {
        handleAddNewCourse(newCourse);
        setVisible(prev => !prev);
    }

    return (
        <MainContainer visible={visible}>
            <MainContent>
                <Header>
                    <Title>Adicionar Empresa</Title>
                    <CloseOutlined style={{ fontSize: '22px', cursor: 'pointer' }} onClick={() => setVisible(prev => !prev)}/>
                </Header>
                <Body>
                    <Form layout='horizontal' labelCol={{ span: 5 }}>
                        <Form.Item label="Curso" style={{gridArea: 'name'}}>
                            <Input placeholder="Nome do curso" onChange={(e) => setNewCourse({...newCourse, courseName: e.target.value})}/>
                        </Form.Item>
                        <Form.Item label="Duração" style={{gridArea: 'duration'}}>
                            <InputNumber min={0} placeholder="Duração" onChange={(e) => setNewCourse({...newCourse, courseDuration: e})}/>
                        </Form.Item>
                        <Form.Item label='Área' style={{gridArea: 'area'}}>
                            <Select
                                showSearch
                                placeholder="Buscar"
                                optionFilterProp="children"
                                onChange={(e) => setNewCourse({...newCourse, courseArea: e})}
                            >
                            {
                                coursesAreasMock.map((e, i) => {
                                    return <Select.Option key={i} value={e}>{e}</Select.Option>
                                })
                            }
                            </Select>
                        </Form.Item>
                        <Form.Item label='Tipo' style={{gridArea: 'type'}}>
                            <Select
                                showSearch
                                placeholder="Buscar"
                                optionFilterProp="children"
                                onChange={(e) => setNewCourse({...newCourse, courseType: e})}
                            >
                            {
                                coursesTypesMock.map((e, i) => {
                                    return <Select.Option key={i} value={e}>{e}</Select.Option>
                                })
                            }
                            </Select>
                        </Form.Item>
                        <Form.Item label='Modalidade' style={{gridArea: 'modality'}}>
                            <Select
                                showSearch
                                placeholder="Buscar"
                                optionFilterProp="children"
                                onChange={(e) => setNewCourse({...newCourse, courseModality: e})}
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
        </MainContainer>
    )
}