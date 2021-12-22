import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 40px;
`;

export const Content = styled.div`
    width: 100%;
    height: 200px;
    padding: 20px;
    background-color: #FFF;
    border: 1px solid #F0EEED;
    border-radius: 5px;
    overflow: scroll;
`;

export const SubTitle = styled.h3`
    font-size: 14px;
    font-weight: 800;
    color: #909aa0;
    margin: 0;
`;

export const MoreButton = styled.button`
    background-color: transparent;
    border: none;
    color: #909aa0;
    padding: 5px;
    cursor: pointer;
    font-size: 14px;

    span{
        margin-right: 5px;
    }

    transition: 0.5s cubic-bezier(0.190, 1.000, 0.220, 1.000);

    :hover{
        transform: translateX(5px);
    }
`;

export const NoPendenciesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const NoPendenciesIcon = styled.div`
    font-size: 50px;
    color: #4E9F3D;
`;

export const NoPendenciesText = styled.div`
    font-size: 16px;
    color: #A4ADB3;
`;