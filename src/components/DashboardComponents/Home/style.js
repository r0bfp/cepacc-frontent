import styled, { css } from "styled-components";


export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 40px;
`;

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 700;
    color: #002756;
`;

// HEADER ===================================
export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;

export const HeaderDate = styled.span`
    color: #b3b9c4;
    font-weight: 600;
    font-size: 16px;
`;

// WELCOME ===================================
export const WelcomeContainer = styled.div`
    width: 100%;
    height: 200px;
    background-color: #f5f0e4;
    border-radius: 15px;
    padding: 20px;
`;

export const WelcomeTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #002756;
`;

export const WelcomeText = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #002756;
    word-break: break-word;
`;
