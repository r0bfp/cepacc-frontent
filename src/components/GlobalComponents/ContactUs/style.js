import styled from "styled-components";

export const MainContainer = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
    cursor: pointer;

    padding: 20px;
    background-color: #01468C;
`;

export const Message = styled.span`
    font-weight: 800;
    font-size: 16px;
    color: #FFF;
`;