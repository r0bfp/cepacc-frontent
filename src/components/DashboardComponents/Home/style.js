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
    height: 70px;
    background-color: #F5F1E6;
    border: 1px solid #F0EEED;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    cursor: pointer;
    transition: 200ms ease-in-out;
    margin-bottom: 40px;

    &:hover{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    * {
        color: #01468C;
        font-size: 24px;
        font-weight: 600;
    }
`;

export const PartnerLink = styled.a`
    &:hover{
        color: #01468C;
    }
`;

export const SubTitle = styled.h3`
    font-size: 18px;
    font-weight: 800;
`;

export const MyCoursesContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

export const MyCoursesContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFF;
    border: 1px solid #F0EEED;
`;
