import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
    height: 85%;
    padding: 180px 40px;
`;

export const Main = styled.div`
    height: 100%;
    max-width: 1200px;
    min-height: 700px;
    background-color: #FFF;
    border: 1px solid #F0EEED;
    border-radius: 5px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 2fr;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 80px auto 80px;
`;

export const Banner = styled.div`
    width: 100%;
    height: 100%;

    img{
        width: 100%;
        height: 100%;
    }
`;

export const StepperContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #F0EEED;
`;

export const StepsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
