import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto 25%;

    label{
        color: #002756;
    }
`;

export const Title = styled.h1`
    font-weight: 700;
    color: #002756;
`;

export const NewsContainer = styled.div`
    width: 100%;
    padding-right: 30px;
`;

export const NewsContent = styled.div`
    width: 100%;
    padding: 20px;
    background-color: #FFF;
    border: 1px solid #F0EEED;
    border-radius: 5px;
`;

export const NewsTitle = styled.div`
`;

export const FastAccessContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 30px;
`;

export const FastAccessContent = styled.div`
    width: 100%;
    height: 100%;
`;

export const PartnerContainer = styled.div`
    width: 100%;
`;

export const PartnerContent = styled.div`
    width: 100%;
    height: 70px;
    background-color: #01468C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    cursor: pointer;
    transition: 200ms ease-in-out;
    margin-bottom: 40px;
    border-radius: 5px;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.5) 0px 7px 29px 0px;
    }

    * {
        color: #FFF;
        font-size: 22px;
        font-weight: 600;
    }
`;

export const PartnerLink = styled.a`
    overflow: hidden;

    &:hover{
        color: #FFF;
    }
`;
