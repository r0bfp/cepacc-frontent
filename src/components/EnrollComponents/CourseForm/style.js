import styled from "styled-components";
import { AppColors } from "../../../globalStyle";


export const MainContainer = styled.div`
    width: 300px;
    padding: 30px 0;
    margin: 0 auto;

    label{
        color: #a2b0b8;
        font-weight: 600;
        font-size: 12px;
    }
`;


export const Title = styled.h1`
    color: ${AppColors.primaryText};
`;