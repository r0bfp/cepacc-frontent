import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 46px;
    background-color: #FFFF;

    position: fixed;
    top: 0;
    z-index: 999;
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    max-width: 1400px;
    padding: 0 40px;
    margin: 0 auto;
`;

export const LogoContainer = styled.div`
    width: 65px;
    max-height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #f0f0f0;

    img{
        width: 65px;
        height: 100%;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
`;

export const MenuContainer = styled.div`
    min-width: 80%;
`;




