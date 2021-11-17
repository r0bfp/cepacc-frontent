import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 15px;
`;

export const MainContent = styled.div`
    display: grid;
    grid-template-areas: 
        'name name duration add'
        'area type modality add';
    column-gap: 10px;
`;

export const ConfirmContainer = styled.div`
    width: 100%;
    height: 100%;
    grid-area: 'add';
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
`;
