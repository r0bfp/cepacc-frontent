import styled from "styled-components";

export const MainContainer = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;

    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const MainContent = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 50%) 0 6px 100px 0;
`;

export const ButtonContainer = styled.div`
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 50%) 0 6px 100px 0;
    cursor: pointer;

    padding: 20px;
    background-color: #01468C;
`;

export const Message = styled.span`
    font-weight: 800;
    font-size: 14px;
    color: #FFF;
`;