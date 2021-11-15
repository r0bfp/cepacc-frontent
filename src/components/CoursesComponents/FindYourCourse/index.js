import React from "react";
import { Select } from "antd";

import { MainContainer, MainContent } from "./style";

const { Option } = Select;

export default function FindYourCourse() {
    return (
        <MainContainer>
            <MainContent>
                <Select defaultValue="Graduação" size="large">
                    <Option value="Teste">Teste1</Option>
                    <Option value="Teste2">Teste2</Option>
                </Select>
                <Select defaultValue="Nome do Curso" size="large">
                    <Option value="Teste">Teste1</Option>
                    <Option value="Teste2">Teste2</Option>
                </Select>
            </MainContent>
        </MainContainer>
    )
}