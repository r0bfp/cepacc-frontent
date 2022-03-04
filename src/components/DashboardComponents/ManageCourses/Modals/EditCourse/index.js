import React, { useEffect, useState } from "react";
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

export default function ModalEditCourse({visible, setVisible, selectedCourse, handleEditCourse}) {
    const [selectedRowData, setSelectedRowData] = useState({
        name: null, 
        duration: null, 
        type: null, 
        area: null, 
        modality: null
    });

    useEffect(() => {
        selectedCourse && setSelectedRowData(selectedCourse);
    }, [selectedCourse]);

    function handleOkClick() {
        handleEditCourse(selectedRowData);
        setVisible(prev => !prev);
    }

    return (
        <MainContainer visible={visible}>
            <MainContent>
                <Header>
                    <Title>Editar Curso</Title>
                    <CloseOutlined style={{ fontSize: '22px', cursor: 'pointer' }} onClick={() => setVisible(prev => !prev)}/>
                </Header>
                <Body>
                    <Form layout='horizontal' labelCol={{ span: 6 }}>
                        <Form.Item label="CURSO" style={{gridArea: 'name'}}>
                            <Input 
                                placeholder="Nome do curso" 
                                value={selectedRowData.name}
                                onChange={(e) => setSelectedRowData({...selectedRowData, name: e.target.value})}
                            />
                        </Form.Item>
                        <Form.Item label="DURAÇÃO" style={{gridArea: 'duration'}}>
                            <InputNumber
                                min={0} 
                                placeholder="Duração"
                                value={selectedRowData.duration}
                                onChange={(e) => setSelectedRowData({...selectedRowData, duration: e})}
                            />
                        </Form.Item>
                        <Form.Item label='ÁREA' style={{gridArea: 'area'}}>
                            <Select
                                showSearch
                                placeholder="Buscar"
                                optionFilterProp="children"
                                value={selectedRowData.area}
                                onChange={(e) => setSelectedRowData({...selectedRowData, area: e})}
                            >
                            {
                                coursesAreasMock.map((e, i) => {
                                    return <Select.Option key={i} value={e}>{e}</Select.Option>
                                })
                            }
                            </Select>
                        </Form.Item>
                        <Form.Item label='TIPO' style={{gridArea: 'type'}}>
                            <Select
                                showSearch
                                placeholder="Buscar"
                                optionFilterProp="children"
                                value={selectedRowData.type}
                                onChange={(e) => setSelectedRowData({...selectedRowData, type: e})}
                            >
                            {
                                coursesTypesMock.map((e, i) => {
                                    return <Select.Option key={i} value={e}>{e}</Select.Option>
                                })
                            }
                            </Select>
                        </Form.Item>
                        <Form.Item label='MODALIDADE' style={{gridArea: 'modality'}}>
                            <Select
                                showSearch
                                placeholder="Buscar"
                                optionFilterProp="children"
                                value={selectedRowData.modality}
                                onChange={(e) => setSelectedRowData({...selectedRowData, courseModality: e})}
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
                    <Button onClick={handleOkClick} type='primary'>OK</Button>
                </Footer>
            </MainContent>
        </MainContainer>
    )
}