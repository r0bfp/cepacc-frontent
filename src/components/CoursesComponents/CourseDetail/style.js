import styled from "styled-components";
import { AppColors } from "../../../globalStyle";

export const MainContainer = styled.div`
    height: 100%;
    width: 350px;
    position: absolute;
    transition: 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000);
    right: ${props => props.showing ? '0' : '-350px'};
    top: 0;
    padding-top: 100px;
    background-color: #FFF;
    box-shadow: -8px 0px 10px rgb(25 25 25 / 10%);
`;

export const Content = styled.div`
    width: 350px;
    height: 100%;
    padding: 50px 30px;
    position: fixed;
    word-break: break-word;
`;

export const CloseButton = styled.button`
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin-bottom: 15px;
    transition: 200ms cubic-bezier(.645,.045,.355,1);
    color: #bababa;

    :hover{
        color: ${AppColors.primary};
    }
`;

export const CourseTitle = styled.h1`
    background-color: #F0EEED;
    border: 1px solid #F0EEED;
    font-size: 22px;
    padding: 5px;
    border-radius: 10px;
    text-align: center;
    color: ${AppColors.primaryText};
    font-weight: 500;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Body = styled.div`

`;

