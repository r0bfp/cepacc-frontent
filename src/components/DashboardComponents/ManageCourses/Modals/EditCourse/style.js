import styled from "styled-components";
import { AppColors } from "../../../../../globalStyle";


export const MainContainer = styled.div`
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
    
`;

export const Title = styled.h1`
    color: ${AppColors.primaryText};
    margin: 0;
    margin-left: 20px;
`;

export const Header = styled.div`
    display: flex;
    padding: 20px;
    border-bottom: 1px solid #f0f0f0;
    justify-content: space-between;

    span{
        display: flex;
        align-items: center;
    }
`;

export const Body = styled.div`
    padding: 20px 40px;
    color: ${AppColors.primaryText};
`;

export const Footer = styled.div`
    border-top: 1px solid #f0f0f0;
    display: flex;
    justify-content: end;
    padding: 20px;

    button{
        margin-left: 10px;
    }
`;
