import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
`;

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 700;
    color: #002756;
`;

export const TableContainer = styled.div`
    width: 100%;
    padding: 20px;
    overflow: scroll;
    background-color: #FFF;
    border: 1px solid #F0EEED;
    border-radius: 15px;
`;

export const AddCourseContainer = styled.div`
    width: 100%;
    padding: 15px 0;
    display: flex;
    justify-content: end;
    
    button {
        border-radius: 40px;
    }
`;