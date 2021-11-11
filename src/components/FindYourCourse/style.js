import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
    height: 200px;
    margin-top: 40px;
`;

export const MainContent = styled.div`
    height: 100%;
    margin: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #ccc;

    div {
        width: 300px;

        div {
            box-shadow: 0 1px 2px #ccc;
        }
    }
`;

