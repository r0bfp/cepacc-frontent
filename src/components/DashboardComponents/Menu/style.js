import styled, { css } from "styled-components";


export const MainContainer = styled.div`
    height: 100%;
    width: 68px;
    background-color: #FFF;
    overflow: hidden;
    transition: 200ms ease-in-out;
    width: ${props => props.isOpen ? '248px' : '68px'};
    display: grid;
    grid-template-rows: 10% auto 15%;
    border-right: 2px solid #F0EEED;
`;

export const HeaderContainer = styled.div`
    width: 68px;
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: center;
    padding: 20px 0;
`;

export const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const FooterContainer = styled.div`
    height: 50px;
    span{
        color: #EB005C;
    }

`;

export const MenuItemAfter = css`
    width: 5px;
    height: 100%;
    background-color: #01468C;
`;

export const MenuItemContainer = styled.div`
    height: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: 68px auto;
    position: relative;
    border-top: 1px solid #F0EEED;

    transition: 150ms cubic-bezier(.645,.045,.355,1);
    background-color: ${props => props.selected && '#F0EEED'};

    :hover{
        cursor: pointer;
        background-color: #F0EEED;
    }

    &::after{
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        transition: .3s cubic-bezier(.645,.045,.355,1);

        ${props => props.selected && MenuItemAfter};
    }
`;

export const MenuItemImageContainer = styled.div`
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: ${props => props.selected ? "#01468C" : "#A4ADB3"};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MenuItemTextContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    overflow: hidden;
    white-space: nowrap;
`;

export const MenuItemText = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.selected ? "#01468C" : "#A4ADB3"};
`;
