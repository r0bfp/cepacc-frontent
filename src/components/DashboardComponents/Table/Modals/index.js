import React from "react";
import { Form, Input, InputNumber, Select } from "antd";

import { MainContainer } from "./style";


function ModalEdit(props) {
    const { 
        courseName,
        courseDuration,
        courseType,
        courseArea,
        courseModality
    } = props.selectedCourse;

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
            <Form layout="horizontal" labelCol={{ span: 5 }}>
                <Form.Item label='Nome'>
                    <Input defaultValue={courseName}/>
                </Form.Item>
                <Form.Item label='Duração'>
                    <InputNumber defaultValue={courseDuration}/>
                </Form.Item>
                <Form.Item label='Tipo'>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Buscar"
                        optionFilterProp="children"
                        defaultValue={courseType}
                    >
                    {
                        coursesTypesMock.map((e, i) => {
                            return <Select.Option key={i} value={i}>{e}</Select.Option>
                        })
                    }
                    </Select>
                </Form.Item>
                <Form.Item label='Área'>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Buscar"
                        optionFilterProp="children"
                        defaultValue={courseArea}
                    >
                    {
                        coursesAreasMock.map((e, i) => {
                            return <Select.Option key={i} value={i}>{e}</Select.Option>
                        })
                    }
                    </Select>
                </Form.Item>
                <Form.Item label='Modalidade'>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Buscar"
                        optionFilterProp="children"
                        defaultValue={courseModality}
                    >
                    {
                        coursesModalitiesMock.map((e, i) => {
                            return <Select.Option key={i} value={i}>{e}</Select.Option>
                        })
                    }
                    </Select>
                </Form.Item>
            </Form>
        </MainContainer>
    )
}

function ModalRemove(props) {
    return (
        <MainContainer>
            Tem certeza que deseja remover o curso <strong>{props.courseName}</strong>?
        </MainContainer>
    )
}

export { ModalEdit, ModalRemove };