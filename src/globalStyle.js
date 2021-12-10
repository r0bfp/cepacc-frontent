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
        background-color: #F5F6FC;
    }
`;

export const AppColors = {
    primary: 'rgb(1, 70, 140)',
    primaryText: '#093366',
    secondary: 'rgb(204, 160, 51)',
    coursesColors: {
        '2° Licenciatura': '#ef476f',
        'Pós-Graduação': '#48cae4',
        'Cursos de Extensão': '#06d6a0',
        'Reforço Escolar': '#fd9e02',
        'Cursos Preparatórios': '#126782'
    }
}