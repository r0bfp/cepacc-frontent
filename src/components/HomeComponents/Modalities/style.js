import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 60px 0;
`;

export const Content = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    img{
        height: 100%;
        object-fit: contain;
        margin-left: 40px;
        height: 1000px;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    font-weight: 700;
    color: #002756;
    text-align: center;
    margin-bottom: 50px;
`;

export const TextContainer = styled.h1`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
`;

export const TextContentTitle = styled.h1`
    font-size: 30px;
    color: #002756;
    font-weight: 700;
`;

export const TextContent = styled.span`
    color: #57667e;
    font-size: 20px;
`;

export const FooterContainer = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    justify-content: center;

    button{
        width: 200px;
        height: 60px;
        font-weight: 500;
        font-size: 20px;
    }
`;
