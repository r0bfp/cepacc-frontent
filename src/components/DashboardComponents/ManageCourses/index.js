import React from "react";
import { MainContainer } from "./style";

import Table from "../Table";


export default function ManageCourses(props) {
    const dataMock = [
        {
            key: 1,
            name: 'curso teste',
            duration: '450hrs',
            type: '2° Licenciatura',
            area: 'Educação'
        },
        {
            key: 2,
            name: 'curso teste 2',
            duration: '470hrs',
            type: 'Pós-Graduação',
            area: 'Educação'
        },
    ]

    return (
        <MainContainer>
            <Table
                tableData={dataMock}
                tableTitle='Cursos'
            />
        </MainContainer>
    )
}