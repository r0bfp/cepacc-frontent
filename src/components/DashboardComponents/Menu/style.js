import styled from "styled-components";
import { AppColors } from "../../../globalStyle";


export const MainContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #f0f0f0;

    transition: 200ms ease-in-out;
    width: ${props => props.isOpen ? '250px' : '65px'};
    overflow: hidden;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 20%;
`;

export const MenuButtonContainer = styled.div`
    width: 62px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 65px auto;
    grid-template-rows: 1fr;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    transition: 100ms;

    border-right: ${props => props.selected ? `5px solid ${AppColors.primary}` : 'none'};

    * {
        color: ${AppColors.primaryText};
    }

    &:hover{
        background-color: #EEEEEE;
    }
`;

export const IconContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
`;

export const TextContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    white-space: nowrap;
`;

export const Text = styled.span`
    font-size: 16px;
`;