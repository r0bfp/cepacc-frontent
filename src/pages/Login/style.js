import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 200px 40px;
    display: flex;
    justify-content: center;
`;

export const MainContent = styled.div`
    max-width: 1000px;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    border-radius: 3px;
`;

