import React from "react";
import { Select, Form, Divider, Radio } from "antd";

import { MainContainer, Title } from "./style";


export default function CourseForm() {
    const courseTypes = [
        'Graduação',
        'Tecnólogo',
        '2° Licenciatura',
        'Cursos de Extensão',
        'Aperfeiçoamento',
        'Preparatórios',
        'Cursos Livres'
    ]

    const courseArea = [
        'Educação',
        'Tecnologia',
    ]

    const courses = [
        'Curso 1',
        'Curso 2',
    ]

    return (
        <MainContainer>
            <Title>Curso</Title>
            <Form layout='vertical'>
                <Form.Item
                    label="MODALIDADE"
                    name="modality"
                >
                    <Radio.Group defaultValue="presencial" buttonStyle="solid">
                        <Radio.Button value="presencial">Presencial</Radio.Button>
                        <Radio.Button value="online">Online</Radio.Button>
                        <Radio.Button value="semipresencial">Semipresencial</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="CURSO"
                    name="course"
                >
                    <Select showSearch>
                        {
                            courses.map((e, i) => {
                                return <Select.Option key={i} value={e}>{e}</Select.Option>
                            })
                        }
                    </Select>
                </Form.Item>
            </Form>
        </MainContainer>
    )
}