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
    areaColors: {
        'Negócios': '#ef476f',
        'Saúde': '#48cae4',
        'Educação': '#06d6a0',
        'Tecnologia': '#6998AB',
        'Direito': '#750550',
        'Ciências Humanas': '#519259',
        'Teologia': '#D4B499'
    }
}