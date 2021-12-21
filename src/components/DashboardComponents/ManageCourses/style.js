import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    max-height: 100%;
    padding: 30px;
    background-color: #FFF;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
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
    min-height: 400px;
    overflow: scroll;
    border: 1px solid #f0f0f0;
`;

export const AddCourseContainer = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: end;
`;