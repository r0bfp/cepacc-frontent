import styled, { css } from "styled-components";


export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 20% auto 30%;
`;

// HEADER =================================
export const HeaderContainer = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 50px;
    display: flex;
    justify-content: center;
`;

export const LogoContainer = styled.div`
    width: 80px;
    height: 80px;

    img{
        width: 100%;
        height: 100%;
    }
`;

// BODY ===================================
export const BodyContainer = styled.div`
    height: 100%;
    width: 100%;
`;

const selectedBarIndicator = css`
    ::after{
        content: '';
        width: 5px;
        height: 45%;
        background-color: #0e89c4;
        border-radius: 20%;
    }
`;

export const ItemContainer = styled.div`
    height: 70px;
    width: 100%;
    padding-left: 40px;
    display: flex;
    align-items: center;
    flex-direction: row;
    cursor: pointer;

    :hover label{
        color: #002756;
    }

    ${props => props.selected && selectedBarIndicator}
`;

export const ItemIconContainer = styled.div`
    min-width: 70px;
    height: 100%;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 200ms cubic-bezier(.645,.045,.355,1);

    color: ${props => props.selected ? '#0e89c4' : '#b3b9c4'};
`;

export const ItemTextContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
`;

export const ItemText = styled.label`
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: 200ms cubic-bezier(.645,.045,.355,1);
    color: ${props => props.selected ? '#002756' : '#b3b9c4'};
`;


// FOOTER ==================================
export const FooterContainer = styled.div`
    height: 100%;
    width: 100%;
`;