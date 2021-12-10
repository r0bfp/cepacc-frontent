import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        overflow: hidden;
    }
`

export const MainContainer = styled.div`
    width: 100%;
    height: 85%;
    padding: 80px 40px;
`;

export const Main = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 500px auto;
`;

export const StepContentContainer = styled.div`
    width: 100%;
    padding-top: 20px;
    margin: 0 auto;
`;

export const NextButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    padding-right: 20%;
`;
