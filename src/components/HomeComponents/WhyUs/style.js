import styled from "styled-components";


export const MainContainer = styled.div`
    height: 400px;
    width: 100%;

    background-color: #E8E4D9;
    overflow: hidden;
    display: flex;
    justify-content: center;
    position: relative;
`;

export const LeftSquare = styled.div`
    width: 800px;
    height: 700px;
    position: absolute;
    transform: rotate(120deg);
    left: -400px;
    top: -100%;
    background-color: #01468C;
`;

export const RightSquare = styled.div`
    width: 800px;
    height: 700px;
    position: absolute;
    transform: rotate(120deg);
    right: -400px;
    bottom: -100%;
    background-color: #01468C;
`;


export const MainContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0;
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: #01468C;
    text-align: center;
`;

export const Differentials = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const DifferentialContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
`;

export const DifferentialTitle = styled.span`
    font-size: 40px;
    line-height: 45px;
    letter-spacing: -1px;
    font-weight: 900;
    color: #FC862D;
`;

export const DifferentialSubTitle = styled.span`
    color: #01468C;
    font-weight: 800;
    text-align: center;
    font-size: 21px;
    margin-bottom: 26px;
    line-height: 21px;
`;
