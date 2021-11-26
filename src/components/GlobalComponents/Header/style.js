import styled, { css } from "styled-components";
import { AppColors } from "../../../globalStyle";

export const MainContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFF;
    border-bottom: 1px solid #f0f0f0;

    position: fixed;
    top: 0;
    z-index: 999;
`;

export const MainContent = styled.div`
    height: 100%;
    max-width: 1200px;

    display: flex;
    flex-direction: row;
    margin: 0 auto;
`;


export const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 5px;

    img{
        height: 100%;
        object-fit: contain;
    }
`;

export const Menu = styled.ul`
    list-style-type: none;
    margin: 0;

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
`;

export const MenuItemAfter = css`
    height: 2px;
    background-color: #096FB5;
`;

export const MenuItem = styled.li`
    height: 100%;
    display: flex;
    font-size: 16px;
    margin-right: 10px;
    cursor: pointer;
    position: relative;
    transition: 200ms cubic-bezier(.645,.045,.355,1);
    color: ${props => props.selected ? '#096FB5' : '#000000d9'};

    &::after{
        content: '';
        width: 100%;
        display: block;
        position: absolute;
        bottom: 0;
        border-radius: 20%;
        transition: .3s cubic-bezier(.645,.045,.355,1);

        ${props => props.selected && MenuItemAfter};
    }
    
    &:hover{
        color: #096FB5;
    }

    &:hover::after{
        ${MenuItemAfter}
    }
`;

export const IconContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 5px 0 10px;
`;

export const TextContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px 0 5px;
`;

export const Text = styled.span`

`;

export const EmphasisButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
`;




