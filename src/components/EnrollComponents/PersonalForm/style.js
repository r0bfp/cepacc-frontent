import styled from "styled-components";
import { AppColors } from "../../../globalStyle";


export const MainContainer = styled.div`
    width: 40%;
    margin: 0 auto;
    padding: 10px 50px 20px 50px;
    box-shadow: 0 5px 5px rgb(126 126 126 / 20%);
    background-color: #FFFF;

    label{
        color: #a2b0b8;
        font-weight: 600;
        font-size: 12px;
    }
`;

export const Title = styled.h1`
    margin: 0;
    color: ${AppColors.primaryText};
`;