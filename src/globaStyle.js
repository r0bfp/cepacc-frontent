import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
        width: 100%;
    }
`;

export const AppColors = {
    primary: '#1A4E87',
    primaryText: '#093366',
    secundaryText: 'rgb(204, 160, 51)',
    coursesColors: {
        '2° Licenciatura': '#ef476f',
        'Pós-Graduação': '#48cae4',
        'Cursos de Extensão': '#06d6a0',
        'Reforço Escolar': '#fd9e02',
        'Cursos Preparatórios': '#126782'
    }
}