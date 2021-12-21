import styled, { css } from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #FFFF;
    padding: 0 40px;

    position: fixed;
    top: 0;
    z-index: 999;
    box-shadow: ${props => props.onTop ? '' : ' 0 10px 15px rgb(25 25 25 / 10%)'};
`;

export const MainContent = styled.div`
    height: 100%;
    max-width: 1500px;

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
    display: flex;;
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
    /* color: ${props => props.selected ? '#096FB5' : '#000000d9'}; */
/* 
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
    
    
    &:hover::after{
        ${MenuItemAfter}
    } */

    &:hover{
        span{
            color: rgb(1, 70, 140);
        }
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
    padding: 0 10px;
`;

export const Text = styled.span`
    font-weight: 700;
    color: #2B2B2B;
`;

export const EmphasisButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;

    button{
        width: 180px;
        height: 60px;

        span{
            font-size: 15px;
            font-weight: 500;
            letter-spacing: .5px;
        }
    }
`;




