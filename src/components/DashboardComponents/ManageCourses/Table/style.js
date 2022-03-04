import styled from "styled-components";


export const TableContainer = styled.div`
    width: 100%;
    max-height: 500px;
    overflow: auto;
    background-color: #FFF;
    border-radius: 15px;
`;

export const TableContent = styled.table`
    width: 100%;
    font-size: 14px;

    th, td {
        padding: 15px;
    }
`;

export const TableHead = styled.th`
    position: sticky; 
    top: 0; 
    z-index: 999;
    background-color: #01468c;
    color: #FFF;

    :not(:last-child){
        ::after{
            content: '';
            position: absolute;
            right: 0;
            bottom: 20%;
            height: 60%;
            width: 1.5px;
            background-color: #c9cbd752;
        }
    }
`;

export const TableRow = styled.tr`
    border-bottom: 1px solid #c9cbd752;

    transition: 100ms ease;
    :hover{
        background-color: #F5F5F5;
    }
`;

export const TableColumn = styled.td`
    text-align: center;
    color: #002756;
`;


