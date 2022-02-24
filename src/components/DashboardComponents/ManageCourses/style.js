import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    max-height: 100%;
    display: grid;
    grid-template-rows: auto 80% auto;
`;

export const TableTitle = styled.h1`
    font-weight: 700;
    color: #002756;
`;

export const TableContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 20px;
    overflow: scroll;
    background-color: #FFF;
    border: 1px solid #F0EEED;
    border-radius: 5px;
`;

export const AddCourseContainer = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: end;
`;