import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MainContent = styled.div`
    width: 90%;
    height: 500px;
    padding: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: #747c81;
    background-color: #FFFF;
`;

export const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 10px;
    font-size: 16px;

    input{
        background-color: rgb(232, 240, 254);
        border-radius: 5px;
    }
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 28px;
    font-weight: bold;
    color: #747c81;
`;

export const SubTitle = styled.p`
    color: #747c81;
    font-size: 16px;
`;

export const ForgotPassword = styled.a`
    margin-top: 40px;
    color: #747c81;
    font-size: 14px;
    text-decoration: underline;

    :hover{
        color: #747c81;
        text-decoration: underline;
    }
`;



