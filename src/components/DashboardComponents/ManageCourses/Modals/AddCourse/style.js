import styled from "styled-components";


export const BlackBackground = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 999;
    background-color: rgba(0, 0, 0, .3);
    box-shadow: rgba(0, 0, 0, .3) 0px 7px 29px 0px;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    display: ${props => props.visible ? 'flex' : 'none'};
`;

export const MainContent = styled.div`
    background-color: #FFFFFF;
    min-width: 500px;
    border-radius: 4px;

    label {
        font-weight: 600;
        font-size: 12px;
        color: #002756;
    }

    input, .ant-select-selector, .ant-input-number {
        border-radius: 5px !important;
    }
`;

export const Title = styled.h1`
    color: #002756;
    margin: 0;
    font-size: 20px;
    font-weight: 700;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Body = styled.div`
    padding: 20px 40px;
`;

export const Footer = styled.div`
    border-top: 1px solid #f0f0f0;
    display: flex;
    justify-content: end;
    padding: 20px;

    button {
        margin-left: 10px;
        border-radius: 15px;
    }
`;
